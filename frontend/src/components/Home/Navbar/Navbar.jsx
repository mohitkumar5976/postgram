import React, { useContext, useState } from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { AuthContext } from "../../AuthContext";
import NotificationComponent from "./Notifications/NotificationComponent";
import ImageComponent from "../../Utilities/ImageComponent";
import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import MenuSidebar from "../Sidebar/MenuSidebar/MenuSidebar";
import NavLinks from "./NavbarLinks/NavLinks";

function Navbar() {
  const { userInfo, handleChange } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center py-1 sticky top-0 bg-white z-10">
        {/* <div className="flex items-center gap-2">
          <div className="md:hidden">
            <IoMenu
              onClick={() => setVisible(!visible)}
              size={25}
              color="#ffffff"
            />
            <MenuSidebar visible={visible} setVisible={setVisible} />
          </div>
         
        </div> */}
        <div className="flex items-center gap-x-4 w-full pl-14">
          <Link to="/" className="font-bold lg:text-2xl">
            Postgram
          </Link>

          <Search />
        </div>

        <NavLinks />
      </div>
    </>
  );
}

export default Navbar;
