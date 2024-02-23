import React from 'react'
import { TabsDemo } from './tabs'

export default function Page({searchParams: { publicId}}:{searchParams: { publicId:string}}) {
    // console.log(publicId)
    return (
        <>
            <div className='flex py-4 px-5 justify-between'>
                <h1 className="text-3xl font-semibold tracking-tight ">Edit Picture</h1>
            </div>
            <TabsDemo src={publicId}/>
        </>
    )
}
