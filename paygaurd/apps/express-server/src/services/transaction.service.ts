import { prisma } from "@repo/db";
interface SendMoneyInput {
  senderId: number;
  receiverId: number;
  amount: number;
}

export async function transactionService(data: SendMoneyInput) {
  const { senderId, receiverId, amount } = data;
  try {
    if (amount <= 0) {
      console.error("Amount must be greater than zero");
      throw new Error("Amount must be greater than zero");
    }
    const sender = await prisma.user.findUnique({
      where: { id: senderId },
    });
    if (!sender) {
      throw new Error("Sender not found");
    }

    const receiver = await prisma.user.findUnique({
      where: { id: receiverId },
    });
    if (!receiver) {
      throw new Error("Receiver not found");
    }
    if (senderId === receiverId) {
      throw new Error("Sender and receiver cannot be the same");
    }

    const transaction = await prisma.$transaction(async (prisma) => {
      const balance = sender?.balance;
      if (balance === undefined || balance < amount) {
        throw new Error("Insufficient balance");
      }
      const updatedSender = await prisma.user.update({
        where: { id: senderId },
        data: { balance: { decrement: amount } },
      });
      const updatedReceiver = await prisma.user.update({
        where: { id: receiverId },
        data: { balance: { increment: amount } },
      });
      const history = await prisma.transactionHistory.create({
        data: {
          fromUserId: senderId,
          toUserId: receiverId,
          amount: amount,
        },
      });
      return console.log("Transaction completed successfully");
    });
  } catch (error) {
    throw new Error(`Transaction failed: ${error}`);
  }
}
