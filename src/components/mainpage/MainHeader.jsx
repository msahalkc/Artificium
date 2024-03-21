import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { CiShare2 } from "react-icons/ci";
import { TbPencilMinus } from "react-icons/tb";

const MainHeader = () => {
  return (
    <div className="flex justify-between flex-wrap gap-5">
      <div className="left">
        <h2 className="text-xl">Orbital Odyssey</h2>
        <p className="text-sm text-[#9B9C9E]">
          Marketing Campaign for a new TV series Launch
        </p>
      </div>
      <div className="right flex items-center justify-between flex-wrap gap-5">
        <AvatarGroup max={4}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        </AvatarGroup>
        <div className="share-button mx-5 flex items-center text-[#686B6E] text-sm gap-5">
          <div className="flex items-center gap-2">
            <CiShare2 />
            <p className="">Share</p>
          </div>
          <div className="bg-custom-gradient rounded-lg p-3 text-center">
            <TbPencilMinus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
