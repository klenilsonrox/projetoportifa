"use client"
import React from 'react'



const page =async () => {

    const reqBlog = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const dados = await reqBlog.json()


  return (
    <div className=' w-screen flex flex-col gap-2  max-w-lg mx-auto p-2'>
      {dados.map(({title,id,body})=> <div className='bg-slate-200 p-2'>
    <h1 className='font-semibold text-[22px]'>{title}</h1>
    <p>{body}</p>
    <button className='mt-2 bg-purple-600 px-6 py-2 text-white'><a href={`blog/${id}`}>ver mais</a></button>
      </div> 
      )}
    </div>
  )
}

export default page
