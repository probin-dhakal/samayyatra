import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full relative">
      <div className="h-full flex justify-center items-center p-4 relative z-30">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              Unlock Memories, Travel Through Time
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              <strong> Samayyatra:</strong> Your journey through time. Safeguard
              precious memories, share moments with loved ones, and unlock the
              stories of tomorrow. A space where your past meets the future,
              filled with emotions, nostalgia, and connection. Create, preserve,
              and experience the beauty of time—one capsule, one memory, one
              story at a time.
            </p>
            <Link
              to={"/create"}
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 mt-10 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200 relative z-40"
            >
              Create Your Capsule
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src="moon.png"
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10 pointer-events-none"
      />
      <div className="absolute bottom-0 z-20 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
