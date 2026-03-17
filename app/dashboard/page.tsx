"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          User Dashboard
        </h1>

        <p className="text-gray-700 mb-6">
          Welcome back 👋
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              My Courses
            </h2>
            <p className="text-sm text-gray-600">
              View enrolled courses.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Progress
            </h2>
            <p className="text-sm text-gray-600">
              Track learning progress.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Profile
            </h2>
            <p className="text-sm text-gray-600">
              Update your information.
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}