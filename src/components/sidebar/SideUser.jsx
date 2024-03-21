import React from "react";
import { Badge, Avatar } from "@nextui-org/react";
import { IoSettingsOutline } from "react-icons/io5";

const SideUser = () => {
  return (
    <div className="text-white px-5 flex">
      <div className="flex mt-5 md:p-3 p-0 items-center justify-between text-sm bg-custom-gradient rounded-lg w-full">
        <div className="flex">
          <Badge content="" size="sm" color="success">
            <Avatar
              // radius="md"
              className="md:w-10 md:h-10 w-6 h-6"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </Badge>
          <div className="flex-col gap-1 items-start justify-center ml-3 hidden md:flex">
            <h4 className="text-md font-semibold leading-none text-white">
              Ryan Lee
            </h4>
            <h5 className="tracking-tight text-stem-green text-xs">Premium</h5>
          </div>
        </div>
        <IoSettingsOutline className="hidden md:block" />
      </div>
    </div>
  );
};

export default SideUser;
