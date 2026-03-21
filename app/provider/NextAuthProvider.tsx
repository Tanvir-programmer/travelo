"use client";

import { SessionProvider } from "next-auth/react";
// this is a session provider 
const NextAuthProvider = ({children}) => {
  return <div><SessionProvider>{children}</SessionProvider></div>;
};

export default NextAuthProvider;
