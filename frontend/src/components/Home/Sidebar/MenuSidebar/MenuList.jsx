import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
export default function MenuList() {
  return (
    <>
      <ul className="mt-2">
        <li>
          <Link to="/" className="inline-block w-full py-2.5 pl-6 hover:bg-black">
            <div className="flex gap-2">
              <HiHome size={20} /> Home
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="inline-block w-full py-2.5 pl-6 hover:bg-black">
            <div className="flex gap-2">
              <MdOutlineMessage size={20} /> Chats
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="inline-block w-full py-2.5 pl-6 hover:bg-black">
            <div className="flex gap-2">
              <IoMdSettings size={20} /> Settings
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="inline-block w-full py-2.5 pl-6 hover:bg-black">
            <div className="flex gap-2">
              <MdLogout size={20} /> Logout
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
