import React, { useContext, useEffect, useState } from "react";
import UserPost from "./UserPost";
import axios from "axios";
import ImageComponent from "../Utilities/ImageComponent";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { AuthContext } from "../AuthContext";

function UserProfile() {
  const [userData, setUserData] = useState([]);
  const { followers, following } = useContext(AuthContext);

  const { id } = useParams();
  const loadposts = async () => {
    await axios
      .get(`/api/v1/users/${id}`)
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadposts();
  }, [id]);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="card py-2 sm:flex flex-row justify-center">
          <div>
            <div className="flex items-center gap-3">
              {userData.photo ? (
                <div className="w-12 h-12 sm:w-32 sm:h-32">
                  <ImageComponent photo={userData.photo} borderRadius={"50%"} />{" "}
                </div>
              ) : (
                <Spinner />
              )}

              <div className="flex gap-2 justify-center m-auto text-center text-sm">
                <div className="md:text-xl">
                  {userData.posts && userData.posts.length !== 0
                    ? userData.posts.length
                    : "0"}
                  <p>Posts</p>
                </div>
                <div className="md:text-xl">
                  {followers && followers.length !== 0 ? followers.length : "0"}
                  <p>followers</p>
                </div>
                <div className="md:text-xl">
                  {following && following.length !== 0 ? following.length : "0"}
                  <p>following</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-md md:text-2xl  font-bold   ">
                {userData.name}
              </p>

              <p className="text-sm w-full md:w-3/4">
                Passionate MERN Developer
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap md:flex flex-wrap w-full overflow-auto ">
          {userData.posts && userData.posts.length != 0 ? (
            userData.posts.map((data) => {
              return <UserPost data={data} />;
            })
          ) : (
            <h1 className="m-auto lg:m-auto">No Posts Available</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
