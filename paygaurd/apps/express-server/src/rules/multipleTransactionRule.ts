import { multipleTransactionService } from "../services/multipleTransaction.service.js";
export async function multipleTransactionRule(senderId: number) {
  const transactionCount = await multipleTransactionService(senderId);
  if (transactionCount > 5) {
    return {
      score: 25,
      reason:
        "Multiple transactions detected. Please verify the transaction details.",
    };
  }
  return {
    score: 0,
    reason: "Transaction count is within the normal range.",
  };
}
