"use client";
import React from "react";
import { getAssetPath } from "../lib/asset";

const StatsSection = () => {
  return (
    <section className="py-24 bg-black relative max-w-[1600px] mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-gray-400 mb-2 ml-18">The reason why Blackcoffer stands out</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 max-w-2xl leading-tight ml-18">
          Blackcoffer Unfolds Solutions To Everything
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <img
          src={getAssetPath("/assets/Group 45.png")}
          alt="Blackcoffer Stats"
          className="w-full max-w-5xl h-auto rounded-2xl object-cover hover:scale-[1.01] transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default StatsSection;
