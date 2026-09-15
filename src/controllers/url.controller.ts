import { publicProcedure } from "../router/trpc/context";
import { z } from "zod";
import { CreateUrlService, GetOriginalUrlService } from "../services/url.service";
export const urlHandler={
    create: publicProcedure
        .input(z.string().url('invalid url'))
        .mutation(async ({ input }) => {
            return await CreateUrlService(input);
        }),
    getOriginal: publicProcedure
        .input(z.string())
        .query(async ({ input }) => {
            return await GetOriginalUrlService(input);
        }),
            
}