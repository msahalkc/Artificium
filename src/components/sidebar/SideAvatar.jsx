import React from "react";
import { Card, CardHeader, Avatar } from "@nextui-org/react";
import ImgLogo from "../../assets/avatars/avatar-1.png";
import { IoChevronDownOutline } from "react-icons/io5";

const SideAvatar = () => {
  return (
    <Card className="max-w-[340px] bg-transparent flex text-white">
      <CardHeader className="justify-between md:p-5 py-5 mx-auto">
        <div className="flex gap-5 items-center">
          <Avatar radius="full" size="md" src={ImgLogo} />
          <div className="flex-col gap-1 items-start justify-center hidden md:flex">
            <h4 className="text-small font-semibold leading-none">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <IoChevronDownOutline className="hidden md:block"/>
      </CardHeader>
    </Card>
  );
};

export default SideAvatar;
