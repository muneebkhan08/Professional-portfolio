import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const AboutData = () => {
  return (
    <>
    <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center bg-gradient-to-r from-black via-purple-950 to-black text-white">
      {/* Profile Image */}
      <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-gray-600 mb-4">
        <Image
          src="/profile.png" // Change this to your actual image path
          alt="Profile Picture"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200">
        Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">Muhammad Muneeb</span>
      </h1>
      <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-gray-400  mt-3">
        Software Developer × AI engineer
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-md md:max-w-xl lg:max-w-2xl mt-8 ">
        I develop 3D visuals, user interfaces, and web applications with Gen AI
      </p>

      {/* Call-to-Action Button */}
      <Link href="/contact">
      <button className="mt-6 px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-2xl hover:text-white hover:border-white">
        Let's talk
        <FiArrowUpRight />
      </button>
      </Link>
    </section>
    <section className="relative bg-[#0D0D0D] text-white px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          {/* Hero Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            LIVE THE LIFE AS YOU WANT
          </h1>
          
          {/* Hero Description */}
          {/* <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            As a <span className="font-semibold text-white">React developer</span> with 5 years of experience, I have honed
            my skills in <span className="font-semibold text-white">JavaScript</span> and am currently learning{" "}
            <span className="font-semibold text-white">TypeScript</span> to expand my expertise. I pride myself on being a
            quick learner and an attentive listener, which allows me to collaborate effectively with clients to create
            efficient and scalable solutions.
          </p> */}
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I am a full-stack <span className="font-semibold text-white">MERN</span> developer with next.js, <span className="font-semibold text-white">AI engineer</span>, and <span className="font-semibold text-white">generative AI</span> enthusiast with a passion for building intelligent, scalable, and user-friendly applications. With 5 years of experience in <span className="font-semibold text-white">React</span> and JavaScript, I am currently expanding my expertise by learning <span className="font-semibold text-white">TypeScript</span>, <span className="font-semibold text-white">Python</span>, and <span className="font-semibold text-white">App</span> development. My strong foundation in <span className="font-semibold text-white">UI/UX design</span> allows me to create seamless user experiences, while my deep interest in AI drives me to develop AI agents and integrate generative AI into web applications. In the future, I plan to dive into <span className="font-semibold text-white">Machine learning</span> to further enhance my capabilities in <span className="font-semibold text-white">AI-driven development</span>. I am a quick learner and an attentive listener, which enables me to collaborate effectively with clients and teams to deliver innovative, high-quality solutions
          </p>

          {/* Contact Button */}
          <Link href="/contact">
          <button className="mt-6 px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-2xl hover:text-white hover:border-white">
            Discuss Now
            <FiArrowUpRight />
          </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <div className="relative w-full max-w-xs mx-auto lg:max-w-sm">
            <Image
              src="/profile.png" // Update this with the actual image path
              alt="Profile"
              width={400}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutData;
