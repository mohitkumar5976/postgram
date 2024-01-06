import React, { useState } from "react";
import ChatFriend from "./ChatFriend";

function ChatSidebar({ setFriend }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="card h-screen w-2/5 hidden lg:block">
        <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center p-2 text-xl">
          Conversation With Friends
        </p>

        <div className=" py-2  flex items-center px-2 rounded-md">
          <input
            type="search"
            placeholder="Search people..."
            className="w-full py-1 px-2 focus:outline-none"
            value={search}
            onChange={(e) => handleSearch(e)}
          />

          <i className="fa fa-search text-xl pr-1 cursor-pointer"></i>
        </div>
        <ChatFriend setFriend={setFriend} />
      </div>
    </>
  );
}

export default ChatSidebar;
