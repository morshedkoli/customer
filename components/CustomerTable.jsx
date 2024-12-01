"use client";

import { useEffect, useState } from "react";

export default function CustomerTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/customer");
        const data = await response.json();

        if (data && response.ok) {
          setUsers(data);
        } else {
          setError(data?.error || "Failed to fetch users");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Total Services</th>
            <th className="border p-2">Total Payment Time</th>
            <th className="border p-2">Total Cost Of Services</th>
            <th className="border p-2">Total Paid Amount</th>
            <th className="border p-2">Due Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.address}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.services.length}</td>
              <td className="border p-2">{user.paidHistories.length}</td>
              <td className="border p-2">
                {user.services.reduce((sum, service) => sum + service.cost, 0)}
              </td>
              <td className="border p-2">
                {user.paidHistories.reduce((sum, paid) => sum + paid.amount, 0)}
              </td>
              <td className="border p-2">{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
