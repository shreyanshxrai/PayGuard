"use client";
import { getBalance } from "@/lib/api/account";
import { getHistory, getMe, getUsers } from "@/lib/api/users";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
};

type HistoryItem = {
  id: number;
  amount: number;
  time: string;
  Payee?: {
    name: string;
  };
};

export default function dashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [usersData, historyData, userData, userBalance] =
          await Promise.all([getUsers(), getHistory(), getMe(), getBalance()]);

        setUsers(usersData);
        setHistory(historyData);
        setUser(userData);
        setBalance(userBalance);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-3">
        {/* User Profile */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-semibold">User Details</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{user?.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Wallet Balance</p>
              <p className="text-2xl font-bold text-green-600">₹{balance}</p>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="rounded-xl bg-white p-6 shadow lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Pay Users</h2>

            <input
              type="text"
              placeholder="Search user..."
              className="rounded-md border px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <button
                  className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                  onClick={() => {
                    router.push(`/send/${user.id}`);
                  }}
                >
                  Pay
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="rounded-xl bg-white p-6 shadow lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Transaction History</h2>

            <input
              type="text"
              placeholder="Search history..."
              className="rounded-md border px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left">Receiver Name</th>
                  <th className="py-3 text-left">Amount</th>
                  <th className="py-3 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {history.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-4">{item.Payee?.name}</td>

                    <td>₹{item.amount}</td>

                    <td>
                      {new Date(item.time).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
