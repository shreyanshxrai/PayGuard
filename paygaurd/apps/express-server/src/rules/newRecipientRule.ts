import { isNewRecipient } from "../services/isNewRecipient.service.js";
import type { RulesContext } from "./RulesContext.js";
export async function newRecipientRule(rulecontext: RulesContext) {
  const NewRecipient = await isNewRecipient(
    rulecontext.receiverId,
    rulecontext.senderId,
  );
  if (NewRecipient) {
    return {
      score: 20,
      reason: "New recipient detected. Please verify the recipient details.",
    };
  }
  return {
    score: 0,
    reason: "Recipient is not new.",
  };
}
