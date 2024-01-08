"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="py-3 bg-pink-500">
      <div className="wrapper">
        <ul className="flex gap-x-5 text-white">
          <li>
            <Link href="/">Next</Link>
          </li>
          <li>
            <Link href="/users">users</Link>
          </li>
          {status === "loading" && (
            <li>
              <span className="loading loading-spinner loading-md"></span>
            </li>
          )}
          {status === "authenticated" && (
            <>
              <li>
                <span>{session.user?.name}</span>
              </li>
              <li>
                <Link href="/api/auth/signout">signout</Link>
              </li>
            </>
          )}
          {status === "unauthenticated" && (
            <li>
              <Link href="/api/auth/signin">signin</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
