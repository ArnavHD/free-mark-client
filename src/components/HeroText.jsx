import React from 'react';
import './../index.css';
import { useTypewriter } from "react-simple-typewriter"; 

const HeroText = () => {
  const [text] = useTypewriter({
    words: [
      "Work Opportunities.",
      "Creative Talent.",
      "Global Opportunities.",
      "Freelance Potential!",
      "Career Growth.",
    ],
    loop: 0,
  });
    return (
      <div className=" ">
        <div className="w-full text-center mt-5  lg:mt-20">
          <h2 className="text-4xl lg:text-6xl text-white animate__heartBeat">
            Transform Your <br />
            <span className="playwrite font-bold bg-linear-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Freelance
            </span>{" "}
            Business
          </h2>
          <p className="text-white/80 text-xm lg:text-xl mt-2">
            Flourish in a thriving freelance ecosystem dedicated to <br />{" "}
            excellence and limitless {text}
          </p>
          <input
            type="text"
            placeholder="Search Your Task"
            className="input mt-10 w-4/5 lg:w-xl rounded-3xl p-6 focus:outline-0 focus:ring-0"
          />
        </div>
      </div>
    );
};

export default HeroText;