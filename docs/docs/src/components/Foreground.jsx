import React, { useRef } from 'react'
import Card from './Card'
function Foreground()  {

const ref = useRef(null)

    const data = [
        {
            desc: "lorem chorem chorem lorem borem borem Radhe Radhe ",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
        },




        {
            desc: " Radhe Radhe Radhe Radhe Radhe Radhe Radhe Radhe ",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },


    ];

    
    return (
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flexwrap-wrap p-5'>
           {data.map((item , index)=> (
            <Card  data={item} reference={ref}/>
           ))}
        </div>
    )
}

export default Foreground
