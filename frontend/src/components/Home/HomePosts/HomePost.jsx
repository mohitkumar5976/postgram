import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../../Utilities/Comments";
import { PostContext } from "../../PostContext";
import ImageComponent from "../../Utilities/ImageComponent";
import PostComment from "./PostComment";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import FollowButton from "./FollowButton";
import { Tooltip } from "@chakra-ui/react";

function HomePost({ data }) {
  const [viewComments, setViewComments] = useState(false);
  const { state, setState } = React.useContext(PostContext);

  const handleClose = () => {
    setViewComments(!viewComments);
    setState(!state);
  };

  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Link to={`/user/profile/${data.userId._id}`}>
                <div
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <div className="w-10 h-10">
                    <ImageComponent
                      photo={data.userId.photo}
                      borderRadius={"50%"}
                    />
                  </div>

                  <h6 className="mx-2 text-md">{data.userId.name}</h6>
                </div>
              </Link>
              <div className="flex justify-center items-center gap-2">
                <FollowButton userId={data.userId._id} />
                <MoreVertIcon />
              </div>
            </div>

            <div className="h-80" style={{ cursor: "pointer" }}>
              <ImageComponent photo={data.postImage} />
            </div>
            <div className="pl-2 flex justify-between items-center">
              <ul className=" flex gap-2">
                <li className="cursor-pointer">
                  <LikeButton data={data} />
                </li>

                <li className="cursor-pointer">
                  <Tooltip label="Share">
                    <ShareIcon fontSize="1rem" />
                  </Tooltip>
                </li>
              </ul>
              <p
                className="text-sm cursor-pointer"
                onClick={() => setViewComments(!viewComments)}
              >
                View all comments
              </p>
            </div>

            <div className="w-full flex flex-wrap pl-1">
              <p className="text-sm">{data.caption}</p>
            </div>

            <PostComment postId={data._id} />
          </div>
        </div>

        {viewComments ? <Comments handleClose={handleClose} data={data} /> : ""}
      </div>
    </>
  );
}

export default HomePost;
