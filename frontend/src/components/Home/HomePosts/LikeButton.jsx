import axios from "axios";
import React, { useContext, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Tooltip } from "@chakra-ui/react";
import { PostContext } from "../../PostContext";

export default function LikeButton({ data }) {
  const [like, setLike] = useState({
    color: "black",
    state: false,
  });

  const { state, setState } = useContext(PostContext);

  const handleLike = async (id) => {
    if (like.color === "black") {
      await axios
        .get(`/api/v1/posts/liked/${id}`)
        .then((res) => {
          setLike({ color: "blue", state: true });
          setState(!state);
        })
        .catch((err) => console.log(err.message));
    } else if (like.color === "blue") {
      await axios
        .get(`/api/v1/posts/liked/${id}`)
        .then((res) => {
          setLike({ color: "black", state: false });
          setState(!state);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <>
      <Tooltip label={`${like.state ? "UnLike" : "Like"}`}>
        <ThumbUpIcon
          fontSize="sm"
          style={{ color: `${like.color}` }}
          onClick={() => handleLike(data._id)}
        />
      </Tooltip>
      &nbsp;
      {data.likesAndDislike && data.likesAndDislike.length !== 0
        ? data.likesAndDislike.length
        : ""}
    </>
  );
}
