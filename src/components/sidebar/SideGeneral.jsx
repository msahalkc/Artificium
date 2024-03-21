import React from "react";
import { CiSearch, CiCreditCard1 } from "react-icons/ci";
import { Kbd } from "@nextui-org/react";

const SideGeneral = () => {
  return (
    <div className=" px-5 text-white">
      <h2 className="mt-5 text-xs hidden md:block">GENERAL</h2>
      <div className="item-container flex mt-5 items-center md:justify-between justify-center text-sm">
        <div className="flex items-center">
          <CiSearch className="mx-auto" />
          <h4 className="ml-2 hidden md:block">Search</h4>
        </div>
        <Kbd keys={["command"]} className="border-1 bg-gradient-custom-gradient hidden md:block">
          S
        </Kbd>
      </div>
      <div className="item-container flex mt-5 items-center md:justify-between justify-center text-sm">
        <div className="flex items-center">
          <CiCreditCard1 className="mx-auto" />
          <h4 className="ml-2 hidden md:block">Billing</h4>
        </div>
      </div>
    </div>
  );
};

export default SideGeneral;

