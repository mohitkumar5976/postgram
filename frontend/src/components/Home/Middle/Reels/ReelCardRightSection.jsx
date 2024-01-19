import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

export default function ReelCardRightSection() {
    const [heart,setHeart] = useState(false)

    const handleHeart =()=>{
        if(heart){
            setHeart(!heart)
        }else{
            setHeart(!heart)
        }
       
    }
  return (
    <div
      className={`z-10 absolute p-2 bottom-1 right-0 flex flex-col gap-y-6`}
    >
     {
        heart ? <div onClick={handleHeart} className="flex flex-col gap-y-2 text-white cursor-pointer">
        <FaHeart size={30} color="red"/>
        <span>29.5k</span>
      </div>: <div onDoubleClick={handleHeart} className="flex flex-col gap-y-2 text-white cursor-pointer">
        <FaRegHeart size={30} />
        <span>29.5k</span>
      </div>
     }
      <div className="flex flex-col gap-y-2  text-white cursor-pointer">
        <BiCommentDetail size={30} />
        <span>43.8k</span>
      </div>
      <div className="flex flex-col gap-y-2  text-white cursor-pointer">
        <FaShare size={30} />
        <span>Share</span>
      </div>
    </div>
  );
}
