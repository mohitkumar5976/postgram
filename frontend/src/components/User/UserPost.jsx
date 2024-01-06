import React, { useContext } from "react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AuthContext } from "../AuthContext";

function UserPost({ data }) {
  const { load, setLoad } = useContext(AuthContext);

  const handleDelete = async () => {
    await axios
      .delete(`/api/v1/posts/${data._id}`)
      .then(() => {
        {
          alert("Post Deleted");
          setLoad(!load);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
        <div className="card w-28 m-1  lg:w-1/3">
          <div className="post-image" style={{ cursor: "pointer" }}>
            <img
              src={`${data.postImage}`}
              className="w-100 h-100"
              alt=""
            />
          </div>

          {data != null ? (
            <div className=" flex justify-between py-2 mx-2 items-center">
              <p className="font-bold">
                Likes (
                {data.likesAndDislike && data.likesAndDislike.length !== 0
                  ? data.likesAndDislike.length
                  : "0"}
                )
              </p>

              <button
                onClick={() => handleDelete()}
                className="md:rounded-full hover:bg-red-500 hover:text-white"
              >
                <DeleteForeverIcon />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
     
    </>
  );
}

export default UserPost;
