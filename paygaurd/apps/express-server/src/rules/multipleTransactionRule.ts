import { RULE_CONFIG } from "../config/ruleconfig.js";
import { multipleTransactionService } from "../services/multipleTransaction.service.js";
export async function multipleTransactionRule(senderId: number) {
  const THRESHOLD = RULE_CONFIG.MULTIPLE_TRANSACTIONS;
  const transactionCount = await multipleTransactionService(senderId);
  if (transactionCount > THRESHOLD) {
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
