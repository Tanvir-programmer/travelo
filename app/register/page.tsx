"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Link as LinkIcon,
  Github,
  Chrome,
  ShieldCheck,
} from "lucide-react";
import postUser from "../../app/actions/server/auth";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password, photoURL, role } = formData;

    if (!name || !email || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const userData = {
      name,
      email,
      password,
      photoURL: photoURL || "https://via.placeholder.com/150",
      role,
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      const response = await postUser(userData);

      if (response?.success) {
        toast.success("Registration Successful! Welcome aboard 🎉");
        setFormData({
          name: "",
          email: "",
          password: "",
          photoURL: "",
          role: "user",
        });
        router.push("/"); // ✅ Redirect to home
      } else {
        toast.error(response?.message || "Registration failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#f0fdf4",
              color: "#166534",
              border: "1px solid #bbf7d0",
            },
          },
          error: {
            style: {
              background: "#fef2f2",
              color: "#991b1b",
              border: "1px solid #fecaca",
            },
          },
        }}
      />

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-slate-500 mt-2">Join us and start your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Full Name
            </label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all"
                placeholder="Md Tanvir Rahman"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Photo URL
            </label>
            <div className="relative group">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="url"
                name="photoURL"
                value={formData.photoURL}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all"
                placeholder="https://example.com/image.png"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all"
                placeholder="tanvir@example.com"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="password"
                name="password"
                value={formData.password}
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Role Selector */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">
              Role
            </label>
            <div className="relative group">
              <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-blue-600 transition-colors z-10" />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="user">👤 User</option>
                <option value="manager">🛠️ Manager</option>
                <option value="admin">👑 Admin</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-[0.98]"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <span className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-slate-400 bg-white px-4">
            Or use social
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
            <Chrome className="w-5 h-5" /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-medium text-slate-700">
            <Github className="w-5 h-5" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
