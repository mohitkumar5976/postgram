import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import FriendList from "../../../Utilities/FriendList";

export default function RightSidebar() {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <div className="card p-1 ">
        <div>
          <p className="text-md text-center rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Followers
          </p>
          <ul className="overflow-auto max-h-72">
            {userInfo.followers && userInfo.followers.length !== 0 ? (
              userInfo.followers.map((data) => {
                return (
                  <li className="m-3" key={data._id}>
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
            {userInfo.following && userInfo.following.length !== 0 ? (
              userInfo.following.map((data) => {
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
