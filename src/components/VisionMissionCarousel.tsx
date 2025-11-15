import React, { useEffect, useState } from "react";
import { Eye, Target } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  icon: React.ElementType;
}

const slides: Slide[] = [
  {
    title: "Our Vision",
    description:
      "To Provide Unique Servcies Seeking Customer Satisfaction through Quality, Integrity, and Innovation in Every Project We Undertake.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    description:
      "To help our clients achieve their goals by delivering high-quality, innovative, and sustainable construction solutions that exceed expectations.",
    icon: Target,
  },
];

const VisionMissionCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const Icon = slides[index].icon; // ★ FIXED LINE

  return (
    <section className="bg-gray-100 py-20">
    

         {/* 🌟 CENTER HEADING */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          WHAT <span className="text-[#fd5d14]">WE SAY</span>
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          Our commitment to quality, purpose, and customer trust defines who we are.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-14">

  

        {/* LEFT IMAGE */}
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dtxi8vdkq/image/upload/v1763102316/build23_r1n389.jpg"
            alt="vision-mission"
            className="w-full h-[430px] object-cover "
          />
        </div>

        {/* RIGHT AUTO CAROUSEL */}
        <div className="flex-1 transition-all duration-700 bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          
          {/* DYNAMIC ICON */}
          <Icon className="w-12 h-12 text-orange-600 mb-4" />

          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {slides[index].title}
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {slides[index].description}
          </p>

          {/* Indicator Dots */}
          <div className="flex gap-2 mt-4">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-3 rounded-full transition-all ${
                  index === i ? "bg-orange-600 w-8" : "bg-gray-400 w-3"
                }`}
              ></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionCarousel;
