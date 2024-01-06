import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext";

export default function Following() {
  const {following} = useContext(AuthContext)
  return (
    <div className="py-2 text-center">
     {following && following.length !== 0 ? (
          <p className="text-md">{following.length}</p>
        ) : (
          "0"
        )}
      <p className="text-md">Following</p>
    </div>
  );
}
