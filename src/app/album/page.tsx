import cloudinary from "cloudinary"
import Folderlist from "./folderlist";


export interface FolderType {
    name: string;
    path: string;
}
export default async function Page() {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: FolderType[]
    };
    // console.log(folders)
    return (
        <div>
            <div className='py-4 px-5'>
                <h1 className="text-3xl font-semibold tracking-tight ">Picture Albums</h1>
            </div>
            {/* folders data */}
            <div className="grid grid-cols-4 py-4 px-5 gap-4">
                {
                    folders.map((item,i)=>{
                        return (
                            <div key={i}>
                                <Folderlist folder={item}/>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}
