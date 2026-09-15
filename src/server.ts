import express from 'express';
import { serverconfig } from './config';
import v1Router from './router/v1Router/index.router';
import { GenericErrorHandler } from './middlewares/error.middleware';
import { logger } from './config/logger.config';
import { attachCorrelationId } from './middlewares/correlationId.middleware';
import { connectRedis } from './config/redis.config';
import { urlRouter } from './router/trpc/url';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { sequelize } from './db/models/sequelize';
import { trpcRouter } from './router/trpc';
import redirectRouter from './router/redirect.router';
const app=express();

app.use(express.json());

app.use(attachCorrelationId);

app.use('/trpc',createExpressMiddleware({
  router:trpcRouter,
}))

app.use('/api/v1',v1Router);

app.use('/', redirectRouter);

app.use(GenericErrorHandler)

app.listen(serverconfig.PORT, async() => {
  await sequelize.authenticate()
  await connectRedis()
  logger.info(`Database connected succesfully `)
  logger.info(`Server is running at http://localhost:${serverconfig.PORT}`);
});