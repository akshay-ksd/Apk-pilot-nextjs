import React from "react";
import BugSingleRender from "../../molecules/bugSingleRender/BugSingleRender";
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
const bug:schema[] = [
  {
    title: "App crash",
    description:
      "Home Screen prayer button not visible and app is crash after press button",
    projectId: 1,
    projectName: "ABC Driver",
    projectThumbnail:
      "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b9443130df5a0305aa92f38acf3c27d6.png?VersionId=iJe6QrPkcCIBBzjiX_QfA613qDpcDvQE",
    testerId: 2,
    testerName: "Pramod",
    testerThumbnail:
      "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    version: "1.0.3",
    build: "2",
  },
  {
    title: "App crash",
    description:
      "Home Screen prayer button not visible and app is crash after press button",
    projectId: 1,
    projectName: "ABC Driver",
    projectThumbnail:
      "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b9443130df5a0305aa92f38acf3c27d6.png?VersionId=iJe6QrPkcCIBBzjiX_QfA613qDpcDvQE",
    testerId: 2,
    testerName: "Pramod",
    testerThumbnail:
      "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    version: "1.0.3",
    build: 2,
  },
  {
    title: "App crash",
    description:
      "Home Screen prayer button not visible and app is crash after press button",
    projectId: 1,
    projectName: "ABC Driver",
    projectThumbnail:
      "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b9443130df5a0305aa92f38acf3c27d6.png?VersionId=iJe6QrPkcCIBBzjiX_QfA613qDpcDvQE",
    testerId: 2,
    testerName: "Pramod",
    testerThumbnail:
      "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    version: "1.0.3",
    build: "2",
  },
  {
    title: "App crash",
    description:
      "Home Screen prayer button not visible and app is crash after press button",
    projectId: 1,
    projectName: "ABC Driver",
    projectThumbnail:
      "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b9443130df5a0305aa92f38acf3c27d6.png?VersionId=iJe6QrPkcCIBBzjiX_QfA613qDpcDvQE",
    testerId: 2,
    testerName: "Pramod",
    testerThumbnail:
      "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    version: "1.0.3",
    build: "2",
  },
  {
    title: "App crash",
    description:
      "Home Screen prayer button not visible and app is crash after press button",
    projectId: 1,
    projectName: "ABC Driver",
    projectThumbnail:
      "https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/b9443130df5a0305aa92f38acf3c27d6.png?VersionId=iJe6QrPkcCIBBzjiX_QfA613qDpcDvQE",
    testerId: 2,
    testerName: "Pramod",
    testerThumbnail:
      "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    version: "1.0.3",
    build: "2",
  },
];
const BugTable = () => {
  return (
    <div className="overflow-scroll h-5/6 mt-7">
      {bug.map((d:schema) => (
        <BugSingleRender d={d}/>
      ))}
    </div>
  );
};

export default BugTable;
