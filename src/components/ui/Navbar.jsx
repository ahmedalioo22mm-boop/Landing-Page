/** @format */

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Layers } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { cn } from "../../lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/20 backdrop-blur-lg border-b border-gray-200 shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center animate-pulse">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-gray-800">
            NextLanding
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative text-gray-700 transition-all duration-300",
                  "after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-purple-500 to-blue-500 after:transition-all hover:after:w-full hover:text-purple-600"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button
          asChild
          className={cn(
            "hidden md:inline-flex rounded-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          )}
        >
          <Link href="#get-started">Get Started</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white/95 backdrop-blur-lg overflow-hidden rounded-b-xl transition-all duration-500 ease-in-out",
          open ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <ul className="flex flex-col px-6 gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={`mobile-${link.href}`}>
              <Link
                onClick={() => setOpen(false)}
                href={link.href}
                className="block w-full p-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-4">
          <Button
            asChild
            className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          >
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
