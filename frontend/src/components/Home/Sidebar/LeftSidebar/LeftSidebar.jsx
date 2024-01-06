import React, { useContext, useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";
import ImageComponent from "../../../Utilities/ImageComponent";
import Followers from "./Followers";
import Following from "./Following";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { PostContext } from "../../../PostContext";

function LeftSidebar() {
  const { userInfo, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout()
      .then((res) => {
        if (res === 200) {
          localStorage.removeItem("user");
          navigate("/login");
        } else {
          alert("Can't logout");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="card">
        <div className="flex flex-col items-center py-2">
          {userInfo.photo ? (
            <div className="w-24 h-24">
              <ImageComponent
                photo={`${userInfo.photo}`}
                borderRadius={"50%"}
              />
            </div>
          ) : (
            <div className="w-24 h-24 flex items-center justify-center">
              <Spinner />
            </div>
          )}

          <p className="text-xl py-2 cursor-pointer font-bold">
            {userInfo.name}
          </p>
        </div>
        <hr />
        <div className="flex justify-center gap-4">
          <Followers />
          <Following />
        </div>

        <hr />

        <ul className="flex flex-col">
          <Link to="/login">
            <li
              onClick={() => handleLogout()}
              className="py-3 pl-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white "
            >
              <LogoutIcon />
              &nbsp;&nbsp;Logout
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default LeftSidebar;
