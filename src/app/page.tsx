"use client"
import { CldUploadButton,CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage {
  event: "success";
  info: { public_id: string };
}
export default function Home() {
  //usestate to change the image 
  const [imageId, setImageId] = useState("cld-sample-4")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* upload button */}
      <CldUploadButton
        uploadPreset="ffgbc2wp"
        onUpload={(results) => {
          let res = results as UploadImage;
          setImageId(res.info.public_id)

        }} />
      {/* view image */}
      <CldImage
        width="600"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />


    </main>
  )
}
