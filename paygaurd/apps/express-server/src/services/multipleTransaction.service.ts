import { prisma } from "@repo/db";
import type { RulesContext } from "../rules/RulesContext.js";

export async function multipleTransactionService(
  rulecontext: RulesContext,
): Promise<number> {
  const transactionCount = await prisma.transactionHistory.count({
    where: {
      fromUserId: rulecontext.senderId,
      toUserId: rulecontext.receiverId,
      //error in the below line,
    },
  });
  return transactionCount;
}
