import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import { TbTriangle } from "react-icons/tb";

const SideProjects = () => {
  return (
    <div className="md:px-5 text-white mx-auto">
      <h2 className="mt-5 text-xs hidden md:block">PROJECTS</h2>
      <div className="item-container flex mt-5 p-3 items-center justify-between text-sm bg-custom-gradient rounded-lg">
        <div className="flex items-center">
          <BiSquareRounded className="text-stem-green" />
          <h4 className="ml-2 hidden md:block">Orbital Oddysey</h4>
        </div>
      </div>
      <div className="item-container flex mt-3 p-3 items-center justify-between text-sm rounded-lg">
        <div className="flex items-center">
          <TbTriangle className="text-[#D0302F]" />
          <h4 className="ml-2 hidden md:block">Digital Product Launch</h4>
        </div>
      </div>
      <div className="item-container flex mt-3 p-3 items-center justify-between text-sm rounded-lg">
        <div className="flex items-center">
          <BiSquareRounded className="text-[#E26F20]" />
          <h4 className="ml-2 hidden md:block">Brand Refresh</h4>
        </div>
      </div>
      <div className="item-container flex mt-3 p-3 items-center justify-between text-sm rounded-lg">
        <div className="flex items-center">
          <BiSquareRounded className="text-[#82DBF7]" />
          <h4 className="ml-2 hidden md:block">Social Media Strategy</h4>
        </div>
      </div>
    </div>
  );
};

export default SideProjects;

