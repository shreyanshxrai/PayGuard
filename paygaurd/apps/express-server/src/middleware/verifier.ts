import { type Response, type NextFunction } from "express";
import { type AuthRequest } from "./auth.js";
import { verifyTransaction } from "../services/verifier.service.js";

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
    console.log("Running transaction verification...");
    const result = await verifyTransaction(amount, req.user?.id!, receiverId);
    if (result.riskLevel === "CRITICAL") {
      return res.status(403).json({
        success: false,
        message: "Transaction blocked due to high risk",
        reasons: result.reasons,
      });
    }
    if (result.riskLevel === "HIGH") {
      const riskMessage = `Transaction flagged as high risk. Reasons: ${result.reasons.join(", ")}`;
      console.warn(riskMessage);
    }
    if (result.riskLevel === "MEDIUM") {
      const riskMessage = `Transaction flagged as medium risk. Reasons: ${result.reasons.join(", ")}`;
      console.warn(riskMessage);
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Verification failed",
    });
  }
}
