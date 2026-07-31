import { type NextFunction, type Response } from "express";
import { type AuthRequest } from "../middleware/auth.js";
import { transactionService } from "../services/transaction.service.js";

export async function sendMoneyController(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const senderId = req.user!.id;
    const { receiverId, amount } = req.body;

    const result = await transactionService({
      senderId,
      receiverId,
      amount,
    });

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
