import { prisma } from "@repo/db";

import type { RulesContext } from "../rules/RulesContext.js";
export async function isNewRecipient(
  rulesContext: RulesContext,
): Promise<boolean> {
  // Check if the receiver is a new recipient for the sender
  console.log("checking new recipient rule");
  const isNewRecipient = await prisma.transactionHistory.findFirst({
    where: {
      fromUserId: rulesContext.senderId,
      toUserId: rulesContext.receiverId,
    },
  });
  return !isNewRecipient;
}
