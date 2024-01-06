import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ImageComponent from "./ImageComponent";

function Comments({ handleClose, data }) {
  
  return (
    <>
      <div className="absolute top-0 bg-white h-100 w-100">
        <div className="flex justify-between items-center p-3">
          <p className="text-xl">All Comments</p>
          <span onClick={() => handleClose()} className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>

        <ul className=" overflow-auto h-5/6">
          {data.comments && data.comments.length !== 0 ? (
            data.comments.map((data) => {
              return (
                <li className="py-2  bg-gray-300 my-2">
                  <div className="flex gap-2  justify-between items-center p-2">
                    <div className="flex items-center gap-2">
                      <div className="w-full">
                        <div className="w-10 h-10">
                          <ImageComponent photo={data.userId.photo} borderRadius={'50%'}/>
                        </div>
                      </div>
                      <div className="w-5/6">
                        <p className="text-md font-bold ">{data.userId.name}</p>
                        <p className="text-[12px]">{data.message}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p className="text-center font-bold text-lg">No comments</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default Comments;
