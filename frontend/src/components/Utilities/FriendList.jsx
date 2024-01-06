import React from "react";
import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";

const FriendList = ({ data }) => {
  return (
    <Link to={`/user/profile/${data._id}`}>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10">
          <ImageComponent photo={data.photo} borderRadius={'50%'}/>
        </div>
        <p className="text-md">{data.name}</p>
      </div>
    </Link>
  );
};

export default FriendList;
