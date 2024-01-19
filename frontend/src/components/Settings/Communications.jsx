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
import { Radio, RadioGroup } from "@chakra-ui/react";
export default function Communications() {
  const [value, setValue] = React.useState("1");
  return (
    <div className="bg-white p-4">
      <span className="font-bold text-xl">Who can connect with you</span>
      <p className="text-gray-500 text-sm mb-3">
        He moonlights difficult engrossed it, sportsmen. Interested has all
        Devonshire difficulty gay assistance joy. Unaffected at ye of compliment
        alteration to.
      </p>
      <Accordion className="mb-3" allowToggle>
        <AccordionItem className="py-2">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-gray-500 font-semibold"
              >
                Connection request
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="1">First</Radio>
                <span className="text-gray-500">Everyone on social (recommended)</span>
              </Stack>
              <Stack direction="row">
                <Radio value="2">First</Radio>
                <span className="text-gray-500">Only people who know your email address</span>
              </Stack>
              <Stack direction="row">
                <Radio value="3">First</Radio>
                <span className="text-gray-500">
                  Only people who appear in your mutual connection list
                </span>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className="py-2">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-gray-500 font-semibold"
              >
                Who can message you
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack direction="row" justifyContent={"space-between"} mb={3}>
              <span className="text-gray-500">Enable message request notifications</span>
              <Switch size="sm" />
            </Stack>
            <Stack direction="row" justifyContent={"space-between"} mb={3}>
              <span className="text-gray-500">Allow connections to add you on group</span>
              <Switch size="sm" />
            </Stack>
           
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className="py-2">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-gray-500 font-semibold"
              >
                Who can message you
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack direction="row" justifyContent={"space-between"} mb={3}>
              <span className="text-gray-500">Allow search engines to show your profile?</span>
              <Switch size="sm" />
            </Stack>
            <Stack direction="row" justifyContent={"space-between"} mb={3}>
              <span className="text-gray-500">Allow people to search by your email address?</span>
              <Switch size="sm" />
            </Stack>
           
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
   
      <div className="flex justify-end">
        <Button size={"sm"} colorScheme="blue">
          Save changes
        </Button>
      </div>
    </div>
  );
}
