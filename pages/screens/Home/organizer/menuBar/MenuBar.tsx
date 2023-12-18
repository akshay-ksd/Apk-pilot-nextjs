import React, { FC } from "react";
import Logo from "../../../../components/molecules/logo/Logo";
import Profile from "../../../../components/organizer/profile/Profile";
import MenuList from "../../molecules/menuList/MenuList";
const MenuBar:FC<any> = (props) => {
  return (
    <div className="w-1/6 h-full bg-white ">
      <Logo />
      <Profile />
      <div className="w-ful flex justify-center">
        <MenuList menuType={(number)=>props.menuType(number)}/>
      </div>
    </div>
  );
};

export default MenuBar;
