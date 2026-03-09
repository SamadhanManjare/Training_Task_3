"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` w-full top-0 z-50 transition-all duration-300 pt-6 bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="./assets/Mask_Group.png"
              alt="Blackcoffer Logo"
              width={160}
              height={84}
              className="object-contain colour-blend-screen"
              priority
            />
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#who" className="hover:text-blue-400 transition-colors flex items-center gap-1">Who we are <span className="text-xs">▼</span></Link>
          <Link href="#what" className="hover:text-blue-400 transition-colors flex items-center gap-1">What we do <span className="text-xs">▼</span></Link>
          <Link href="#insights" className="hover:text-blue-400 transition-colors flex items-center gap-1">Insights <span className="text-xs">▼</span></Link>
          <Link href="#careers" className="hover:text-blue-400 transition-colors flex items-center gap-1">Careers <span className="text-xs">▼</span></Link>
        </div>

        {/* Actions Context */}
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-transparent border border-gray-600 rounded-md hover:border-blue-500 hover:text-blue-400 transition-all group">
            <svg className="group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
