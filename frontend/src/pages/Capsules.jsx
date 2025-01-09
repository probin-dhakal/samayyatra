import React from "react";
import SpaceCard from "../components/Card";

const Capsules = ({ capsules }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="bg.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative text-white p-10 md:p-20 flex flex-wrap items-center justify-center max-w-full mx-auto z-10 bg-opacity-50">
        <h1 className="text-5xl font-bold mb-8 text-center lg:mt-2 mt-7">
          See Capsules
        </h1>

        {/* Image and Text Section */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-8">
          {capsules.map((capsule, index) => (
            <SpaceCard key={index} {...capsule} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capsules;
