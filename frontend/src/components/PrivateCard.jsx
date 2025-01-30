import { FaLock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PrivateCard = ({ title, user, createdAt, unlockTime, handleDelete,id }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isUnlocked, setIsUnlocked] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
  };

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

  return (
    <div className="flex justify-center items-center p-6 hover:scale-105 transition-all duration-500">
      <div className="w-full max-w-lg bg-gray-900 border border-purple-600 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Top Section */}
          <div className="flex items-center justify-between space-x-4">
            <FaLock className="text-purple-400 text-4xl" />
            <h2 className="text-3xl font-extrabold text-white">Samayyatra</h2>
            <MdDelete
              className="text-3xl text-red-400 hover:text-red-500 cursor-pointer"
              onClick={handleDelete}
            />
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
                to={`/opened-capsule/${id}`}
                className="text-green-400 font-bold hover:underline cursor-pointer"
              >
                Click to Open Your Capsule
              </Link>
            ) : (
              <p>
                {timeLeft.years || 0} years : {timeLeft.months || 0} months :{" "}
                {timeLeft.days || 0} days : {timeLeft.hours || 0} hours :{" "}
                {timeLeft.minutes || 0} minutes : {timeLeft.seconds || 0} seconds
              </p>
            )}
          </div>

          {/* Metadata */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-base text-gray-400">
            <div>
              <p>
                <span className="font-semibold text-purple-300">Created At:</span>{" "}
                {formatDate(createdAt)}
              </p>
              <p>
                <span className="font-semibold text-purple-300">Opening At:</span>{" "}
                {formatDate(unlockTime)}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-purple-300">Owner:</span>{" "}
                {user.name || "Unknown"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateCard;
