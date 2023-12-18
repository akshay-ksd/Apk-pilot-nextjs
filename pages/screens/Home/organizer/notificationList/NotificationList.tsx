import React from "react";
import NotificationSingleRender from "../../molecules/notificationSingleRender/NotificationSingleRender";
const notification = [
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
  {
    title: "From Tester",
    description:
      "Sneha reported 1 bug in Abc driver project build number 2 and version number 10",
    projectId: 1,
    buildId: 2,
    version: 2,
    time: new Date(),
  },
];
const NotificationList = () => {
  return (
    <div className="w-full h-5/6 mt-7   overflow-scroll">
        {
            notification.map((x)=>(
                <NotificationSingleRender x={x}/>
            ))
        }
    </div>
  );
};

export default NotificationList;
