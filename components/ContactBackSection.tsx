"use client";
import React from "react";

const ContactBackSection = () => {
  return (
    <section className="py-24 bg-[#111111] relative border-t border-white/5 w-full">
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="text-[22px] font-semibold text-white uppercase tracking-wide mb-4">
          REQUEST A CALL BACK
        </h2>
        
        <h3 className="text-3xl font-semibold text-white mb-4">
          Get your Business Right up There
        </h3>
        
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl mb-12">
          When you need intelligent answers to your toughest questions, we&apos;re here
          to help. We&apos;re just a call or email away! Don&apos;t hang back from getting in
          touch with us. We&apos;ll be glad to assist you.
        </p>

        {/* Button Wrapper with Double Border Effect */}
        <div className="bg-[#242424] p-[5px] border border-[#3b3b3b] inline-block">
          <button className="px-8 py-3 bg-[#444444] hover:bg-[#555] text-white font-medium text-[15px] border border-[#5a5a5a] transition-colors">
            Request a Call Back
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactBackSection;
