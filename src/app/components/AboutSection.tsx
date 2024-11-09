// components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column - Stacked Images */}
          <div className="flex flex-col gap-4">
            <img src="/images/one.png" alt="Building 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src="/images/three.png" alt="Abstract Structure" className="w-full h-32 object-cover rounded-lg shadow-md" />
          </div>

          {/* Right Column - Single Image */}
          <div>
            <img src="/images/two.png" alt="Building 2" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-gray-900">About</h3>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-full">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
