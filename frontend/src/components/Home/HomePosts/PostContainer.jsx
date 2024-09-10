import React, { useContext } from "react";
import { PostContext } from "../../PostContext";
import HomePost from "./HomePost";
import Story from "../Middle/Story/Story";
import AddPost from "../Middle/AddPost/AddPost";

function PostContainer() {
  const { posts } = useContext(PostContext);

  return (
    <>
      {posts && posts.length !== 0 ? (
        <p className="text-white text-center font-300 rounded-full mb-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-2 hidden">
          Latest Posts
        </p>
      ) : (
        ""
      )}
      {/* <Story /> */}
      {/* <AddPost /> */}
      <ul className="w-full">
        {posts && posts.length !== 0 ? (
          posts.map((data) => {
            return (
              <li key={data._id}>
                <HomePost data={data} />
              </li>
            );
          })
        ) : (
          <img
            src={require("../../images/no-post.jpg")}
            className="w-full h-full"
            alt="loading post..."
          />
        )}
      </ul>
    </>
  );
}

export default PostContainer;
