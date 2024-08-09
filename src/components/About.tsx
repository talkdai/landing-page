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
          <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed mb-4">
            talkd.ai is a project led by <a href="https://www.linkedin.com/in/vmesel/" target="_blank">Vinicius Mesel</a> and advised by <a href="https://linkedin.com/in/avelinorun" target="_blank">Thiago Avelino</a>.
            It focuses on developing conversational AI solutions to improve communication and streamline business processes.
            With their combined expertise in AI and software development, the maintainers aim to make advanced technology more accessible and practical
            for various applications.
          </p>
          <br />
          <h2 className="text-xl md:text-2xl text-purple-500 mb-6">
            Some of our sponsors/investors:
          </h2>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-400 font-medium mb-4 pl-2">
            <li><a href="https://github.com/buserbrasil" target="_blank">Buser</a></li>
            <li><a href="https://github.blog/open-source/maintainers/github-accelerator-showcase-celebrating-our-second-cohort-and-whats-next/" target="_blank">Github Accelerator - 2024</a></li>
          </ul>
          <br />
          <p className="text-base md:text-xl text-gray-400 font-medium leading-relaxed mb-4">
            We are also grateful for our contributors who have helped us and continue to help us improve our code base.
            Some highlights include:
          </p>
          <ul className="list-disc list-inside text-base md:text-xl text-gray-400 font-medium mb-4 pl-2">
            <li><a href="https://github.com/lgabs" target="_blank">Luan Fernandes</a></li>
            <li><a href="https://github.com/walison17" target="_blank">Walison Filipe</a></li>
          </ul>
        </div>
        <div className="md:w-1/2 md:self-center relative ml-0 md:ml-4 md:pl-4 mt-8 md:mt-0">
          <Image
            src="/static/images/aboutimg.png"
            alt="Team"
            layout="responsive"
            width={521}
            height={728}
            className="rounded-lg shadow-lg object-cover mr-0 md:mr-8"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
