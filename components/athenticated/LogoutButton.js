// components/LogoutButton.js
"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "GET",
    });

    if (res.ok) {
      // Redirect to login after successful logout
      router.push("/auth/login");
    } else {
      alert("Failed to logout. Please try again.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{ padding: "10px", cursor: "pointer" }}
    >
      Logout
    </button>
  );
}
