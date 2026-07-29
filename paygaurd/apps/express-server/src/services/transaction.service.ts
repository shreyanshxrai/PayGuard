interface SendMoneyInput {
  senderId: number;
  receiverId: number;
  amount: number;
}

export async function transactionService(data: SendMoneyInput) {
  const { senderId, receiverId, amount } = data;

  console.log({
    senderId,
    receiverId,
    amount,
  });

  return {
    transactionId: "TEMP_ID",
    senderId,
    receiverId,
    amount,
    status: "SUCCESS",
  };
}
