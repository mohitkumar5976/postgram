import axios from "axios";
import React, { memo, useContext, useMemo, useState } from "react";
import { PostContext } from "../../PostContext";
import { AuthContext } from "../../AuthContext";

const checkFollow = (following, userId) => {
  for (let x of following) {
    if (x._id === userId) {
      return true;
    }
    return false;
  }
};

const FollowButton = ({ userId }) => {
  const [follow, setFollow] = useState("follow");
  const { state, setState } = useContext(PostContext);
  const { following, setLoad } = useContext(AuthContext);

  const check = checkFollow(following, userId);

  const handleFollow = async (userId) => {
    if (follow === "follow") {
      await axios
        .get(`/api/v1/users/follow/${userId}`)
        .then((res) => {
          setState(!state);
          setFollow("Unfollow");
          setLoad(!state);
        })
        .catch((err) => console.log(err.message));
    } else if (follow === "Unfollow") {
      await axios
        .get(`/api/v1/users/follow/${userId}`)
        .then((res) => {
          setState(!state);
          setFollow("follow");
          setLoad(!state);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div
      className="border border-1 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white"
      onClick={() => handleFollow(userId)}
    >
      {check ? "- Unfollow" : "+ follow"}
    </div>
  );
};

export default FollowButton;
