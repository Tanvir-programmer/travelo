"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Link as LinkIcon,
  Github,
  Chrome,
} from "lucide-react";
import postUser from "../../app/actions/server/auth";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "", // Added as per your previous request
  });

  // Completed handleSubmit Function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password, photoURL } = formData;

    if (!name || !email || !password) {
      console.error("Submission Failed: Missing required fields.");
      return;
    }

    const userData = {
      name,
      email,
      password,
      photoURL: photoURL || "https://via.placeholder.com/150",
      createdAt: new Date().toISOString(),
    };

    // 1. Await the response from the server
    const response = await postUser(userData);

    // 2. Now you can log the response in the browser console
    console.log("Response from Server:", response);

    if (response?.success) {
      alert("Registration Successful!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
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
                required
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-[0.98]"
          >
            Create Account
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
