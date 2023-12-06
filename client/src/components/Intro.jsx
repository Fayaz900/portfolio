import React from "react";
import { motion } from "framer-motion";

export const MyComponent = () => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-[24px] pb-6 mb-4">
      <div className="mb-5">
        <img
          alt="Alvaro Farreny Boixader"
          src=".\assets\fayaz.jpeg"
          className="h-36 md:h-[250px] mb-0  rounded-full"
        />
      </div>
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Fayaz Abdul Azeez
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full Stack Developer
      </p>
      <p className="text-sm max-w-xl mb-4 font-bold">
        I'm a computer science student who is passionate about writing code,
        building software, and design. I’m currently learning React, Python, and
        Solidity. <br />
        I'm also the president of the criptoclub, the first club of my
        university about cryptocurrency and blockchain.
      </p>
      <a
        href="https://drive.google.com/file/d/1k27aUOoRfeJc8aea1ihsvt3nSaVFnmcp/view?usp=sharing"
        className="text-black dark:text-white px-3 py-1 border-2 border-stone-900 dark:border-white rounded-md "
      >
        Download my CV
      </a>
    </div>
  );
}

export default Intro;
