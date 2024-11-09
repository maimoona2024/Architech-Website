// components/MissionStatement.tsx
import React from 'react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Main Focus/Mission Statement</h2>
      <div className="flex justify-center mt-8 space-x-12">
        <div>
          <h3 className="text-5xl font-bold text-gray-800">1</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-gray-800">2</h3>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
