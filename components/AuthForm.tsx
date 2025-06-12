"use client";
import { useState } from "react";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    setLoading(false);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="border p-2 rounded w-full mb-2"
      />
      <button onClick={handleLogin} className="bg-black text-white px-4 py-2 rounded">
        {loading ? "Loading..." : "Send Login Link"}
      </button>
    </div>
  );
}
