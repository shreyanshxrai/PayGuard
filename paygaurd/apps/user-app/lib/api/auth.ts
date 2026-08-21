const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export async function signIn(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const data = await response.json();
  return data;
}
export async function signUp(
  email: string,
  password: string,
  name: string,
  phone: string,
) {
  const response = await fetch(`${API_URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ email, password, name, phone }),
    credentials: "include",
  });
  const data = await response.json();
  return data;
}
