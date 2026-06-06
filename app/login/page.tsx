"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === "matchmaker" &&
      password === "password123"
    ) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          TDC Matchmaker Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="mb-4 w-full rounded border p-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded border p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full rounded bg-black p-3 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}