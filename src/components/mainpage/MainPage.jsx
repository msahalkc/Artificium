import React from "react";
import MainHeader from "./MainHeader";
import { Divider, Spacer } from "@nextui-org/react";
import MainSubHeader from "./MainSubHeader";
import MainContent from "./MainContent";
import MainInput from "./MainInput";

const MainPage = () => {
  return (
    <div className="flex-1 flex flex-col text-white ">
      <div className="flex  m-3 ml-0 p-5 flex-col bg-[#0D0F10] rounded-xl">
        <MainHeader />
        <Divider className="bg-slate-50/10 my-5 mx-0 p-0" />
        <MainSubHeader />
      </div>
      <div className="flex flex-1 overflow-auto">
        <MainContent />
      </div>
      <MainInput />
    </div>
  );
};

export default MainPage;
