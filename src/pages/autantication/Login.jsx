import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return toast.error("Please fill all fields!");
    }

    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", form);
      toast.success(res.data.message);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/notes");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="bg-gray-800/90 p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Login to <span className="text-blue-500">DevSkills</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold mt-2"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
