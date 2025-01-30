import React, { useContext } from "react";
import "./home.css";
import Hero from "../components/Hero";
import SpaceCard from "../components/Card"; // Assuming Card is the SpaceCard component
import { Context } from "../main.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const { capsules, user } = useContext(Context); // capsules should be an array
  
  return (
    <div className="">
      {/* Video Background */}
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 w-full h-full object-cover z-[-1]"
        >
          <source src="earth-bg.mp4" type="video/mp4" />
        </video>
        <Hero />
      </div>

      {/* Title */}
      <p className="text-3xl ml-5 mb-5 mt-5 font-bold text-white">
        Explore Public Capsules
      </p>

      {/* Render Capsules */}
      <div className="flex gap-4 mb-3 flex-wrap justify-center items-center">
        {capsules && capsules.length > 0 ? (
          capsules.map((capsule) => (
          <SpaceCard key={capsule._id} {...capsule} cardId={capsule._id} />
          ))
        ) : (
          <p className="text-white text-lg">No capsules found.</p>
        )}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center items-center">
        <Link
         to={"/Capsules"}
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-blue-500 text-xl text-white hover:bg-blue-600 px-4 py-2 mb-4 rounded-md duration-200"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Home;
