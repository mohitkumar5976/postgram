import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import FriendList from "../Utilities/FriendList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Sidebar({ userData }) {
  return (
    <>
      <div className="card p-1 w-2/5 h-fit">
        <p className="text-md text-center rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          User Account
        </p>
        <ul className="flex flex-col py-2">
          <Link to={`/user/profile/${userData._id}`}>
            <li className="flex cursor-pointer pl-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 pl-3 hover:text-white ">
              <AccountCircleIcon />
              &nbsp;&nbsp;Profile
            </li>
          </Link>
          <Link to={`/user/profile/${userData._id}/newpost`}>
            <li className="flex cursor-pointer pl-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 pl-3 hover:text-white ">
              <AddCircleOutlineIcon />
              &nbsp;&nbsp;Add Post
            </li>
          </Link>
        </ul>
        <div>
          <p className="text-md text-center rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Followers
          </p>
          <ul className="overflow-auto max-h-72">
            {userData.followers && userData.followers.length !== 0 ? (
              userData.followers.map((data) => {
                return (
                  <li className="m-3" key={data.id}>
                    <FriendList data={data} />
                  </li>
                );
              })
            ) : (
              <p className="text-center text-md py-2">No followers...</p>
            )}
          </ul>
        </div>
        <div>
          <p className="text-md text-center  rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Following
          </p>
          <ul className="overflow-auto max-h-72">
            {userData.following && userData.following.length !== 0 ? (
              userData.following.map((data) => {
                return (
                  <li className="m-3" key={data.id}>
                    <FriendList data={data} />
                  </li>
                );
              })
            ) : (
              <p className="text-center text-md py-2">No following...</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
