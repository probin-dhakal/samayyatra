import React from "react";

const About = () => {
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
      <div className="relative text-white p-10 md:p-20  max-w-full mx-auto z-10 bg-opacity-50">
        <h1 className="text-5xl font-bold mb-8 text-center lg:mt-2 mt-10">About Us</h1>

        {/* Image and Text Section */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo on the left (visible on medium and larger screens) */}
          <img
            src="logo.png"
            alt="Samayyatra Logo"
            className="hidden md:block w-80 h-80 object-contain"
          />
          <p className="text-2xl leading-10 flex-1">
            Welcome to <strong>Samayyatra</strong>, where memories transcend
            time and technology. We are dedicated to preserving your most
            meaningful moments and sharing them with loved ones across
            generations. Whether it's a heartfelt message for the future or a
            time capsule to relive special moments, we offer a platform to
            create, store, and unlock personal histories. With advanced
            security, an intuitive interface, and the ability to collaborate
            with family and friends, Samayyatra empowers you to connect with the
            past, present, and future in a truly unique way. Join us in shaping
            the future—one capsule at a time.
          </p>
        </div>

        <h2 className="text-3xl font-semibold mt-10 mb-6">Who We Are</h2>
        <div className="flex items-center justify-between mb-8">
          <p className="text-2xl leading-10 flex-1">
            Hello, I’m Probin Dhakal, the visionary behind Samayyatra. With a
            passion for technology and a deep appreciation for memories, I
            founded Samayyatra to help people preserve their most meaningful
            moments. The idea emerged from my personal journey of cherishing
            memories and realizing technology’s power to connect with the past,
            present, and future. After years in the tech industry, I saw an
            opportunity to merge innovative solutions with emotional
            connections. Samayyatra creates a space where people build lasting
            legacies. Join me on this journey to immortalize your precious
            moments, share stories, and preserve legacies for generations to
            come.
          </p>
          {/* Founder image (visible on medium and larger screens) */}
          <img
            src="founder.jpeg"
            alt="Our Team"
            className="hidden md:block w-96 rounded-full h-96 object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold mt-10 mb-6">What We Do</h2>
        <ul className="list-disc ml-8 text-2xl leading-10 mb-8">
          Here’s the revised version of your text with exactly 170 words: At
          Samayyatra, we provide a unique platform to preserve your most
          cherished memories in personalized capsules. Imagine creating a time
          capsule filled with heartfelt messages, images, videos, and stories,
          encapsulating a moment in time to relive in the future. These capsules
          are not just collections of memories; they are meaningful treasures,
          designed to be opened at the perfect time. With our innovative
          scheduling feature, you can choose a specific date to unlock your
          capsule, whether it’s for a milestone, a surprise, or a memory meant
          to be revisited later. The anticipation of opening the capsule adds
          excitement and connection to the memory. You also have full control
          over privacy settings, choosing who can access your capsule. Whether
          shared with family, friends, or a wider audience, the choice is yours.
          To enhance the experience, Samayyatra features a global countdown
          tracker, letting you join in on capsule openings worldwide. Whether
          opening your own or witnessing others’ stories, you’ll feel part of a
          global community of storytellers.
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-6">Why Choose Us?</h2>
        <p className="text-2xl leading-10 mb-8">
          Samayyatra is more than just a platform; it’s a trusted companion for
          your journey through time. Our features include:
        </p>
        <ul className="list-disc ml-8 text-2xl leading-10 mb-8">
          <li>Advanced Encryption: State-of-the-art security measures.</li>
          <li>User-Friendly Interface: Easy-to-use interactive builder.</li>
          <li>
            Collaborative Features: Share and co-create capsules with family and
            friends.
          </li>
          <li>
            Global Reach: Connect with a worldwide community of storytellers.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-6">Our Mission</h2>
        <p className="text-2xl leading-10 mb-8">
          To help people connect across time by preserving and sharing their
          most meaningful moments in an innovative, secure, and accessible way.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-6">
          Join Us on This Journey
        </h2>
        <p className="text-2xl leading-10 mb-8">
          Samayyatra is your portal to create, preserve, and share life’s most
          precious moments. Whether it’s a heartfelt message to a loved one, a
          time capsule for future generations, or a collaborative story with
          friends, we’re here to make it unforgettable.
        </p>
        <p className="text-2xl font-semibold mt-6">
          Let’s shape the future together—one capsule at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
