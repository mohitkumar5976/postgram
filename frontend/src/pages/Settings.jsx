import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Account from "../components/Settings/Account";
import Communications from "../components/Settings/Communications";
import Messaging from "../components/Settings/Messaging";
import DeleteAccount from "../components/Settings/DeleteAccount";
export default function settings() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start">
        <div className="w-5/6 mt-3">
          <Tabs variant="unstyled" orientation="vertical">
            <TabList className="w-96 border-1 border bg-white">
              <Tab
                _selected={{ color: "white", bg: "blue.500" }}
                className="font-bold"
              >
                Account
              </Tab>

              <Tab
                _selected={{ color: "white", bg: "blue.500" }}
                className="font-bold"
              >
                Messaging
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "blue.400" }}
                className="font-bold"
              >
                Communications
              </Tab>

              <Tab
                _selected={{ color: "white", bg: "blue.400" }}
                className="font-bold"
              >
                Close account
              </Tab>
              <hr className="text-gray-500" />
              <Link to={"/user/profile"} className="text-center py-2.5">
                View Profile
              </Link>
              <div className="border border-t-1 text-gray-600 text-sm">
                <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 p-2">
                  <Link>About</Link> <Link>Settings</Link> <Link>Support</Link>
                  <Link>Help</Link> <Link>Privacy & terms</Link>
                </div>
                <p className="text-center mb-2">@2024 Webestica</p>
              </div>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Account />
              </TabPanel>
              <TabPanel>
                <Messaging />
              </TabPanel>
              <TabPanel>
                <Communications />
              </TabPanel>
              <TabPanel>
                <DeleteAccount/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
}
