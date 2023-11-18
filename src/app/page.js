"use client"

import React from 'react'



const page = () => {
const [id,setid]=React.useState("")


  return (
    <div className='flex flex-col items-center justify-center mt-2 max-w-[700px] mx-auto p-2 border'>
    <div className='flex flex-col p-2 max-w-[600px] border'>
        <h1>crie seu portfolio com apenas 1 clique</h1>
        <input type="text" value={id} onChange={({target})=>setid(target.value)} className='border max-w-[300px]' placeholder='nome de usuário github'/>
      <a href={`/${id}`} className='bg-slate-800 text-white max-w-[300px] text-center my-2 px-4 py-2'>criar</a>
    </div>
    
    </div>
  )
}

export default page
