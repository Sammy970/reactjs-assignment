import React, { useState } from "react";
// import Section1 from "./Section1";
import Section2 from "./Section2";

import "./CSS/Page.css";

const Page = () => {
  const [user, setUser] = useState("");

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Left Column */}
        <div className="w-2/4 flex justify-center items-center">
          <img
            src="Board.png"
            alt="left-side"
            className="max-h-fit max-w-full"
          />
        </div>

        {!user ? (
          <div className="w-2/3">
            <div className="flex justify-center items-center h-full rightBG">
              <Section2 setUser={setUser} />
            </div>
          </div>
        ) : (
          <div className="w-2/3">
            <div className="flex justify-center items-center h-full rightBG">
              <div className="grid grid-row-auto gap-4">
                <h2 className="text-center">Hello {user}</h2>
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={() => setUser("")}
                >
                  <img
                    src="https://freepngimg.com/save/66274-school-google-pearl-button-up-sign-middle/1600x1600"
                    alt="google logo"
                    width="20px"
                    height="20px"
                  />
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
