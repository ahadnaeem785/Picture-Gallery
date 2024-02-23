"use client"
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { CldImage } from 'next-cloudinary';
import AddTags from "../gallery/action";
import { useState } from "react";

export default function FavView({ src, tag ,fun}: { src: string, tag: string[],fun:any }) {
  const [fav, setFav] = useState(tag.includes("favourite"))
  return (
    <div className="relative">
      <CldImage
        className='rounded-sm'
        width="600"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      <div
        onClick={() => {
          fun(src)
          AddTags(src, fav);
          setFav(!fav)
        }}
        className="absolute top-1 right-1">
        {fav ?
          <IoMdHeart className="w-7 h-7 cursor-pointer text-red-500" /> :
          <IoIosHeartEmpty className="w-7 h-7 cursor-pointer text-white hover:text-red-500 duration-200" />}
      </div>
    </div>
  )
}
