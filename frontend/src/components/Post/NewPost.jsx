import { Card, CardBody, Textarea } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import axios from "axios";
import { PostContext } from "../PostContext";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import Navbar from "../Home/Navbar/Navbar";
import LeftSidebar from "../Home/Sidebar/LeftSidebar/LeftSidebar";

const NewPost = () => {
  const [caption, setCaption] = useState("");
  const { state, setState } = useContext(PostContext);
  const [postImage, setPostImage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePostImage = (e) => {
    setPostImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      setSuccess(true);
      let formData = new FormData();
      formData.append("caption", caption);
      formData.append("postImage", postImage);

      await axios
        .post("/api/v1/posts/post", formData)
        .then(() => {
          setCaption("");
          setState(!state);
          alert("Post Published");
          navigate("/");
        })
        .catch((err) => {
          setSuccess(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Card className="w-full h-fit ">
        <p className="bg-black text-white text-center py-2 sm:text-xl">
          Make a New Post
        </p>

        <CardBody className="flex flex-col">
          <Textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            height={"52"}
            placeholder="Write here..."
            resize={"none"}
          />
          <input
            type="file"
            name="postImage"
            onChange={handlePostImage}
            className=" mt-2 "
          />
          <button
            onClick={handleSubmit}
            className=" bg-green-700 text-white p-2 rounded-md mt-2"
          >
            {success === true ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              <p>Publish Now</p>
            )}
          </button>
        </CardBody>
      </Card>
    </>
  );
};

export default NewPost;
