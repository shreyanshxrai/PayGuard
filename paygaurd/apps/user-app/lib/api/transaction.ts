const TRANSACTION_API_URL = process.env.NEXT_PUBLIC_EXPRESS_API_URL;
export async function verifyTransaction(amount: number, receiverId: number) {
  const response = await fetch(`${TRANSACTION_API_URL}/transaction/verify`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      receiverId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Verify failed: ${response.status}`);
  }

  return response.json();
}

export async function sendTransaction(amount: number, receiverId: number) {
  const response = await fetch(`${TRANSACTION_API_URL}/transaction/send`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      receiverId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Transaction failed: ${response.status}`);
  }

  return response.json();
}
