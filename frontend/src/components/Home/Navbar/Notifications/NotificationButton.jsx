import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { BiSolidBell } from "react-icons/bi";
import NotificationComponent from "./NotificationComponent";
export default function NotificationButton() {
  return (
    <>
      <Menu>
        <div className="bg-slate-200 flex justify-center w-8 h-8 items-center rounded-full text-gray-500 hover:text-gray-800">
        <MenuButton >
          <BiSolidBell size={16} />
        </MenuButton>
        </div>
        <MenuList>
          <NotificationComponent/>
        </MenuList>
      </Menu>
    </>
  );
}
