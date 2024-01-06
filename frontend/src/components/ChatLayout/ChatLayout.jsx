import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatContainer from "./ChatContainer";

function ChatLayout() {
  const [friend, setFriend] = useState([]);

  return (
    <>
      <div className="bg-gray-200 w-full flex justify-center pt-2">
        <div className="pb-2 flex gap-2 w-5/6">
          <ChatSidebar setFriend={setFriend} />
          <ChatContainer friend={friend} />
        </div>
      </div>
    </>
  );
}

export default ChatLayout;
