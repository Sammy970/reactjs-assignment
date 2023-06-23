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
      <div className="h-screen overflow-hidden">
        <div className="hidden md:block">
          <div className="w-1/3 h-screen bg-black flex justify-center items-center float-left">
            <img
              src="Board.png"
              alt="left-side"
              className="max-h-fit max-w-full"
            />
            {/* <h1 className="text-white text-center text-4xl font-bold">Board.</h1> */}
          </div>
        </div>

        <div className="lg:w-2/2 flex overflow-hidden justify-center items-center h-full rightBG">
          {!storedData ? (
            <Section2 handleLogout={handleLogout} defaultImg={default_img} />
          ) : (
            <div className="grid grid-row-auto gap-2">
              {!storedData.picture ? null : (
                <img
                  className="mx-auto"
                  src={storedData.picture}
                  alt=""
                  width="100px"
                />
              )}
              <h2 className="text-center">Hello {storedData.name}</h2>
              <button
                className="flex items-center justify-center gap-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
