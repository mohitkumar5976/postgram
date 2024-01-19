import React from "react";
import PostContainer from "./HomePosts/PostContainer";
import RightSidebar from "./Sidebar/RightSidebar/RightSidebar";
import LeftSidebar from "./Sidebar/LeftSidebar/LeftSidebar";
import MenuSidebar from "./Sidebar/MenuSidebar/MenuSidebar";
import Reels from "./Middle/Reels/Reels";

function Home() {
  return (
    <>
      <div className="flex justify-center items-start pt-2 gap-2  min-h-screen bg-gray-200">
        <div className="w-1/5">
          <LeftSidebar />
        </div>
        <div className="w-2/5">
          <PostContainer />
        </div>
        <div className="md:w-1/5">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
