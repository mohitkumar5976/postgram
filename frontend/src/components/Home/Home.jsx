import React from "react";
import PostContainer from "./HomePosts/PostContainer";
import RightSidebar from "./Sidebar/RightSidebar/RightSidebar";
import LeftSidebar from "./Sidebar/LeftSidebar/LeftSidebar";

function Home() {
  return (
    <>
      <div className="w-full bg-gray-200">
        <div className=" md:w-5/6 mx-auto pt-2">
          <div className="flex gap-2 justify-center">
            <div className="w-1/4">
              <LeftSidebar />
            </div>
            <div>
              <PostContainer />
            </div>
            <div className="w-1/4">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
