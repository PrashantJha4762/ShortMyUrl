import type { NextFunction, Request, Response } from "express";
import type { AppError } from "../utils/error/app.error";

export const GenericErrorHandler=(err:AppError,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = err.StatusCode || 500;
    res.status(statusCode).json({
        success:false,
        message:err.message || "Internal server error"
    })
}