import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50 ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Travel<span className="text-secondary">O</span>
          </Link>
        </div>

        {/* CENTER MENU (DESKTOP) */}
        <div className="hidden lg:flex font-mono">
          <ul className="menu menu-horizontal gap-6 text-lg font-stretch-100%">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/destinations"
                className="hover:text-primary transition"
              >
                Destinations
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
              <Link href="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
