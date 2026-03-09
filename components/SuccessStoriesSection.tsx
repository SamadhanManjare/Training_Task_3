"use client";
import React from "react";
import Link from "next/link";

const stories = [
  {
    date: "2024 March 17",
    title: "Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development",
  },
  {
    date: "2024 March 10",
    title: "Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application",
  },
  {
    date: "2024 February 28",
    title: "Real-time AI Document Processing: Automating Data Extraction for Healthcare Providers",
  },
  {
    date: "2024 February 15",
    title: "Scalable Microservices Architecture: Modernizing Legacy Banking Systems",
  },
  {
    date: "2024 January 22",
    title: "Predictive Maintenance Dashboard: IoT Integration for Manufacturing Excellence",
  },
  {
    date: "2024 January 05",
    title: "Blockchain-based Identity Verification: Enhancing Security for Fintech Startups",
  }
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-24 bg-[#030303] border-t border-gray-900 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Success Stories</h2>
          <Link href="#stories" className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-2 group">
            Read all stories 
            <span className="bg-blue-600 text-white p-1 ml-1 rounded transform group-hover:translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        <div className="animate-marquee pl-6">
          {/* Duplicate the stories to create a seamless infinite scrolling effect */}
          {[...stories, ...stories].map((story, i) => (
            <div key={i} className="group cursor-pointer w-[350px] md:w-[450px] flex-shrink-0 mx-6 whitespace-normal   p-8 rounded-2xl hover:bg-[#111] transition-colors">
              <p className="text-gray-400 font-medium mb-4 text-sm tracking-wide uppercase">{story.date}</p>
              <h3 className="text-2xl font-bold text-gray-100 leading-tight group-hover:text-blue-400 transition-colors">
                {story.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
