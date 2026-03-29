"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Booking = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      router.push("/register");
    }
  }, [router]);

  return <div>Welcome to booking page</div>;
};

export default Booking;
