import React, { FC } from "react";
import { IoIosSearch, IoIosFunnel, IoIosAdd } from "react-icons/io";

interface header {
  openRegisterModel: ()=>void
}
const Header:FC<header> = ({openRegisterModel}) => {
  return (
    <div className="w-full h-20  flex items-center justify-center">
      <div className="w-1/4 h-1/2 bg-white rounded-md shadow-md flex items-center px-5">
        <IoIosSearch color={"#71357B"} size={22} />
        <input
          placeholder="Search Users ..."
          className="text-sm text-primaryText ml-8"
        />
      </div>
      <button className=" h-1/2 bg-white flex items-center justify-evenly ml-10 shadow-md rounded-md px-3">
        <IoIosFunnel color={"#71357B"} size={22} />
      </button>
      <button className='w-[150px] h-1/2 bg-primary flex items-center justify-evenly ml-10 shadow-md rounded-md' onClick={openRegisterModel}>
          <p className='text-sm text-white'>New User</p>
          <IoIosAdd color={"#fff"} size={22} />
        </button>
    </div>
  );
};

export default Header;
