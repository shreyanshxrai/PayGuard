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
