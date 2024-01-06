import React, { useContext } from "react";
import ImageComponent from "../Utilities/ImageComponent";
import { AuthContext } from "../AuthContext";

function ChatFriend({ setFriend }) {
  const { userInfo } = useContext(AuthContext);

  const chooseFriend = (friend) => {
    setFriend(friend);
  };

  return (
    <>
      <ul className="list-group overflow-auto h-5/6">
        {userInfo.following && userInfo.following.length !== 0 ? (
          userInfo.following.map((data) => {
            return (
              <li key={data._id}
                onClick={() => chooseFriend(data)}
                className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white"
              >
                <div className="flex gap-2 items-center p-2">
                  <div className="w-10 h-10 ">
                    <ImageComponent photo={data.photo} borderRadius={"50%"} />
                  </div>
                  <div className="w-4/5 pl-2">
                    <p className="text-lg">{data.name}</p>
                    <p className="text-ellipsis	text-nowrap overflow-hidden text-[12px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores harum enim esse.
                    </p>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <h3 className="text-center mt-2">No friends for Conversation</h3>
        )}
      </ul>
    </>
  );
}

export default ChatFriend;
