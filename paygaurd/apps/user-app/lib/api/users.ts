export async function getMe() {
  const response = await fetch(`/api/users/me`, {
    credentials: "include",
  });

  return response.json();
}

export async function getUsers() {
  const response = await fetch(`/api/users`, {
    credentials: "include",
  });

  return response.json();
}

export async function getUserById(id: number) {
  console.log("API CALLED", id);
  const response = await fetch(`/api/users/user?id=${id}`, {
    credentials: "include",
  });
  return response.json();
}

export async function getHistory() {
  const response = await fetch(`/api/history`, {
    credentials: "include",
  });
  return response.json();
}
