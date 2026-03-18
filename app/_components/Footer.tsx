import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Brand & About */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Travel<span className="text-secondary">O</span>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed">
            Revolutionizing travel through AI-driven insights. Discover your
            next adventure with personalized recommendations and seamless
            bookings.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://facebook.com"
              className="hover:text-primary transition-colors"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-primary transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:text-primary transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links (Requirement: Working Navigation) */}
        <div>
          <h3 className="footer-title opacity-100 text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:link hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:link hover:text-primary">
                Explore Destinations
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:link hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:link hover:text-primary">
                Travel Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Support & Legal */}
        <div>
          <h3 className="footer-title opacity-100 text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:link hover:text-primary">
                Contact Support
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:link hover:text-primary">
                Help Center / FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:link hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:link hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info (Requirement: Contact Information) */}
        <div>
          <h3 className="footer-title opacity-100 text-lg mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary" />
              <span>+880 1234-567890</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>support@travelai.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright (Requirement: Copyright Text) */}
      <div className="border-t border-base-300 bg-base-300/30">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© {currentYear} TravelAI Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Designed for Excellence</span>
            <span>v1.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
