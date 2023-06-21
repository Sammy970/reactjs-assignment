import React from "react";
// import Section1 from "./Section1";
import Section2 from "./Section2";

import "./CSS/Page.css";

const Page = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Left Column */}
        <div className="w-1/3 flex justify-center items-center">
          <img
            src="Board.png"
            alt="left-side"
            className="max-h-fit max-w-full"
          />
        </div>

        {/* Right Column */}
        <div className="w-2/3">
          {/* Signup Component */}
          <div className="flex justify-center items-center h-full rightBG">
            <Section2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
