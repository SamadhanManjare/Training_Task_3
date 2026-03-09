"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "../lib/asset";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden ">
      {/* Background decorations */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen animate-blob" style={{ animationDelay: "2s" }}></div>
      </div> */}
      <div className="flex items-center font-inter -mt-30 justify-center w-full h-full absolute opacity-50 overflow-hidden">
        <img src={getAssetPath("/assets/Hero_Section.png")} alt="Blackcoffer Hero" className="" />
      </div>

      <div className="max-w-7xl mx-auto  px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left huge text */}
        <div className="flex flex-col animate-[fadeInUp_1s_ease-out]">
          <h1 className="text-7xl md:text-8xl lg:text-[5rem] font-bold leading-[1.2] tracking-tighter">
            <span className="block text-white mb-50 ">TOGETHER WE
              <span className="block text-white ml-55">REINVENTED</span>
            </span>

          </h1>
        </div>

        {/* Right context text */}
        <div className="flex flex-col gap-8 lg:pl-30 mb-45 animate-[fadeInUp_1.2s_ease-out]">
          <div className="w-24 h-3 bg-blue-600  mb-2"></div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Together, we can reinvent your business.<br />
            Reinvention is about breaking industry norms.
            Our wide range of capabilities, ecosystem
            partnerships and unmatched industry expertise
            can help your business become the next best version of itself.
          </p>
          <div>
            <Link href="#services" className="inline-flex items-center gap-3 text-lg font-medium hover:text-blue-400 transition-colors group">
              See what we do
              <span className="bg-blue-600 text-white p-2 rounded transform group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
