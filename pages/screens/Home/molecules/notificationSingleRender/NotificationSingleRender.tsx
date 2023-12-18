import React, { FC } from "react";
import { IoIosNotifications } from "react-icons/io";
interface schema {
  title: string;
  description: string;
  projectId: number;
  buildId: number;
  version: number;
  time: Date;
}
const NotificationSingleRender: FC<schema> = (props) => {
  const onClick = () => {
    const title = "hi";
    const url = "https://monospear.com/insightsview/NjA=/opentofu-a-fresh-era-in-open-source-infrastructure";
    
    // Encode title and URL for use in the share URL
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    // Generate the LinkedIn share URL
    // const shareLink = `https://www.linkedin.com/shareArticle?mini=true&summary=youtube&title=${encodedTitle}&url=${encodedUrl}`;
    const shareLink = `https://www.linkedin.com/feed/?shareActive=true&text=This is my text! ${encodedUrl}`
    
    // Open the LinkedIn share link in a new tab/window
    // const shareLink = `https://www.facebook.com/sharer/feed.php?u=http%3A%2F%2Fstackoverflow.com%2Fq%2F20956229%2F1101509&picture=http%3A%2F%2Fwww.applezein.net%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F03%2Ffacebook-logo.jpg&title=A+nice+question+about+Facebook&quote=Does+anyone+know+if+there+have+been+recent+changes+which+could+have+suddenly+stopped+this+from+working%3F&description=Apparently%2C+the+accepted+answer+is+not+correct.`;

    var w = window.open(shareLink, '_blank', 'width=600,height=400');
    //debugger;
    w.document.title = {title}
    w.onload = () => {
      w.document.title = {title};
    }
    
  };
  return (
    <button
      className="w-full h-32 flex items-center justify-center"
      onClick={onClick}
    >
      <div className="w-5/6  bg-white rounded-md shadow-sm p-4">
        <p className="text-xs text-primaryText font-medium">{props.x.title}</p>
        {/* <p className="text-xs text-grayText font- mt-1">
          {props.x.description}
        </p> */}
        <div className="flex w-full">
          <div className="ml-80">
            <IoIosNotifications color={"#95D0D4"} size={10} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default NotificationSingleRender;
