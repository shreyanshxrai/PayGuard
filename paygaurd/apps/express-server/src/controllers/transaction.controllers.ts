import { type Response } from "express";
import { type AuthRequest } from "../middleware/auth.js";
import { transactionService } from "../services/transaction.service.js";

export async function sendMoneyController(req: AuthRequest, res: Response) {
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
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Transaction failed",
    });
  }
}
