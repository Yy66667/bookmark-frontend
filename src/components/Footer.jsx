import LOGOwhite from '../assets/logo-bookmark-footer.svg?react'
import Fb from '../assets/facebook.svg?react'
import Tw from '../assets/twitter.svg?react'
import { SectionSetter } from './Navbar'

export function Footer(){
    return (
        <footer className='bg-[#252b46] flex w-full justify-center px-20 h-[300px] '>
            <div className='max-w-[1600px] flex items-center w-full'>

            <div className=' flex sm:items-center sm:flex-row gap-20 flex-col text-lg  w-full'>
            <LOGOwhite />
            <div className='flex sm:flex-row flex-col  uppercase gap-8 text-[#9194a1]'>
            <SectionSetter name={"Features"} url={"#Features"} />
            <SectionSetter name={"Download"} url={"#Download"} />
            <SectionSetter name={"FAQ"} url={"#FAQ"} />
            </div>
            </div>
            <div className='flex px-20 items-center gap-10 text-white'>

            <Fb className=' hover:text-red-400' />
            <Tw className=' hover:text-red-400'/>
            </div>
            </div>
        </footer>
    )
}