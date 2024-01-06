import React, { useContext } from "react";
import { Button, Spinner, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { AuthContext } from "../../AuthContext";
import NotificationComponent from "./Notifications/NotificationComponent";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import ImageComponent from "../../Utilities/ImageComponent";

function Navbar() {
  const { userInfo, handleChange } = useContext(AuthContext);

  return (
    <>
      <div className="flex items-center justify-between py-2 pl-16 pr-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <Link to="/" onClick={handleChange}>
          <p className="text-white font-bold lg:text-2xl">Postgram</p>
        </Link>

        <div className="hidden md:block md:w-2/5">
          <Search />
        </div>

        <div>
          {userInfo != null ? (
            <div className="flex items-center gap-2">
              <ul className="flex items-center gap-3">
                <li>
                  <Link to={"/"}>
                    <Tooltip label="Home">
                      <HomeIcon className="text-white" />
                    </Tooltip>
                  </Link>
                </li>
                <li>
                  <Link to="/user/chats">
                    <Tooltip label="Chats">
                      <ChatIcon className="text-white" />
                    </Tooltip>
                  </Link>
                </li>
                <li>
                  <NotificationComponent />
                </li>
              </ul>
              <Tooltip label="Profile">
                {userInfo.photo ? (
                  <Link to={`/user/profile/${userInfo._id}`}>
                    <div className="w-8 h-8">
                      <ImageComponent
                        photo={userInfo.photo}
                        borderRadius={"50%"}
                      />
                    </div>
                  </Link>
                ) : (
                  <Spinner />
                )}
              </Tooltip>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button size={"sm"}>Login</Button>
              </Link>
              <Link to="/register">
                <Button size={"sm"}>SignUp</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
