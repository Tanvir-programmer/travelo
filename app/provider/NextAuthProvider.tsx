"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
type NextAuthProviderProps = {
  children: ReactNode;
};

// this is a session provider
const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
