import cloudinary from "cloudinary"
import GalleryView from './galleryView';
interface MyImage {
    public_id: string,
    tags: string[],
}
export default async function Page({ params }: { params: { pictures: string } }) {
    // console.log(params)
    let res = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${params.pictures}`)
        .sort_by('public_id', 'desc')
        // .max_results(5)
        .with_field("tags")
        .execute()) as { resources: MyImage[] }
    // console.log(res.resources)
    return (
        <>
            <div className='py-4 px-5 '>
                <h1 className="text-3xl font-semibold tracking-tight ">{`Album Name : ${params.pictures}`}</h1>
            </div>
            <div className='columns-4 gap-3 space-y-3 p-3 mx-auto'>
                {
                    res.resources.map((item, i) => {
                        return (<div key={i}>
                            <GalleryView src={item.public_id} tag={item.tags} />
                        </div>)
                    })
                }
            </div>
        </>
    )
}
