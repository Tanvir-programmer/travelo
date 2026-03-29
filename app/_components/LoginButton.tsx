"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState, useRef, useEffect } from "react";

const LoginButton = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (session) {
    const avatarSrc =
      session.user?.image ||
      `https://ui-avatars.com/api/?name=${session.user?.name ?? "User"}&background=random`;

    return (
      <div className="relative" ref={dropdownRef}>
        {/* Avatar Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
            <img
              src={avatarSrc}
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                {/* ✅ Plain img tag, no width/height props */}
                <img
                  src={avatarSrc}
                  alt="User Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  {session.user?.name ?? "User"}
                </p>
                <p className="text-xs text-slate-500 truncate w-36">
                  {session.user?.email ?? ""}
                </p>
              </div>
            </div>

            <hr className="border-gray-100 mb-3" />

            <button
              onClick={() => signOut()}
              className="w-full btn btn-outline btn-error btn-sm rounded-xl"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      className="btn btn-outline btn-primary rounded-xl px-5"
      onClick={() => signIn()}
    >
      Login Now
    </button>
  );
};

export default LoginButton;
