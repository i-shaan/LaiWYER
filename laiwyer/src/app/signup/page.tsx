"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
