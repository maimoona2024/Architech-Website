import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-center py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side (Text & Button) */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-4xl font-light text-gray-600">PROJECT</h2>
            <h1 className="text-5xl font-bold text-gray-900">Lorum</h1>
            <button className="mt-4 px-6 py-3 bg-gray-800 text-white font-semibold rounded-full">
              View Project
            </button>
          </div>

          {/* Right Side (Image) */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <Image src="/images/building.jpg" alt="Project Image" width={800} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
