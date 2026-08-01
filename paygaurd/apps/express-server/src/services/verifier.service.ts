import { largeAmountRule } from "../rules/largeAmountRule.js";
import { nightTransferRule as nightTimeRule } from "../rules/nightTransferRule.js";
import { multipleTransactionRule } from "../rules/multipleTransactionRule.js";
import { newRecipientRule } from "../rules/newRecipientRule.js";
import { RULE_CONFIG } from "../config/ruleconfig.js";
interface VerificationResult {
  totalScore: number;

  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  reasons: string[];

  triggeredRules: number;
}

export async function verifyTransaction(
  transactionAmount: number,
  senderId: number,
  receiverId: number,
): Promise<VerificationResult> {
  const context = {
    amount: transactionAmount,
    senderId,
    receiverId,
    createdAt: new Date(),
  };
  const rules = await Promise.all([
    largeAmountRule(context),
    nightTimeRule(),
    multipleTransactionRule(context),
    newRecipientRule(context),
  ]);
  return {
    totalScore: rules.reduce((acc, rule) => acc + rule.score, 0),
    reasons: rules.flatMap((rule) => rule.reason),
    riskLevel:
      rules.reduce((acc, rule) => acc + rule.score, 0) >
      RULE_CONFIG.HIGH_RISK_SCORE
        ? "CRITICAL"
        : rules.reduce((acc, rule) => acc + rule.score, 0) ==
            RULE_CONFIG.HIGH_RISK_SCORE
          ? "HIGH"
          : rules.reduce((acc, rule) => acc + rule.score, 0) >
              RULE_CONFIG.MEDIUM_RISK_SCORE
            ? "MEDIUM"
            : "LOW",
    triggeredRules: rules.filter((rule) => rule.score > 0).length,
  };
}
