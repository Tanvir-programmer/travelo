"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const LoginButton = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Redirect to signup if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/register");
    }
  }, [status, router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Loading state
  if (status === "loading") {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
    );
  }

  // If logged in
  if (session) {
    const avatarSrc =
      session.user?.image ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        session.user?.name || "User"
      )}`;

    return (
      <div className="relative" ref={dropdownRef}>
        <button onClick={() => setOpen(!open)}>
          <img
            src={avatarSrc}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover border"
          />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={avatarSrc}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <p className="text-sm font-semibold">
                  {session.user?.name || "User"}
                </p>
                <p className="text-xs text-gray-500">
                  {session.user?.email || ""}
                </p>
              </div>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full btn btn-sm btn-error"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default LoginButton;