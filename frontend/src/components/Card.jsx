import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const SpaceCard = ({ title, ownerId, createdAt, unlockTime }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [ownerName, setOwnerName] = useState(""); // State to store owner name

  // console.log(ownerId)
  // Fetch owner name using axios
  const fetchOwnerName = async (id) => {
    try {
      // Replace with your actual API endpoint
      const res = await axios.get(
        `https://samayyatra.onrender.com/api/v1/user/ownername/${id}`
      );
      // console.log(owner.name)
      // console.log(res.data.owner.name);
      setOwnerName(res.data.owner.name); // Assuming the API returns { name: "Owner Name" }
    } catch (error) {
      console.error("Error fetching owner name:", error);
      setOwnerName("Unknown"); // Fallback name in case of error
    }
  };

  // Format ISO date to DD/MM/YYYY format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const openingDate = new Date(unlockTime);
      const difference = openingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsUnlocked(true);
        setTimeLeft({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 365)) /
            (1000 * 60 * 60 * 24 * 30)
        );
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ years, months, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unlockTime]);

  // Fetch owner name when component mounts
  useEffect(() => {
    fetchOwnerName(ownerId);
  }, [ownerId]);

  return (
    <div className="flex justify-center items-center p-6 hover:scale-105 transition-all duration-500">
      <div className="w-full max-w-lg bg-gray-900 border border-purple-600 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Top Section */}
          <div className="flex items-center space-x-4">
            <FaLock className="text-purple-400 text-4xl" />
            <h2 className="text-3xl font-extrabold text-white">Samayyatra</h2>
          </div>

          {/* Image and Description */}
          <div className="mt-6 flex items-center">
            <img
              src="sy.webp"
              alt="Space Logo"
              className="w-24 h-24 rounded-full border-4 border-purple-500"
            />
            <p className="ml-10 text-gray-300 text-lg font-semibold">{title}</p>
          </div>

          {/* Timer or Unlock Message */}
          <div className="mt-4 text-gray-200 text-lg font-semibold">
            {isUnlocked ? (
              <Link
                to="/opened-capsule"
                className="text-green-400 font-bold hover:underline cursor-pointer"
              >
                Click to Open Your Capsule
              </Link>
            ) : (
              <p>
                {timeLeft.years || 0} years : {timeLeft.months || 0} months :{" "}
                {timeLeft.days || 0} days : {timeLeft.hours || 0} hours :{" "}
                {timeLeft.minutes || 0} minutes : {timeLeft.seconds || 0}{" "}
                seconds
              </p>
            )}
          </div>

          {/* Metadata */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-base text-gray-400">
            <div>
              <p>
                <span className="font-semibold text-purple-300">
                  Created At:
                </span>{" "}
                {formatDate(createdAt)}
              </p>
              <p>
                <span className="font-semibold text-purple-300">
                  Opening At:
                </span>{" "}
                {formatDate(unlockTime)}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-purple-300">Owner:</span>{" "}
                {ownerName || "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
