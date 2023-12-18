import React, { useState } from "react";
import MenuBar from "./organizer/menuBar/MenuBar";
import ProjectList from "./template/prjectList/ProjectList";
import Notification from "./template/Notification/Notification";
import BugList from "./template/bugList/BugList";
import Users from "../users/Users";
const Home = () => {
  const [type, setType] = useState<string>("1");
  const menuType = (number: string) => {
    setType(number);
  };

  const Type = {
    "1": <ProjectList />,
    "2": <BugList/>,
    "3": <Users/>
  };
  return (
    <div className="w-screen h-screen bg-secondaryBackground flex">
      {/* <MenuBar menuType={menuType} />
      <div className="w-3/5 h-full">{Type[type]}</div> */}
      <Notification />
    </div>
  );
};

export default Home;
