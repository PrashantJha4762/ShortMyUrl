import type { NextFunction, Request, Response } from "express";
import { GetOriginalUrlService } from "../services/url.service";

export const redirectHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const shortUrl = req.params.shortUrl;
        if (typeof shortUrl !== "string") {
            res.status(404).json({
                success: false,
                message: "Short URL not found"
            });
            return;
        }

        const redirect = await GetOriginalUrlService(shortUrl);

        if (!redirect) {
            res.status(404).json({
                success: false,
                message: "Short URL not found"
            });
            return;
        }

        res.redirect(redirect.original_url);
    } catch (error) {
        next(error);
    }
};