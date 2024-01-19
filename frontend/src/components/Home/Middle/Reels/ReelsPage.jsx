import React from "react";
import LeftSidebar from "../../Sidebar/LeftSidebar/LeftSidebar";
import Reels from "./Reels";
import RightSidebar from "../../Sidebar/RightSidebar/RightSidebar";

export default function ReelsPage() {
  return (
    <div className="flex justify-center items-start pt-2 gap-2  min-h-screen bg-gray-200">
      <div className="w-1/5">
        <LeftSidebar />
      </div>
      <div className="w-2/5">
        <Reels />
      </div>
      <div className="md:w-1/5">
        <RightSidebar />
      </div>
    </div>
  );
}
