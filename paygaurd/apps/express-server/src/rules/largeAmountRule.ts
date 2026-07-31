import { RULE_CONFIG } from "../config/ruleconfig.js";

export function largeAmountRule(amount: number) {
  const threshold = RULE_CONFIG.LARGE_TRANSACTION;
  if (amount > threshold) {
    return {
      score: 30,
      reason:
        "Large amount transaction detected. Please verify the transaction details.",
    };
  }
  return {
    score: 0,
    reason: "Transaction amount is within the normal range.",
  };
}
