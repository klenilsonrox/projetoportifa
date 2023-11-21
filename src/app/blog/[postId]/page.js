import React from 'react'

const page =async ({params}) => {

const reqPost= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
const postJson = await reqPost.json()

  return (
    <div className='flex items-center w-screen h-screen justify-center p-2'>
    
     <div className='p-2 shadow-lg w-screen max-w-md flex flex-col gap-2 relative'>
     <button className='absolute pb-2 right-0 top-[-35px]'><a href="/" className='text-red-600'>← voltar</a></button>
     <h1 className='text-[23px]  leading-6 font-semibold'>{postJson.title}</h1>
     <p>{postJson.body}</p>
     </div>
    </div>
  )
}

export default page
