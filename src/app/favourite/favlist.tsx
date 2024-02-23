"use client"
import { useEffect, useState } from 'react'
import FavView from './favView'
import { MyImage } from './page'


export default function Favlist({ resources }: { resources: MyImage[] }) {
    const[initialState,setInitialState]=useState(resources);
    useEffect(()=>{
        setInitialState(resources);
    },[resources])
    return (
        <div className='columns-4 gap-3 space-y-3 p-3 mx-auto'>
            {
                initialState.map((item, i) => {
                    return <div key={i}>
                        <FavView
                            src={item.public_id}
                            tag={item.tags} 
                            fun={(publicId:string)=>{
                                setInitialState((currentState)=>currentState.filter((val)=>val.public_id!==publicId))
                            }}
                            />
                    </div>
                })
            }
        </div>
    )
}
