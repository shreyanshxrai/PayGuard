import { type Response, type NextFunction } from "express";
import { type AuthRequest } from "./auth.js";
import { AppError } from "../utils/appError.js";
import { logger } from "../logger/logger.js";

export async function verifierMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const { amount, receiverId } = req.body;

    // Basic validation
    if (!amount || !receiverId) {
      return res.status(400).json({
        success: false,
        message: "Amount and receiverId are required",
      });
    }

    // Placeholder for future fraud detection
    logger.info("Running transaction verification...");

    next();
  } catch (error) {
    next(error);
    return res.status(500).json({
      success: false,
      message: "Verification failed",
    });
  }
}
