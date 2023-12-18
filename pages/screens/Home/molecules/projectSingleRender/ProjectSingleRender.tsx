import React, { FC } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ProjectSingleRender:FC<any> = (props) => {
  return (
    <button className="w-full h-32 flex items-center justify-center mt-3" onClick={()=>props.selectProject(props?.data)}>
      <div className="w-2/3 h-2/3 bg-white shadow-md rounded-md flex items-center">
        {/* <div className="h-full w-1 bg-primary" /> */}
        <div className="w-24 h-full flex items-center justify-center">
          <img
            src={props?.data?.project_thumbnail}
            alt="Avatar"
            className="w-10 h-10 rounded-md object-cover"
          />
        </div>
        <div className="w-1/5 h-full flex flex-col justify-evenly items-center">
            <p className="text-primaryText text-[12px] font-bold">{props.data?.project_name}</p>
            <p className="text-grayText text-[12px]">{props?.data?.latest_version}</p>
        </div>
        <div className="w-1/5 h-full flex flex-col justify-evenly items-center">
            <p className="text-gr text-[10px] font-medium">Bugs</p>
            <p className="text-red text-[10px] font-bold">{props?.data?.bugs}</p>
        </div>
        <div className="w-1/5 h-full flex flex-col justify-evenly items-center">
            <p className="text-gr text-[10px] font-medium">Testers</p>
            <IoIosCheckmarkCircleOutline color={"#228B22"} size={22} />
        </div>
        <div className="w-1/5 h-full flex flex-col justify-evenly items-center">
            <p className="text-gr text-[10px] font-medium">Play Store</p>
            <IoIosCheckmarkCircleOutline color={"#228B22"} size={22} />
        </div>
      </div>
    </button>
  );
};

export default ProjectSingleRender;
