const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMe() {
  const response = await fetch(`${API_URL}/api/users/me`, {
    credentials: "include",
  });

  return response.json();
}

export async function getUsers() {
  const response = await fetch(`${API_URL}/api/users`, {
    credentials: "include",
  });

  return response.json();
}
export async function getHistory() {
  const response = await fetch(`${API_URL}/api/history`, {
    credentials: "include",
  });
  return response.json();
}
