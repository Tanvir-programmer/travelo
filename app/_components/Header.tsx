"use client";
import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="navbar container mx-auto px-4 justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2">
          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white rounded-xl w-56"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary>Destinations</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/destinations">All Destinations</Link>
                    </li>
                    <li>
                      <Link href="/destinations/popular">Popular</Link>
                    </li>
                    <li>
                      <Link href="/destinations/international">
                        International
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/packages">Travel Packages</Link>
              </li>
              <li>
                <Link href="/booking">Booking</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-primary"
          >
            Travel<span className="text-secondary">O</span>
          </Link>
        </div>

        {/* CENTER MENU (DESKTOP) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-[15px] font-medium">
            <li>
              <Link className="hover:text-primary transition" href="/">
                Home
              </Link>
            </li>
            <li className="relative group">
              <span className="cursor-pointer hover:text-primary transition">
                Destinations ▾
              </span>
              <ul className="absolute left-0 top-10 bg-white shadow-xl rounded-xl p-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <Link href="/destinations" className="hover:text-primary">
                    All Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/popular"
                    className="hover:text-primary"
                  >
                    Popular Places
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/international"
                    className="hover:text-primary"
                  >
                    International Tours
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/packages" className="hover:text-primary transition">
                Travel Packages
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-primary transition">
                Booking
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-3">
          <LoginButton />
          {/* ✅ Hide Sign Up when logged in */}
          {!session && (
            <Link href="/register" className="btn btn-primary rounded-xl px-5">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
