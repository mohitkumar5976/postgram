import React, { useContext } from "react";
import ImageComponent from "../../../Utilities/ImageComponent";
import { AuthContext } from "../../../AuthContext";

function Notifications() {
  const { userInfo } = useContext(AuthContext);
  
  return (
    <>
      <div className="card p-4 h-3/4">
        <ul className=" overflow-auto h-5/6">
          {userInfo.Notifications && userInfo.Notifications.length !== 0
            ? userInfo.Notifications.map((data) => {
                return (
                  <li>
                    <div className="flex gap-2  items-center  ">
                      <div className="w-10 h-10 ">
                        <ImageComponent photo={data.photo} />
                      </div>
                      <p className="text-md ">{data.name} followed you.</p>
                    </div>
                  </li>
                );
              })
            : "No Notifications"}
        </ul>
      </div>
    </>
  );
}

export default Notifications;
