import React, { useContext, useState } from "react";
import ImageComponent from "../../Utilities/ImageComponent";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../../AuthContext";
import axios from "axios";

const PostComment = ({ postId }) => {
  const { userInfo } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const handleCommentSubmit = async (postId) => {
    try {
      await axios
        .post(`/api/v1/posts/comment/${postId}`, { comment })
        .then((res) => {
          if (res.status === 200) {
            setComment("");
            alert("Comment Successull");
          } else {
            alert("Something went wrong!!");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center pt-2">
        <div className="w-9 h-9 ">
          <ImageComponent photo={userInfo.photo} borderRadius={"50%"} />
        </div>
        <div className="w-full flex items-center">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full pr-3 pl-2 focus:outline-none"
            placeholder="Add a comment..."
          />
          <button
            onClick={() => handleCommentSubmit(postId)}
            className="bg-blue-300 w-9 h-9 flex justify-center items-center rounded-full p-1 cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <SendIcon fontSize="md"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostComment;
