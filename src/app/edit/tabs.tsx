"use client"
import { CldImage } from 'next-cloudinary';
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo({src}:{src:string}) {
    return (
        <Tabs defaultValue="account" className="w-full py-4 px-5 justify-between">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="original">Original</TabsTrigger>
                <TabsTrigger value="blur">Blur</TabsTrigger>
                <TabsTrigger value="gray">Gray Sacle</TabsTrigger>
                <TabsTrigger value="oil">Oil Paint</TabsTrigger>
            </TabsList>
            {/* oroginal */}
            <TabsContent value="original">
                <div className='flex mt-8 justify-center'>
                    <CldImage
                        className='rounded-sm'
                        width="800"
                        height="800"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    // blur={800}
                    />
                </div>
            </TabsContent>
            {/* blur */}
            <TabsContent value="blur">
            <div className='flex mt-8 justify-center'>
                    <CldImage
                        className='rounded-sm'
                        width="800"
                        height="800"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    blur={800}
                    />
                </div>
            </TabsContent>
            {/* grayscale */}
            <TabsContent value="gray">
            <div className='flex mt-8 justify-center'>
                    <CldImage
                        className='rounded-sm'
                        width="800"
                        height="800"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        grayscale={true}
                    />
                </div>
            </TabsContent>
            {/* oilPaint */}
            <TabsContent value="oil">
            <div className='flex mt-8 justify-center'>
                    <CldImage
                        className='rounded-sm'
                        width="800"
                        height="800"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        oilPaint={true}
                    />
                </div>
            </TabsContent>
        </Tabs>
    )
}




{/* <CldImage
className='rounded-sm'
width="400"
height="400"
src={src}
sizes="100vw"
alt="Description of my image"
// blur={800}
/> */}