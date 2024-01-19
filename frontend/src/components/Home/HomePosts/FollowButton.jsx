import axios from "axios";
import React, {  useContext,  useState } from "react";
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
    <span
      className={`border border-1 px-3 py-1 rounded-full cursor-pointer text-[12px] font-bold  hover:bg-blue-600 hover:text-white`}
      onClick={() => handleFollow(userId)}
    >
      {check ? "- Unfollow" : "+ follow"}
    </span>
  );
};

export default FollowButton;
