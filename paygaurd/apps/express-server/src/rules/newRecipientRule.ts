import { isNewRecipient } from "../services/isNewRecipient.service.js";
export async function newRecipientRule(receiverId: number, senderId: number) {
  const NewRecipient = await isNewRecipient(receiverId, senderId);
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
