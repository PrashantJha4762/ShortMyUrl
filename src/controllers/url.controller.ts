import { publicProcedure } from "../router/trpc/context";
import { z } from "zod";
import { CreateUrlService, GetOriginalUrlService } from "../services/url.service";
export const urlHandler={
    create: publicProcedure
        .input(z.object({
            originalUrl: z.string().url('invalid url')
        }))
        .mutation(async ({ input }) => {
            return await CreateUrlService(input.originalUrl);
        }),
    getOriginal: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await GetOriginalUrlService(input);
        }),
            
}