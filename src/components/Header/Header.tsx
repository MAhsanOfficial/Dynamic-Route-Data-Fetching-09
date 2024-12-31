import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>

<nav className="flex bg-red-500 h-16 justify-between   mt-10 rounded-[50%] hover:scale-110 ease-in-out transition-all duration-300 ">
    <ul className="justify-between flex items-center cursor-pointer">
        <Link href={'/Client'}><li className="hover:text-yellow-500 text-3xl font-semibold font-mono ml-20 hover:underline ">Client Side</li></Link>
       <Link href={'/'}> <li className='font-bold text-4xl font-serif ml-52 hover:underline'>***Data Fetching***</li></Link>
        <Link href={'/Server'}><li className='hover:text-yellow-500 text-3xl font-semibold font-mono ml-36 hover:underline'>Server Side</li></Link>
    </ul>
</nav>



<div className="w-full h-screen font-sans flex justify-center items-center">
      <div
        id="shadow"
        className="rounded-xl cursor-pointer hover:scale-110 ease-in-out  transition-all duration-300 h-[320px]  bg-yellow-500 flex items-center flex-col px-2 max:w-[350px] w-[400px] sm:w-[500px]  py-10"
      >
        <h1 className='text-2xl underline font-mono font-bold '>KR DO FIRE🔥</h1>
        <div className="w-full flex max:flex-col max:items-center text-center  flex-row items-center justify-between px-1 sm:px-10 pt-8">
         <Link href={'/Client'}>
         <button
         
            className="w-[180px] h-[60px] rounded-[10px] text-[14px] sm:text-[16px] hover:text-black hover:bg-amber-600 p-2 bg-black text-white"
          >
             Client Side Fetching Data
          </button>
         </Link>
         <Link href={'/Server'}>
         <button
         
            className="max:mt-3 w-[180px] h-[60px] text-[14px] sm:text-[16px] rounded-[10px] hover:text-black hover:bg-amber-600 p-2 bg-black text-white"
          >
             Server Side Fetching Data
          </button>
         </Link>

        </div>
       <div className="pt-12 font-mono font-bold text-2xl">Zaror Try Karein</div>
        </div>
        </div>

    </div>
  )
}

export default Header