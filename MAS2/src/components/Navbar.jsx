import { useState } from 'react'
import LOGO from '../assets/logo-bookmark.svg?react'
import LOGOwhite from '../assets/logo-bookmark-footer.svg?react'
import BurgerMenu from '../assets/BurgerMenu'
import { HashLink as Link } from "react-router-hash-link";

export function Navbar(){
    const [sideBar, setSideBar] = useState(false)

    return(
        <div className="flex justify-between gap-18 items-center w-full text-[17px] font-[arial]  py-12 max-w-[1600px] 2xl:px-26 lg:px-56 md:px-10 sm:px-32 px-[5%] ">
            <a href='#Home' className='z-80'>
                <span className='block md:hidden'>
                {sideBar?<LOGOwhite />:<LOGO />}</span>
                <span className='hidden md:block '><LOGO className='w-52 h-8' /></span>
                
            </a>
            <div className='hidden md:flex items-center uppercase sm:gap-10  text-[#9194a1]'>
            <SectionSetter name={"Features"} url={"#Features"} />
            <SectionSetter name={"Download"} url={"#Download"} />
            <SectionSetter name={"FAQ"} url={"#FAQ"} />
            <a className='bg-[#fa5757] text-white px-8 py-2 rounded-lg hover:text-[#fa5757] ring-2 hover:bg-white '>Login</a>
            </div>
            <BurgerMenu isOpen={sideBar} setIsOpen={setSideBar} />
        </div>
    )
}

export function SectionSetter({name, url}){
    return(
        <Link 
        to={`#${name}`} 
        smooth  className='hover:text-red-400' href={url}>{name}</Link>
    )
}