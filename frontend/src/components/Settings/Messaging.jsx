import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

export default function Communications() {
  return (
    <div>
      <div className="bg-white p-4">
        <span className="font-bold text-xl">Who can connect with you</span>
        <p className="text-gray-500 text-sm mb-3 mt-1">
          He moonlights difficult engrossed it, sportsmen. Interested has all
          Devonshire difficulty gay assistance joy. Unaffected at ye of
          compliment alteration to.
        </p>
        <div>
          <Stack direction="row" justifyContent={"space-between"} mb={3}>
            <span className="font-bold text-gray-700">
              Enable message request notifications
            </span>
            <Switch size="sm" />
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} mb={3}>
            <span className="font-bold text-gray-700">
              Invitations from your network
            </span>
            <Switch size="sm" />
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} mb={3}>
            <span className="font-bold text-gray-700">Reply to comments</span>
            <Switch size="sm" />
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} mb={3}>
            <span className="font-bold text-gray-700">
              Allow connections to add you on group
            </span>
            <Switch size="sm" />
          </Stack>
        </div>

        <div className="flex justify-end">
          <Button size={"sm"} colorScheme="blue">
            Save changes
          </Button>
        </div>
      </div>
      <div className="bg-white p-4">
        <span className="font-bold text-xl">Messaging experience</span>
        <p className="text-gray-500 text-sm mb-3 mt-1 ">
          Arrived off she elderly beloved him affixed noisier yet.
        </p>
        <div>
          <Stack direction="row" justifyContent={"space-between"} mb={3}>
            <span className="font-bold text-gray-700">
              Read receipts and typing indicators
            </span>
            <button className="bg-blue-100 text-blue-600 py-1 px-2 flex items-center gap-x-1">
              <FaRegEdit size={18} /> Change
            </button>
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} mb={3}>
            <span className="font-bold text-gray-700">Message suggestions</span>
            <button className="bg-blue-100 text-blue-600 py-1 px-2 flex items-center gap-x-1">
              <FaRegEdit size={18} /> Change
            </button>
          </Stack>
        </div>

        <div className="flex justify-end">
          <Button size={"sm"} colorScheme="blue">
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
}
