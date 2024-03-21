import React from "react";
import { IoMicOutline } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";

const MainInput = () => {
  return (
    <div className="text-[#363A3D] p-5 flex bg-[#0D0F10] rounded-xl items-center mr-3 mb-5">
      <div className="flex items-center gap-5 flex-1">
        <IoMicOutline />
        <input type="text" placeholder="You can ask me anything! I am here to help." className="bg-transparent text-[#363A3D] flex-1" />
      </div>
      <div className="flex items-center gap-5">
        <FiPaperclip />
        <div className="bg-[#1A1D21] rounded-lg text-white p-2 z-10">
          <IoPaperPlaneOutline />
        </div>
      </div>
    </div>
  );
};

export default MainInput;
