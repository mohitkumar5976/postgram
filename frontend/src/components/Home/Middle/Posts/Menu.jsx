import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { FaEllipsisVertical } from "react-icons/fa6";
export default function PostMenuButton() {
  return (
    <Menu orientation="vertical">
      <MenuButton>
        <FaEllipsisVertical size={20} />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}
