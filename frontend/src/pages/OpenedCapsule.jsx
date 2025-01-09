import React from "react";
import { useLocation } from "react-router-dom";

const OpenedCapsule = () => {

  const location = useLocation();
  const capsuleData = location.state?.capsuleData;

  if (!capsuleData) {
    return <p>No capsule data available.</p>;
  }
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

      {/* Content Section */}
      <div className="relative z-10 p-6 bg-black bg-opacity-70 min-h-screen text-white  ">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6 mt-14">
          {capsuleData.title}
        </h1>

        {/* Memory Description */}
        <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl font-semibold mx-auto">
          {capsuleData.memoryDescription || "No description available."}
        </p>

        {/* Images Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg border border-gray-700"
              >
                <img
                  src={imgSrc}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((videoSrc, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg border border-gray-700"
              >
                <video
                  controls
                  className="w-full h-48 object-cover"
                  src={videoSrc}
                  alt={`Video ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenedCapsule;
