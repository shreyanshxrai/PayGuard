export async function getBalance() {
  const response = await fetch(`/api/balance`, {
    credentials: "include",
  });
  const data = await response.json();
  return data.balance;
}
