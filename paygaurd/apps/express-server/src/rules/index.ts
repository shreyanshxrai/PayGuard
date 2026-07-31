import { largeAmountRule } from "./largeAmountRule.js";
import { multipleTransactionRule } from "./multipleTransactionRule.js";
import { newRecipientRule } from "./newRecipientRule.js";
import { nightTransferRule } from "./nightTransferRule.js";

export const rules = [
  largeAmountRule,
  nightTransferRule,
  multipleTransactionRule,
  newRecipientRule,
];
