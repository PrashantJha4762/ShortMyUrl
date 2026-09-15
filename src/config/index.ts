import dotenv from "dotenv";

dotenv.config();

type ServerConfig = {
  PORT: number;
  RedisUrl: string;
  REDIS_COUNTER_KEY: string;
  BASE_URL: string
};
type Dbconfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
};

export const serverconfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3001,
  RedisUrl: process.env.REDIS_URL || "redis://localhost:6379",
  REDIS_COUNTER_KEY: process.env.REDIS_COUNTER_KEY || "url_counter_counter",
  BASE_URL: process.env.BASE_URL || "http://localhost:3001"
};
export const dbconfig: Dbconfig = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "Shortner_dev",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql"
};