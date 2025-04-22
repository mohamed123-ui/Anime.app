import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.svg"
import anime from "../../../public/anime.webp"

export default function Header() {
  return (
  <div className="">
      <div className='container hedaer p-3 bg-[#7777]'>
        <div className="layer">
        <div className='flex items-center justify-between gap-5'>
<div className='w-[100%]  md:w-1/2'>
    <div>
        <Image src={logo} width={80} height={80} alt='logo' />
        <h2 className='text-4xl font-bold mt-2 w-[70%]'>
        Explore The <span className='text-red-500'> Diverse Realms</span> of Anime Magic
        </h2>
    </div>
</div>
<div className='w-[100%]  md:w-1/2'>
    <Image  src={ anime} width={400} height={400} alt='anime' />
</div>
        </div>
        </div>
      
    </div>
  </div>
  )
}
