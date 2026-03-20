"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <button
        className="btn btn-outline btn-primary rounded-xl px-5"
        onClick={() => signIn()}
      >
        Login Now
      </button>
    </div>
  );
};

export default LoginButton;
