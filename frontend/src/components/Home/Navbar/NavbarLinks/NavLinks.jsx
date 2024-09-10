import { Box, Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdChat } from "react-icons/md";

import { BiSolidBell } from "react-icons/bi";
import ImageComponent from "../../../Utilities/ImageComponent";
import { FaVideo } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import NotificationButton from "../Notifications/NotificationButton";
import ProfileButton from "./ProfileButton";

export default function NavLinks() {
  return (
    <>
      <div className="flex items-center gap-10 pr-5">
        {/* <Box className="flex gap-3">
          <Tooltip className="flex items-center" title={"Hello"}>
            <Button>Demo</Button> <IoIosArrowDown size={16} />
          </Tooltip>
          <Tooltip
            className="flex items-center"
            describeChild
            title="Does not add if it already exists."
          >
            <Button>Pages</Button> <IoIosArrowDown size={16} />
          </Tooltip>
          <Tooltip
            className="flex items-center"
            describeChild
            title="Does not add if it already exists."
          >
            <Button>Account</Button> <IoIosArrowDown size={16} />
          </Tooltip>
        </Box> */}

        <ul className="flex justify-center items-center gap-2">
          <li>
            <Tooltip title="Feed">
              <Link
                to="/"
                className="bg-slate-200 flex justify-center w-8 h-8 items-center rounded-full text-gray-500 hover:text-gray-800"
              >
                <IoHomeSharp size={16} />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Reels">
              <Link
                to="/reels"
                className="bg-slate-200 flex justify-center w-8 h-8 items-center rounded-full text-gray-500 hover:text-gray-800"
              >
                <FaVideo size={16} />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Chats">
              <Link
                to="/user/chats"
                className="bg-slate-200 flex justify-center w-8 h-8 items-center rounded-full text-gray-500 hover:text-gray-800"
              >
                <MdChat size={16} />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Notifications">
              <NotificationButton />
            </Tooltip>
          </li>
          <li className="flex">
            <ProfileButton />
          </li>
        </ul>
      </div>
    </>
  );
}
