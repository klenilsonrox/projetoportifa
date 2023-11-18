"use client"
import React from 'react'

const page = ({params}) => {
    const [info,setInfo]=React.useState([])
    const [repo,setRepo]=React.useState("")
   
 
    const buscar = async ()=>{
        const reqInfo = await fetch(`https://api.github.com/users/${params.id}`)
        const dados =await reqInfo.json()
        const reqRepos= await fetch(`https://api.github.com/users/${params.id}/repos`)
        const repoJson = await reqRepos.json()
        setRepo(repoJson)
        setInfo(dados)
       console.log(repoJson)
    }
   
    React.useEffect(()=>{
buscar()
    },[])

  return (
    <div className='flex w-screen max-w-5xl mx-auto  border p-2 mt-2 '>

    <div className='border w-screen max-w-[200px] flex flex-col bg-white p-2'>
    <img src={info.avatar_url} alt="" className='rounded-full' />
    <h1 className='p-2 font-semibold text-[22px]'>{info.name}</h1>
    </div>
<h1 className='text-white'>Projetos</h1>
    <div className='flex gap-2 flex-1 flex-wrap max-h-[600px] w-screen max-w-[800px] overflow-scroll mt-10 p-2'>
        
        {repo && repo.map(item => (
    <div className='bg-slate-200 p-2 w-screen max-w-[800px]'>
    <p className='font-semibold text-[18px]'>{item.name}</p>
        <a href={item.html_url} className='bg-purple-600 px-4 py-1 block max-w-[120px] text-white mt-2'>ver código</a>
    </div>
   ) )}
    </div>
    </div>
  )
}

export default page
