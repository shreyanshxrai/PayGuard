const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export async function getBalance() {
  const response = await fetch(`${API_URL}/api/balance`, {
    credentials: "include",
  });
  const data = await response.json();
  return data.balance;
}
