"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      // Redirect to login after successful register
      router.push("/login");

    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">

      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-[#00006c] mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Role Select */}
        <select
          className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb000]"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ffb000] text-[#00006c] py-3 rounded-md font-semibold hover:bg-[#00006c] hover:text-white transition duration-300"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#00006c] font-semibold hover:text-[#ffb000]"
          >
            Login
          </Link>
        </p>
      </form>

    </div>
  );
}