import React from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { FaImage } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import ImageComponent from "../../../Utilities/ImageComponent";
export default function AddPost() {
  return (
    <div className="bg-white px-4 pt-3 pb-2 flex flex-col gap-y-7 mb-2">
      <div className="flex items-start">
      <div>
      <div className="w-10 h-10">
        <ImageComponent
          photo={
            "data:image/jpeg;base64,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"
          }
          borderRadius={"50%"}
        />
      </div>
      </div>
      <TextareaAutosize placeholder="Share your thoughts..." className="w-full pl-4 focus:outline-none" minRows={1.5} style={{resize:"none"}}/>
      </div>
      <div className="flex items-center justify-between">
      <div className="flex items-center  gap-x-4">
      <div className="flex items-center cursor-pointer gap-x-1 bg-gray-200 px-2.5 py-0.5 rounded-lg">
        <FaImage size={18} color="gray" />Photo
        </div><div className="flex items-center cursor-pointer gap-x-1 bg-gray-200 px-2.5 py-0.5 rounded-lg">
        <IoVideocam size={18} color="gray" />Video
        </div><div className="flex items-center cursor-pointer gap-x-1 bg-gray-200 px-2.5 py-0.5 rounded-lg">
        <MdEmojiEmotions size={18} color="gray" />Feeling/Activity
        </div>
       </div>
        <div className="w-10 h-10 cursor-pointer rounded-full bg-blue-800 text-white flex justify-center items-center">
        <IoSend size={18}  />
        </div>
      </div>
    </div>
  );
}
