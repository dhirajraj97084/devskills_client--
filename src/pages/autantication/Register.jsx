import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../../components/layout/Layout";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      return toast.error("All fields are required!");
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        form
      );
      toast.success(res.data.message);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Layout>
      {/* Dark Background */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
        {/* Card */}
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-400 mb-6 text-sm md:text-base">
            Join us and start your learning journey today 🚀
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition font-semibold mt-2 shadow-md"
            >
              Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 mt-6 text-sm md:text-base">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-400 hover:underline font-medium"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
