import { type Request, type Response, type NextFunction } from "express";
import { AppError } from "../utils/appError.js";
import { logger } from "../logger/logger.js";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error(error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
}
