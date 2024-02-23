"use client"
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { CldImage } from 'next-cloudinary';
import AddTags from "./action";
import { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import Link from "next/link";

export default function GalleryView({ src, tag }: { src: string, tag: string[] }) {
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
      {/* heart icon for favourite */}
      <div
        onClick={() => {
          AddTags(src, fav);
          setFav(!fav)
        }}
        className="absolute top-1 right-1">
        {fav ?
          <IoMdHeart className="w-7 h-7 cursor-pointer text-red-500" /> :
          <IoIosHeartEmpty className="w-7 h-7 cursor-pointer text-white hover:text-red-500 duration-200" />}
      </div>
      {/* edit icon for edit page */}
      <div className="absolute top-1 left-1">
        <Link href={`/edit?publicId=${src}`}>
          <RiEditLine className="w-7 h-7 cursor-pointer text-white hover:text-red-500" />
        </Link>
      </div>
    </div>
  )
}
