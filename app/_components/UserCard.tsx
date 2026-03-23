"use client";

import { useSession } from "next-auth/react";
import React from "react";

const UserCard: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <h2 className="font-bold">User Client</h2>
      <div>
        <p>Status: {status}</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserCard;
