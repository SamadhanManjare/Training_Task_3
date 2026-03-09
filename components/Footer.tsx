"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import next/image if you prefer, but standard img is also fine

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-20 border-t border-white/5 relative z-10 text-[15px]">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left Side Footer Links */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.5fr] gap-12 md:gap-8 lg:pt-10 w-full">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-5">
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">About us</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">About Founder</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Contact us</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Team</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Locations</Link>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-5 md:ml-8">
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">FAQ</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Careers</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Solutions</Link>
            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Our Process</Link>
          </div>
          
          {/* Col 3 */}
          <div className="flex flex-col gap-5 items-start">
            <span className="text-gray-500 font-medium">Get In Touch</span>
            <p className="text-gray-200 leading-relaxed max-w-[280px]">
              Taking seamless key performance indicators offline to maximise the long tail.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook" className="w-[30px] h-[30px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-[14px] h-[14px]"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v11h4v-11z"/></svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="w-[30px] h-[30px] rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-[16px] h-[16px]"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4s-6.254,0-7.814,0.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="w-[30px] h-[30px] rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-[13px] h-[13px]"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.6 6.029-5.056 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="w-[30px] h-[30px] rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-[14px] h-[14px]"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side GIF (500x500) */}
        <div className="flex-shrink-0">
          <img 
            src="/assets/footer.gif" 
            alt="Footer Animation" 
            className="w-[500px] h-[500px] object-cover rounded-lg -mt-16"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
