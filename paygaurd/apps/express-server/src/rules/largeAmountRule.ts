import { RULE_CONFIG } from "../config/ruleconfig.js";
import type { RulesContext } from "./RulesContext.js";

export function largeAmountRule(rulecontext: RulesContext) {
  const threshold = RULE_CONFIG.LARGE_TRANSACTION;
  if (rulecontext.amount > threshold) {
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
