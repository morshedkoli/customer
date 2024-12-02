"use client";

import { useEffect, useState } from "react";

export default function CustomerTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`/api/customer`);
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error)
    return (
      <div className="text-red-600">
        <p>{error}</p>
        <button
          onClick={fetchUsers}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );

  if (users.length === 0) return <p>No customers found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Total Services</th>
            <th className="border p-2">Total Payment Times</th>
            <th className="border p-2">Total Cost Of Services</th>
            <th className="border p-2">Total Paid Amount</th>
            <th className="border p-2">Due Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border p-2">{user.name || "N/A"}</td>
              <td className="border p-2">{user.address || "N/A"}</td>
              <td className="border p-2">{user.phone || "N/A"}</td>
              <td className="border p-2">
                {user.services ? user.services.length : 0}
              </td>
              <td className="border p-2">
                {user.paidHistories ? user.paidHistories.length : 0}
              </td>
              <td className="border p-2">
                {user.services
                  ? user.services.reduce(
                      (sum, service) => sum + (service.cost || 0),
                      0
                    )
                  : 0}
              </td>
              <td className="border p-2">
                {user.paidHistories
                  ? user.paidHistories.reduce(
                      (sum, payment) => sum + (payment.amount || 0),
                      0
                    )
                  : 0}
              </td>
              <td className="border p-2">{user.balance || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
