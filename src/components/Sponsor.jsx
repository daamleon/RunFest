import React from "react";
import sponsor1 from "../assets/sponsor1.png";
import sponsor2 from "../assets/sponsor2.png";
import sponsor3 from "../assets/sponsor3.png";

function Sponsor() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Sponsor 2 */}
          <div className="w-24 h-24  flex items-center justify-center rounded-lg">
            <img
              src={sponsor2}
              alt="Sponsor 1"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Sponsor 1 */}
          <div className="w-24 h-24 flex items-center justify-center rounded-lg">
            <img
              src={sponsor1}
              alt="Sponsor 1"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Sponsor 3 */}
          <div className="w-24 h-24  flex items-center justify-center rounded-lg">
            <img
              src={sponsor3}
              alt="Sponsor 1"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
