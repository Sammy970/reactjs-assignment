import React from "react";

const ScheduleCard = () => {
  return (
    <>
      <div className="rounded-[10px] bg-white cards px-6 py-6">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">Today’s schedule</h3>
          <div>
            <select className=" ">
              <option value="option1">See All</option>
              <option value="option2">June - July 23</option>
              <option value="option3">July - August 23</option>
            </select>
          </div>
        </div>

        <div className=" mt-5 flex flex-col gap-y-3">
          <div className="border-l-4 border-[#9BDD7C] py-1 pl-3">
            <h4 className="font-lato lg:text-lg sm:text-sm font-bold">
              Check operation at Giga Factory 1
            </h4>
            <div className="font-lato lg:text-md sm:text-sm text-[#999999]">
              18.00-20.00
            </div>
            <div className="font-lato lg:text-md sm:text-sm text-[#999999]">
              at Central Jakarta
            </div>
          </div>
          <div className="border-l-4 border-[#9BD] py-1 pl-3">
            <h4 className="font-lato lg:text-lg sm:text-sm  font-bold">
              Meeting with suppliers from Kuta Bali
            </h4>
            <div className="font-lato lg:text-md sm:text-sm text-[#999999]">
              14.00-15.00
            </div>
            <div className="font-lato lg:text-md sm:text-sm text-[#999999]">
              at Sunset Road, Kuta, Bali
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
