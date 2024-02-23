import GalleryUpload from './galleryUpload'
import cloudinary from "cloudinary"
import GalleryView from './galleryView';
interface MyImage{
    public_id:string,
    tags : string[],
}
export default async function Gallery() {
    let res = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        // .max_results(5)
        .with_field("tags")
        .execute() as {resources:MyImage[]}
    // console.log(res.resources)
    return (
        <>
        <div className='flex py-4 px-5 justify-between'>
            <h1 className="text-3xl font-semibold tracking-tight ">Gallery</h1>
            <GalleryUpload />
        </div>
        <div className='columns-4 gap-3 space-y-3 p-3 mx-auto'>
            {
                res.resources.map((item,i)=>{
                    return <div key={i} className='break-inside-avoid'>
                        <GalleryView src={item.public_id} tag={item.tags}/>
                    </div>
                })
            }
        </div>
        </>
    )
}
