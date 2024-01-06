import React, { useContext, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ImageComponent from "../Utilities/ImageComponent";
import { AuthContext } from "../AuthContext";
import Messages from "./Messages";
import { io } from "socket.io-client";

const socket = io("http://localhost:9000");

function ChatContainer({ friend }) {
  const [typedMessage, setTypedMessage] = useState("");
  const { userInfo } = useContext(AuthContext);
  const [state, setState] = useState(false);

  const handleMessage = () => {
    socket.emit("sender", {
      typedMessage,
      senderId: userInfo._id,
      room: "123",
    });
    setTypedMessage('')
    setState(!state);
  };

  useEffect(() => {
    socket.emit("room", { room: "123" });
  }, [socket]);

  return (
    <>
      {friend && friend.length !== 0 ? (
        <div className="bg-black w-full flex flex-col h-screen rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className=" flex items-center justify-between bg-white text-black pl-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <ImageComponent photo={friend.photo} borderRadius={"50%"} />
              </div>
              <p className="text-sm sm:text-lg font-medium">{friend.name}</p>
            </div>
          </div>
          <hr />
          <div className="overflow-auto h-screen p-2">
            <Messages
              state={state}
              socket={socket}
              friendId={friend._id}
              senderId={userInfo._id}
            />
          </div>
          <div className=" flex mb-2 bg-white rounded-full p-1 mx-1">
            <input
              type="text"
              className="w-full rounded-l-full focus:outline-none pl-5 pr-5"
              placeholder="Type here..."
              id="typedMessage"
              onChange={(e) => setTypedMessage(e.target.value)}
              value={typedMessage}
            />
            <span
              onClick={() => handleMessage()}
              className="bg-blue-300 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:text-white "
            >
              <SendIcon />
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-black w-full flex justify-center items-center h-screen rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <p className="bg-white py-2 px-4 rounded-full">
            Start Conversation with Friends
          </p>
        </div>
      )}
    </>
  );
}

export default ChatContainer;
