"use client"
import React from 'react'

const page = ({params}) => {
    const [info,setInfo]=React.useState([])
    const [repo,setRepo]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [menu,setMenu]=React.useState(false)

    function openMenu(){
        setMenu(!menu)
    }
   
 
    const buscar = async ()=>{
        setLoading(true)
        const reqInfo = await fetch(`https://api.github.com/users/${params.id}`)
        const dados =await reqInfo.json()
        const reqRepos= await fetch(`https://api.github.com/users/${params.id}/repos`)
        const repoJson = await reqRepos.json()
        setLoading(false)
        setRepo(repoJson)
        setInfo(dados)
       console.log(repoJson)
    }
   
    React.useEffect(()=>{
buscar()
    },[])

  return (
    <div className='flex w-screen flex-col  mx-auto  bg-[#020817] relative '>
   {loading &&  <div className='w-screen h-screen text-white absolute right-0 top-0 bottom-0 flex items-center justify-center bg-black/60'>
        <div className='border-4 border-r-transparent border-blue-400  w-[40px] h-[40px] animate-spin rounded-full'>
        </div>
    </div>}
    <div className='bg-[#020817]'>
        <div  className='border-b border-gray-600 w-screen h-[70px] flex items-center'>
        <header className='w-screen max-w-5xl mx-auto flex justify-between items-center relative'>
        <button onClick={openMenu} className='btn menu absolute right-4 top-0 lg:hidden'><span className={`text-white ${menu ? "ativo":""} hamburguer`}></span></button>
            <div className='flex text-white gap-[5px] text-[22px] ml-[10px]'><p>Meu </p> <span className='text-[#3B82F6] '>Porfólio</span></div>
            <nav className='text-white'>
                <ul className={`flex gap-4 flex-col transition-all lg:flex-row absolute lg:static items-center top-[52px] left-0 bg-slate-800 lg:bg-[#020817] ${menu ? "h-screen":"h-[0px]"} overflow-hidden md:w-auto md:h-auto w-screen text-white`}>
                    <li><a href="">Home</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                </ul>
            </nav>
        </header>
        </div>

        <section className='text-white w-screen flex max-w-3xl flex-col lg:flex-row mx-auto p-4 justify-between mb-4 items-center mt-10 h-screen max-h-[550px] lg:max-h-[700px]'>
            <div className='flex flex-col animaleft'>
                <p className='text-gray'>Olá, eu me chamo</p>
                <h1 className='text-[40px] font-bold'>{info.name}</h1>
                <div>
                   <p> Principais linguagens</p>
                   <div className='mt-4'>
                    <a href={`https://github.com/${info.login}`} className='bg-[#3576DF] hover:bg-[#245bb3] transition-all px-4 py-2 rounded-md '>Entre em contato</a>
                    
                   </div>
                </div>
            </div>
            <div className='animaRight order-1'>
                <img src={info.avatar_url} alt="foto perfil" className='rounded-full max-w-[240px] lg:max-w-[300px] border-2 border-blue-500' />
            </div>
        </section>

        <div className='w-screen max-w-5xl mx-auto p-2'>

    <div className='flex justify-center gap-2 text-[25px] font-semibold'>
        <p className='text-white'>Meus </p> <p className='text-[#3576DF]'>Projetos</p>
    </div>

<div className='w-screen max-w-5xl mx-auto p-4 flex flex-wrap items-center justify-center gap-2 mt-2' id='projetos'>
    {repo.map((item,index)=> <div className='border  w-screen max-w-[300px] lg:max-w-[300px] p-6 hover:border-2 transition-all hover:border-blue-600 rounded-md flex flex-col gap-2 animadown' key={index}>
        <h2 className='text-white text-[20px]'>{item.name}</h2>
        <a href={item.html_url} className='bg-[#182334] text-white mt-4 py-2 px-6 w-[130px] rounded-md' target='_blanck'>Repositório</a>
        
    </div> )}
</div>

        </div>

    </div>
    <footer className='flex w-screen items-center justify-center bg-[#3B82F6] h-[60px] mt-10 '><p className='text-white'>© Todos os direitos reservados</p></footer>
    </div>
  )
}

export default page
