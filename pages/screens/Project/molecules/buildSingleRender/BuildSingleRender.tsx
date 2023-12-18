import React, { FC, useState } from "react";
import StatusBox from "../../atom/statusBox/StatusBox";
import Testers from "../testers/Testers";
import StoreStatus from "../../atom/storeStatus/StoreStatus";

const BuildSingleRender:FC<any> = ({item,index,selectedP,selectBuild}) => {

  const selectCurrentBuild =()=>{
    selectBuild(item)
  }
  return (
    <div className="w-full items-center justify-center p-2">
      <div className={`w-full flex items-center justify-between px-2 ${item?.isSelect?"bg-secondaryBackground":"bg-white"}  rounded-md`}>
        <button className="w-1/12 py-2 flex items-center justify-center" onClick={selectCurrentBuild}>
          <img
            src={selectedP?.project_thumbnail}
            alt="Avatar"
            className="w-5 h-5 rounded-md object-cover"
          />
          <p className="text-[12px] text-primaryText font-bold font-primary ml-3">
            {index+1}
          </p>
        </button>
        <div className="w-1/6 py-2 flex items-center justify-center ">
          <StatusBox status={item?.status}/>
        </div>
        <div className="w-1/6 py-2 flex items-center justify-center">
          <Testers build={item}/>
        </div>
        <div className="w-1/12 py-2 flex items-center justify-center">
          <p className="text-[12px] text-red font-bold font-primary">1</p>
        </div>
        <div className="w-1/12 py-2 flex items-center justify-center">
          <StoreStatus />
        </div>
        <textarea
          type="description"
          id="description"
          name="description"
          value={item?.comments}
          className="w-1/3 py-2 flex items-center justify-center bg-lightGray rounded-md text-[12px] text-grayText font-medium font-primary  p-2"
          readOnly
        />
      </div>
    </div>
  );
};

export default BuildSingleRender;
