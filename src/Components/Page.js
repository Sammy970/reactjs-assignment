import React from "react";
// import Section1 from "./Section1";
import Section2 from "./Section2";

import "./CSS/Page.css";

const Page = () => {
  const storedData = JSON.parse(localStorage.getItem("user"));
  console.log(storedData);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };

  const default_img =
    "https://lordicon.com/icons/wired/lineal/268-avatar-man.svg";

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

        {!storedData ? (
          <div className="w-2/3">
            <div className="flex justify-center items-center h-full rightBG">
              <Section2 />
            </div>
          </div>
        ) : (
          <div className="w-2/3">
            <div className="flex justify-center items-center h-full rightBG">
              <div className="grid grid-row-auto gap-2">
                <img
                  className="mx-auto"
                  src={storedData.picture ? storedData.picture : default_img}
                  alt=""
                  width="100px"
                />
                <h2 className="text-center">Hello {storedData.name}</h2>
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={handleLogout}
                >
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
