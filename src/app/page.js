import React from 'react'

const page = () => {
  return (
    <div className='bg-black h-screen w-sreen'>
    <h1 className='text-center text-white bg-slate-700 py-2'>Root Lyout</h1>
      <div className='flex items-center w-screen h-[96%] justify-center'>
      <div className='text-white flex flex-col items-center'>
        <h1 className='text-[25px]'>Seja muito bem vindo</h1>
        <button className='border border-white py-2 px-6 mt-2'><a href="/blog">Ir para o BLOG</a></button>
      </div>
      </div>
    </div>
  )
}

export default page
