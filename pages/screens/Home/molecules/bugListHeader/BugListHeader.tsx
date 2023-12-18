import React from "react";
import { IoIosSearch, IoIosFunnel } from "react-icons/io";

const BugListHeader = () => {
  return (
    <div className="w-full h-20  flex items-center justify-center">
      <div className="w-1/4 h-1/2 bg-white rounded-md shadow-md flex items-center px-5">
        <IoIosSearch color={"#71357B"} size={22} />
        <input
          placeholder="Search Bugs ..."
          className="text-sm text-primaryText ml-8"
        />
      </div>
      <button className=" h-1/2 bg-primary flex items-center justify-evenly ml-10 shadow-sm rounded-md px-3">
        <IoIosFunnel color={"#fff"} size={22} />
      </button>
    </div>
  );
};

export default BugListHeader;
