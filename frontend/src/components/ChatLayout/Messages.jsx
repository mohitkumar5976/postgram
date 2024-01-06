import React, { useEffect, useState } from "react";

export default function Messages({ friendId, socket, state, senderId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    socket.on("receiver", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    return () => socket.off();
  }, [friendId, state, socket]);

  return (
    <>
      {messages.map((data) => {
        return (
          <p
            className={`${
              senderId !== data.senderId ? "" : "ml-auto"
            } bg-green-200 rounded-lg px-2 w-fit my-2`}
          >
            {data.typedMessage}
          </p>
        );
      })}
    </>
  );
}
