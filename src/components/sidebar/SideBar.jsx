import React from "react";
import SideAvatar from "./SideAvatar";
import { Divider } from "@nextui-org/react";
import SideGeneral from "./SideGeneral";
import SideProjects from "./SideProjects";
import SideUser from "./SideUser";
import { Spacer } from "@nextui-org/react";

const SideBar = () => {
  return (
    <div className="md:w-72 w-16 bg-[#0D0F10] m-3 rounded-xl flex flex-col">
      <SideAvatar />
      <Divider className="bg-slate-50/10 m-0 p-0" />
      <SideGeneral />
      <Divider className="bg-slate-50/10 my-5" />
      <div className="flex flex-col justify-between flex-1 mb-5">
        <SideProjects />
        <SideUser />
      </div>
    </div>
  );
};

export default SideBar;
