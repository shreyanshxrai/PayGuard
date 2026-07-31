import { prisma } from "@repo/db";
export async function isNewRecipient(
  receiverId: number,
  senderId: number,
): Promise<boolean> {
  // Check if the receiver is a new recipient for the sender
  const isNewRecipient = await prisma.transactionHistory.findFirst({
    where: {
      fromUserId: senderId,
      toUserId: receiverId,
    },
  });
  return !!isNewRecipient;
}
