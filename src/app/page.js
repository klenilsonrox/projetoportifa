"use client"

import React from 'react'



const page = () => {
const [id,setid]=React.useState("")



  return (
    <div className='flex w-screen h-screen flex-col relative items-center justify-center bg-[#020817]'>
    <div className='flex flex-col p-2 max-w-[600px] animadown'>
        <h1 className='text-white text-center text-[65px] leading-[50px] font-semibold mb-2'>Git<span className='text-[#3B82F6]'>fólio</span> </h1>
        <p className='text-slate-400 mb-2'>crie seu portfolio com apenas 1 clique</p>
        <input type="text" value={id} onChange={({target})=>setid(target.value)} className='border max-w-[300px] py-2 outline-none' placeholder='nome de usuário github'/>
      <a href={`/${id}`} className=' text-white max-w-[300px] text-center my-2 px-4 py-2 bg-[#3B82F6] hover:bg-[#3b83f6ef]'>criar</a>
    </div>
    <footer className='absolute bottom-0 left-0 right-0 h-[50px] flex items-center justify-center'>
      <p className='text-white '>Desenvolvido por <a href="https://www.linkedin.com/in/clenilson-brandao/" target='_blanck' className='text-blue-400'>Klenilson Rox</a></p>
    </footer>
    </div>
  )
}

export default page
