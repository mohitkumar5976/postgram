import React from "react";
import ReelCard from "./ReelCard";

export default function Reels() {
  return (
    <ul id="reels-scrollbar" className="flex flex-col items-center max-h-screen overflow-y-scroll">
      <li>
        <ReelCard />
      </li>
      <li>
        <ReelCard />
      </li>
      <li>
        <ReelCard />
      </li>
    </ul>
  );
}
