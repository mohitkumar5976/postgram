import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import FriendList from "../../../Utilities/FriendList";

export default function RightSidebar() {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <div className="bg-white p-2">
        <p className="text-lg font-semibold text-center py-2">
          People You Might Know
        </p>
        <ul className="overflow-auto max-h-72">
          <li>
            <FriendList />
          </li>
          <li>
            <FriendList />
          </li>
          <li>
            <FriendList />
          </li>
        </ul>
        <button className="text-center text-blue-600 py-1 bg-blue-100 w-full inline-block hover:bg-blue-800 hover:text-white">View More</button>
      </div>
    </>
  );
}
