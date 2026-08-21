const TRANSACTION_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
export async function verifyTransaction(amount: number, receiverId: number) {
  const response = await fetch(`${TRANSACTION_API_URL}/transactions/verify`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ amount, receiverId }),
  });
  const data = await response.json();
  return data;
}
export async function sendTransaction(amount: number, receiverId: number) {
  const response = await fetch(`${TRANSACTION_API_URL}/transactions/send`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ amount, receiverId }),
  });
  const data = await response.json();
  return data;
}
