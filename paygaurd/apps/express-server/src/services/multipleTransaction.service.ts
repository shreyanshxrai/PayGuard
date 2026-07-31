import { prisma } from "@repo/db";
import type { RulesContext } from "../rules/RulesContext.js";

export async function multipleTransactionService(
  rulecontext: RulesContext,
): Promise<number> {
  const transactionCount = await prisma.transactionHistory.count({
    where: {
      fromUserId: rulecontext.senderId,
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // Transactions in the last 24 hours
      },
    },
  });
  return transactionCount;
}
