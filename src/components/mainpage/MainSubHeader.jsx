import React from "react";
import { PiTriangleBold } from "react-icons/pi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";

const MainSubHeader = () => {
  return (
    <div className="p-5 flex gap-10 md:justify-normal justify-around">
      <div className="flex items-center gap-3">
        <PiTriangleBold className="text-stem-green" />
        <p className="hidden md:block">Artificium</p>
      </div>
      <div className="flex items-center gap-3 text-[#9B9C9E]">
        <IoChatbubbleOutline />
        <p className="hidden md:block">Chat</p>
      </div>
      <div className="flex items-center gap-3 text-[#9B9C9E]">
        <CiFolderOn />
        <p className="hidden md:block">Library</p>
      </div>
    </div>
  );
};

export default MainSubHeader;
