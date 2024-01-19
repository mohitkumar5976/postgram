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
import { IoHomeSharp } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BiSolidBell } from "react-icons/bi";

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
      <div className="bg-white p-2">
        <div className="flex flex-col items-center">
          <div
            className="w-full h-20 relative"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=600")`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-16 h-16 absolute left-1/2 -translate-x-1/2  -bottom-1/2">
              <ImageComponent
                photo={
                  "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww"
                }
                borderRadius={"50%"}
              />
            </div>
          </div>

          <Link to={"/"} className="mt-10 text-xl font-bold">
            Mohit Kumar
          </Link>
          <p className="text-sm">Web Developer at NIIT Ltd</p>
          <p className="text-sm mx-3 my-2">
            I'd love to change the world, but they won’t give me the source
            code.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 py-2">
          <div className="flex flex-col text-center">
            <span className="text-sm">345</span>
            <span className="text-sm text-gray-400">Posts</span>
          </div>
          <div className="w-[1px] h-8 border-l-2 border-gray-300"></div>
          <div className="flex flex-col text-center">
            <span className="text-sm">3454</span>
            <span className="text-sm text-gray-400">Followers</span>
          </div>
          <div className="w-[1px] h-8 border-l-2 border-gray-300"></div>
          <div className="flex flex-col text-center">
            <span className="text-sm">345</span>
            <span className="text-sm text-gray-400">Following</span>
          </div>
        </div>

        <hr className="text-gray-400 mx-2" />

        <div className="my-2 pl-3">
          <Link
            to="/"
            className="py-2 inline-block w-full flex items-center gap-2"
          >
            <IoHomeSharp size={18} /> Feed
          </Link>
          <Link
            to="#"
            className="py-2 inline-block w-full flex items-center gap-2"
          >
            <MdChat size={18} /> Groups
          </Link>
          <Link
            to="#"
            className="py-2 inline-block w-full flex items-center gap-2"
          >
            <BiSolidBell size={18} /> Notifications
          </Link>
          <Link
            to="/settings"
            className="py-2 inline-block w-full flex items-center gap-2"
          >
            <IoMdSettings size={18} /> Settings
          </Link>
          <Link
            to="/login"
            className="py-2 inline-block w-full flex items-center gap-2"
          >
            <LogoutIcon />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftSidebar;
