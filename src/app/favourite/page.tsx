
import cloudinary from "cloudinary"
import GalleryView from '../gallery/galleryView';
import Favlist from "./favlist";
export interface MyImage{
    public_id:string,
    tags : string[],
}
export default async function Gallery() {
    let res = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favourite')
        .sort_by('public_id', 'desc')
        // .max_results(5)
        .with_field("tags")
        .execute() as {resources:MyImage[]}
    // console.log(res.resources)
    return (
        <>
        <div className='flex py-4 px-5 justify-between'>
            <h1 className="text-3xl font-semibold tracking-tight ">Favourites</h1>
        </div>
        <Favlist resources={res.resources}/>
        </>
    )
}
