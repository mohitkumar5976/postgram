import { Button } from "@chakra-ui/react";
import React from "react";

export default function DeleteAccount() {
  return (
    <div>
      <div>
        <div className="bg-white p-4">
          <span className="font-bold text-xl">Delete account</span>
          <p className="text-gray-500 text-sm mb-3 mt-1">
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to.
          </p>
          <div className="mb-4">
            <span className="font-bold text-lg">Before you go...</span>
            <ul style={{ listStyle: "circle" }} className="pl-8 pt-2">
              <li>Take a backup of your data Here</li>
              <li>If you delete your account, you will lose your all data.</li>
            </ul>
          </div>
          <div className="flex gap-x-2 mb-2">
            <input type="checkbox" />
            <span>Yes, I'd like to delete my account</span>
          </div>

          <Button size={"sm"} colorScheme="red">
            Delete my account
          </Button>
        </div>
      </div>
    </div>
  );
}
