"use client"

import React from 'react'



const page = () => {
const [id,setid]=React.useState("")


  return (
    <div className='flex flex-col max-w-[1000px]'>
    <input type="text" value={id} onChange={({target})=>setid(target.value)} className='border'/>
      <a href={`/${id}`} className='bg-slate-800 text-white max-w-[200px] text-center my-2 px-4 py-2'>criar</a>
    </div>
  )
}

export default page
