import React from "react";
import StoryCard from "./StoryCard";


import { FiPlus } from "react-icons/fi";
export default function Story() {
  return (
    <>
      <div className="flex items-start gap-2 mb-2">
        <div className="relative w-75 bg-white h-44 border-2 border-dashed border-slate-400">
          <div className="absolute w-full top-1/2  -translate-y-1/2 flex flex-col  items-center">
            <div className="w-14 h-14  bg-blue-100 flex justify-center items-center rounded-full">
              <FiPlus size={30} className="text-blue-700" />
            </div>
            <span> Post Story</span>
          </div>
        </div>
        <ul  id="story-scrollbar"
          className="pb-2 flex gap-2 overflow-x-scroll"
        
        >
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
          <li>
            <StoryCard />
          </li>
        </ul>
      </div>
    </>
  );
}
