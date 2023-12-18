import React, { FC } from "react";
import { IoIosHome, IoIosPersonAdd, IoIosBug, IoMdPower } from "react-icons/io";
interface d {
  id: number;
  title: string;
  selectType: (id: string) => void;
  type: string;
}
const Menu: FC<d> = (props) => {
  const icon = {
    "1": <IoIosHome color={props.type == "1"?"#71357B":"#A6A6A6"} size={15} />,
    "2": <IoIosBug color color={props.type == "2"?"#71357B":"#A6A6A6"} size={15} />,
    "3": <IoIosPersonAdd color={props.type == "3"?"#71357B":"#A6A6A6"} size={15} />,
    "4": <IoMdPower color={props.type == "4"?"#FE7E51":"#FE7E51"} size={15} />,
  };
  return (
    <button
      className="w-full h-10 flex  items-center bg-white mt-8 px-5 shadow-md rounded-md"
      onClick={() => props.menuType(props?.d?.id)}
    >
      {icon[props?.d?.id]}
      <p className={`text-sm  ${props?.type == props?.d?.id?"text-primaryText":"text-grayText"} ml-5`}>{props?.d?.title}</p>
    </button>
  );
};

export default Menu;
