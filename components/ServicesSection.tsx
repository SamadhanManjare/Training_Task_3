"use client";
import React from "react";

const services = [
  {
    title: "Big Data & Analytics",
    // image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    image: "./assets/Group_6.png",
    info: "Transform your raw data into actionable insights with our advanced big data and analytics solutions tailored for your enterprise."
  },
  {
    title: "Consultancy",
    image: "./assets/Consult.png",
    info: "Expert advice and strategic planning to help your business navigate complex challenges and accelerate growth."
  },
  {
    title: "HR & staffing",
    image: "./assets/HR.png",
    info: "Find the right talent for your team with our comprehensive HR and staffing services built on extensive networks."
  },
  {
    title: "Cybersecurity",
    image: "./assets/CYB.png",
    info: "Protect your digital assets with our robust and proactive cybersecurity measures designed for modern threats."
  },
  {
    title: "Consultancy",
    image: "./assets/Consultancy.png",
    info: "Tailored consulting services designed to optimize your operations, reduce overhead, and drive bottom-line results."
  },
  {
    title: "Sustainability",
    image: "./assets/Sustainability.png",
    info: "Integrate sustainable practices into your business model for long-term environmental impact and regulatory compliance."
  },
  {
    title: "Cloud",
    image: "./assets/Cloud.png",
    info: "Scalable and secure cloud solutions to enhance your business flexibility, agility, and overall efficiency."
  },
  {
    title: "Metaverse",
    image: "./assets/Meta.png",
    info: "Step into the future with our immersive metaverse development and integration platforms customized for emerging markets."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative z-20 py-24  bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 ">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 relative z-20">
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-wide">
            Services
          </h2>

        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[380px] w-full overflow-hidden bg-[#1a0f2e] transition-colors duration-500 cursor-pointer"
            >
              {/* Background Image - stays visible until hovered */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-60 group-hover:opacity-0"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Dark Gradient Overlay for un-hovered state to make title easily legible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                {/* Top Section: Title & Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md tracking-wide mb-6 mt-2">
                    {service.title}
                  </h3>

                  {/* Hover Info revealed from bottom */}
                  <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                    <p className="text-[17px] text-white/95 leading-relaxed font-medium">
                      {service.info}
                    </p>
                  </div>
                </div>

                {/* Buttom Right: Expand button revealed on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 flex justify-end pb-2 pr-2">
                  <div className="inline-flex items-center text-base font-semibold text-white">
                    Expand
                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
