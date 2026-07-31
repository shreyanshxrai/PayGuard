import { prisma } from "@repo/db";

export async function multipleTransactionService(
  senderId: number,
): Promise<number> {
  const transactionCount = await prisma.transactionHistory.count({
    where: {
      fromUserId: senderId,
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // Transactions in the last 24 hours
      },
    },
  });
  return transactionCount;
}
