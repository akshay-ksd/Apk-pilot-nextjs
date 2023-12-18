import React, { FC, forwardRef, useImperativeHandle, useState } from "react";
import { IoMdClose, IoMdAdd } from "react-icons/io";

const MainHeader: FC<any> = ({ closeModel, newVersion }, ref) => {
  const [details, setDetails] = useState({});
  useImperativeHandle(ref, () => ({
    loadData: (data) => {
      setDetails(data);
    },
  }));
  return (
    <div className="w-full h-16 bg-lightGray flex justify-between items-center px-4 rounded-md shadow-md">
      <div className="h-full w-1/2 flex items-center ">
        <img
          src={details?.project_thumbnail}
          alt="Avatar"
          className="w-10 h-10 rounded-md object-cover"
        />
        <div className="ml-3 w-1/2">
          <p className="text-[14px] font-bold text-primaryText font-primary">
            {details?.project_name}
          </p>
          <p className="text-[12px] text-grayText font-primary">{details?.description}</p>
        </div>
        <button
          className="h-8 p-4 flex items-center justify-center bg-primaryText rounded-md shadow-md"
          onClick={() => newVersion()}
        >
          <p className="text-[12px] text-white font-medium mr-2 font-primary">New Version</p>
          <IoMdAdd color={"#fff"} size={16} />
        </button>
      </div>

      <button
        className="w-8 h-8 flex rounded-full items-center justify-center bg-primaryText"
        onClick={closeModel}
      >
        <IoMdClose color={"#fff"} size={16} />
      </button>
    </div>
  );
};

export default forwardRef(MainHeader);
