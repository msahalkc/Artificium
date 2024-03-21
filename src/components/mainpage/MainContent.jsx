import React from "react";
import { IoChatbubbleOutline, IoCodeSlashOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { GoLightBulb } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const CreativeAssets = [
  "Ul wireframe",
  "Brochure design",
  "Social media",
  "Brand guidelines",
];

const DevTools = [
  "API Integration",
  "Test automation",
  "DB optimization",
  "Code review",
];

const ContentCreation = [
  "Product description",
  "E-mail copy",
  "Whitepaper",
  "Press release",
];

const IdeaGeneration = [
  "Hashtag ideas",
  "Brainstorming",
  "Trend analysis",
  "Social media posts",
];

const MainContent = () => {
  return (
    <div className="bg-[#131619] w-full">
      <div className="text-center flex flex-col items-center justify-center h-48 overflow-auto mx-10">
        <h2 className="text-3xl">Innovation Starter Pack</h2>
        <p className="text-[#9B9C9E]">
          Kickstart your innovation process with our comprehensive selection of
          predefined prompts.
        </p>
      </div>
      <div className="flex mx-10 justify-around overflow-auto flex-wrap gap-5">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-custom-gradient p-5 w-14">
            <IoChatbubbleOutline className="m-auto text-stem-green" />
          </div>
          <h2 className="mt-3">Creative Assets</h2>
          {CreativeAssets.map((asset, index) => (
            <div
              key={index}
              className="item-container flex mt-5 p-3 items-center justify-between text-sm bg-custom-gradient rounded-lg min-w-56"
            >
              <h2>{asset}</h2>
              <IoIosArrowForward />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-custom-gradient p-5 w-14">
            <IoCodeSlashOutline className="m-auto text-[#82DBF7]" />
          </div>
          <h2 className="mt-3">Developer Tools</h2>
          {DevTools.map((asset, index) => (
            <div
              key={index}
              className="item-container flex mt-5 p-3 items-center justify-between text-sm bg-custom-gradient rounded-lg min-w-56"
            >
              <h2>{asset}</h2>
              <IoIosArrowForward />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-custom-gradient p-5 w-14">
            <SlPencil className="m-auto text-[#BD9AF8]" />
          </div>
          <h2 className="mt-3">Content Creation</h2>
          {ContentCreation.map((asset, index) => (
            <div
              key={index}
              className="item-container flex mt-5 p-3 items-center justify-between text-sm bg-custom-gradient rounded-lg min-w-56"
            >
              <h2>{asset}</h2>
              <IoIosArrowForward />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-custom-gradient p-5 w-14">
            <GoLightBulb className="m-auto text-[#FFD147]" />
          </div>
          <h2 className="mt-3">Idea Generation</h2>
          {IdeaGeneration.map((asset, index) => (
            <div
              key={index}
              className="item-container flex mt-5 p-3 items-center justify-between text-sm bg-custom-gradient rounded-lg min-w-56"
            >
              <h2>{asset}</h2>
              <IoIosArrowForward />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
