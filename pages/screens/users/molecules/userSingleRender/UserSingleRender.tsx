import React, { FC } from "react";
import { IoIosCreate } from "react-icons/io";
interface schema {
  userId: string;
  username: string;
  userThumbnail: string;
  userTypeId: number;
  userType: string;
  isActive: boolean;
  email: string;
}

const UserSingleRender: FC<any> = ({ x,editDetails }) => {
  const userType = {
    1: "text-red",
    2: "text-secondary",
    3: "text-green",
    4: "text-tertiary",
    5: "text-primary",
  };
  
  const role = {
    1: "Tester",
    2: "Lead",
    3: "Manager",
    4: "Developer",
  };
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="w-1/2 h-20 bg-white shadow-md rounded-md flex items-center p-2">
        <img
          src={x?.userThumbnail}
          alt="Avatar"
          className="w-16 h-16 rounded-md object-cover"
        />
        <div className="w-3/4 h-full ml-5">
          <p className="text-[12px] text-primaryText font-semibold">
            {x?.username}
          </p>
          <p className="text-grayText text-[10px] font-medium mt-1 flex">
            Role :
            <p
              className={`${
                userType[x?.role]
              } text-[10px] font-medium ml-1`}
            >
              {role[x?.role]}
            </p>
          </p>
          <p className="text-grayText text-[10px] font-normal mt-1">
            {x?.email}
          </p>
        </div>
        <button onClick={()=>editDetails(x)}>
          <IoIosCreate color={"#71357B"} size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserSingleRender;
