import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext";

export default function Followers() {
  const { followers } = useContext(AuthContext);

  return (
    <>
      <div className="py-2 text-center">
        {followers && followers.length !== 0 ? (
          <p className="text-md">{followers.length}</p>
        ) : (
          "0"
        )}
        <p className="text-md">Followers</p>
      </div>
    </>
  );
}
