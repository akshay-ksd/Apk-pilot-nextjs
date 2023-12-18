import React, { FC } from "react";
interface schema {
    title: string;
    description:string;
    projectId: number
    projectName:string;
    projectThumbnail:string;
    testerId: number,
    testerName: string;
    testerThumbnail:string;
    version: string;
    build: string;
}
const BugSingleRender:FC<schema> = (props) => {
  return (
    <div className="w-full h-auto flex items-center justify-center mt-8">
      <div className="w-5/6 bg-white shadow-md rounded-md p-4">
        <div className="w-full">
          <p className="text-[14px] text-primaryText font-semibold">{props.d.title}</p>
        </div>
        <div className="w-full mt-2 h-1/2 ">
          <p className="text-[12px] text-grayText font-normal">{props.d.description}</p>
        </div>
        <div className="w-full h-5 flex items-center  bg-white rounded-md mt-5">
          <div className="h-full flex items-center  border-white px-4 bg-lightGray rounded-md">
            <p className="text-[10px] text-grayText font-thin">Project :</p>

            <img
              src={props.d.projectThumbnail}
              alt="Avatar"
              className="w-3 h-3 rounded-md object-cover ml-2"
            />
            <p className="text-xs text-primaryText font-medium ml-2">
            {props.d.projectName}
            </p>
          </div>
          <div className="h-full flex items-center ml-2 border-white px-4 bg-lightGray rounded-md">
            <p className="text-[10px] text-grayText font-thin">Tester :</p>
            <img
              src={props.d.testerThumbnail}
              alt="Avatar"
              className="w-3 h-3 rounded-md object-cover ml-2"
            />
            <p className="text-[10px] text-grayText font-medium ml-2">{props.d.testerName}</p>
          </div>
          <div className="h-full flex items-center ml-2 border-white px-4 bg-secondary rounded-md">
            <p className="text-[10px] text-white font-thin">Version :</p>
            <p className="text-[10px] text-primaryText font-medium ml-2">{props.d.version}</p>
          </div>
          <div className="h-full flex items-center ml-2 border-white px-4 bg-tertiary rounded-md">
            <p className="text-[10px] text-white font-thin">Build :</p>
            <p className="text-[10px] text-primaryText font-medium ml-2">{props.d.build }</p>
          </div>
          <div className="h-full flex items-center ml-2 border-white px-4 border-r-4 bg-lightGray rounded-md">
            <p className="text-[10px] text-grayText font-thin">Time :</p>
            <p className="text-[10px] text-primaryText font-medium ml-2">10:20 pm</p>
          </div>
          <div className="h-full flex items-center ml-2 border-white px-4 border-r-4 bg-lightGray rounded-md">
            <p className="text-[10px] text-grayText font-thin">Date :</p> 
            <p className="text-[10px] text-primaryText font-medium ml-2">10:20 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugSingleRender;
