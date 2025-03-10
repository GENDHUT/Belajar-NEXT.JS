"use client";
import { useState } from "react";
import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold">
            🐻GENDHUTLIST🐼
          </Link>
        </div>
        {/* Menu navigasi (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link
            href="/anime"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-300"
          >
            Anime
          </Link>
          <Link
            href="/"
            className="px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-300"
          >
            Manga
          </Link>
        </div>
        {/* Kolom pencarian (Desktop) */}
        <div className="hidden md:flex items-center">
          <div className="w-64">
            <InputSearch />
          </div>
        </div>
        {/* Hamburger menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      {isOpen && (
        <div className="mt-4 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/anime"
              className="block px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-300"
            >
              Anime
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-300"
            >
              Manga
            </Link>
            {/* Pencarian Mobile menggunakan InputSearch */}
            <div className="px-4 py-2">
              <InputSearch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
