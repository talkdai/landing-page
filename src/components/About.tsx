import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-16 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-center mt-12 mx-4 md:mx-8 mb-24 gap-8 md:gap-16">
        <div className="md:w-7/12 w-full flex-grow text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4">
            Who is behind talkd?
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-500 mb-6">
            Subheading for description or instructions
          </h2>
          <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed mb-4">
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure.
          </p>
          <br />
          <ul className="list-disc list-inside text-base md:text-xl text-gray-400 font-medium mb-4 pl-2">
            <li>Exclusive izakaya charming Scandinavian</li>
            <li>Impeccable aute quality of life soft power pariatur</li>
            <li>Melbourne occaecat discerning</li>
          </ul>
          <br />
          <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed">
            Qui wardrobe aliquip, et Porter destination Toto remarkable officia
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div className="md:w-1/2 md:self-center relative ml-0 md:ml-4 md:pl-4 mt-8 md:mt-0">
          <Image
            src="/static/images/aboutimg.png"
            alt="Team"
            layout="responsive"
            width={521}
            height={728}
            className="rounded-lg shadow-lg object-cover mr-0 md:mr-8"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;
