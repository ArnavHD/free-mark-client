import React from 'react';
import './../index.css' 

const HeroText = () => {
    return (
      <div className=" ">
        <div className="w-full text-center mt-20">
          <h2 className="text-6xl text-white">
            Transform Your <br />
            <span className="playwrite font-bold bg-linear-to-r from-orange-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Freelance
            </span>{" "}
            Business
          </h2>
          <p className="text-white/80 text-xl mt-2">
            Flourish in a thriving freelance ecosystem dedicated to <br />{" "}
            excellence and limitless opportunities.
          </p>
          <input type="text" placeholder="Search Your Task" className="input mt-10 w-xl rounded-3xl p-6 focus:outline-0 focus:ring-0" />
        </div>
      </div>
    );
};

export default HeroText;