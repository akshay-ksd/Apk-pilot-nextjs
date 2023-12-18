import React, { FC, useState } from "react";
import Menu from "../menu/Menu";

interface dataType {
  id: string;
  title: string;
}
const MenuList:FC<any> = (props) => {
  const [type,setType] = useState("1")
  const Data: dataType[] = [
    { id: "1", title: "Projects" },
    { id: "2", title: "Bugs" },
    { id: "3", title: "Users" },
  ];
  const d = { id: "4", title: "Log Out" };

  const selectedType =(number)=>{
    props.menuType(number)
    setType(number)
  }

  return (
    <div className="w-1/2 h-1/2 flex  flex-col item-center">
      {Data.map((d) => (
        <Menu d={d} key={d?.id} menuType={selectedType} type={type}/>
      ))}
      <div className="mt-20">
        <Menu d={d} />
      </div>
    </div>
  );
};

export default MenuList;
