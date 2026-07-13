export default function dashboard() {
  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Aman Gupta",
      email: "aman@gmail.com",
    },
  ];

  const history = [
    {
      id: 1,
      name: "Rahul Sharma",
      amount: "₹500",
      status: "Completed",
    },
    {
      id: 2,
      name: "Priya Verma",
      amount: "₹1200",
      status: "Completed",
    },
    {
      id: 3,
      name: "Aman Gupta",
      amount: "₹250",
      status: "Pending",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
    

      <div className="mx-auto grid max-w-7xl gap-8 p-8 lg:grid-cols-3">
        {/* User Profile */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-semibold">
            User Details
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">Shreyansh Rai</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">
                shreyansh@gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">
                +91 9876543210
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Wallet Balance
              </p>
              <p className="text-2xl font-bold text-green-600">
                ₹12,540
              </p>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="rounded-xl bg-white p-6 shadow lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Pay Users
            </h2>

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
                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>

                <button className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                  Pay
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="rounded-xl bg-white p-6 shadow lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Transaction History
            </h2>

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
                  <th className="py-3 text-left">User</th>
                  <th className="py-3 text-left">Amount</th>
                  <th className="py-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {history.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-4">{item.name}</td>
                    <td>{item.amount}</td>
                    <td>
                      <span className="rounded bg-green-100 px-3 py-1 text-sm text-green-700">
                        {item.status}
                      </span>
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