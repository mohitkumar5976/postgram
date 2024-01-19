import React, { useContext } from "react";
import MenuList from "./MenuList";
import { RxCross1 } from "react-icons/rx";
import ImageComponent from "../../../Utilities/ImageComponent";
import { AuthContext } from "../../../AuthContext";

export default function MenuSidebar({ visible, setVisible }) {
  const { userInfo } = useContext(AuthContext);
  return (
    <>
      <div className={`absolute left-0 top-0 bg-white z-10 w-1/2 p-2 ${visible?"block":"hidden"}`}>
        <RxCross1
          size={18}
          className="float-right"
          onClick={() => setVisible(!visible)}
        />

        <div className="w-16 h-16 clear-right mx-auto">
          <ImageComponent photo={`${userInfo.photo}`} borderRadius={"50%"} />
        </div>

        <p className="text-center mt-2 font-bold">Mohit Kumar</p>
        <MenuList />
      </div>
    </>
  );
}
