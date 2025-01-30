import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OpenedCapsule = () => {
  const { id } = useParams(); // Get the capsule ID from the route params
  const [capsuleData, setCapsuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch capsule data by ID using Axios
    const fetchCapsuleData = async () => {
      try {
        const response = await axios.get(
          `"https://samayyatra.onrender.com/api/v1/capsule/mycapsule/${id}`
        );
        setCapsuleData(response.data); // Update the state with fetched data
        console.log(response.data);
      } catch (err) {
        setError("Server error while fetching capsule data.");
        console.error("Error fetching capsule: 11", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCapsuleData();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg mt-20">Loading capsule data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg">{error}</p>;
  }

  if (!capsuleData || !capsuleData.data) {
    return <p className="text-center text-lg">No capsule data available.</p>;
  }

  const {
    title,
    message,
    createdAt,
    updatedAt,
    unlockTime,
    isPrivate,
    emails,
    image,
    video,
  } = capsuleData.data;

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-200 to-blue-200 p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">{title}</h2>
        <p className="text-gray-800 mb-4">
          <span className="font-semibold">Message:</span> {message}
        </p>
        <div className="mb-4">
          <p className="text-gray-800">
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Updated At:</span>{" "}
            {new Date(updatedAt).toLocaleString()}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Unlock Time:</span>{" "}
            {new Date(unlockTime).toLocaleString()}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Private:</span>{" "}
            {isPrivate ? "Yes" : "No"}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Emails:</span>{" "}
            {emails.length > 0 ? emails.join(", ") : "No emails available"}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold text-purple-700">Images:</h3>
          {image.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 mt-2">
              {image.map((img, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded-lg">
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                  <a
                    href={img}
                    download
                    className="block mt-2 text-center text-sm text-blue-500 hover:underline"
                  >
                    Download Image
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No images available</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold text-purple-700">Videos:</h3>
          {video.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 mt-2">
              {video.map((vid, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded-lg">
                  <video
                    src={vid}
                    controls
                    className="w-full rounded-lg shadow-md"
                  ></video>
                  <a
                    href={vid}
                    download
                    className="block mt-2 text-center text-sm text-blue-500 hover:underline"
                  >
                    Download Video
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No videos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenedCapsule;
