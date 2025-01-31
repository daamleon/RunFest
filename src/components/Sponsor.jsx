import React from "react";

function Sponsor() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Sponsor 1 */}
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-600">Logo 1</span>
          </div>
          {/* Sponsor 2 */}
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-600">Logo 2</span>
          </div>
          {/* Sponsor 3 */}
          <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-600">Logo 3</span>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
