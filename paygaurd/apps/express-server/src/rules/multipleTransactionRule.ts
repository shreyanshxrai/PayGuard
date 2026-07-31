import { RULE_CONFIG } from "../config/ruleconfig.js";
import { multipleTransactionService } from "../services/multipleTransaction.service.js";
import type { RulesContext } from "./RulesContext.js";
export async function multipleTransactionRule(rulecontext: RulesContext) {
  const THRESHOLD = RULE_CONFIG.MULTIPLE_TRANSACTIONS;
  const transactionCount = await multipleTransactionService(
    rulecontext.senderId,
  );
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
