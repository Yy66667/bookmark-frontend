import { useScroll } from 'framer-motion'
import HomeImg from '../../assets/home.svg'
import Feature1 from '../../assets/features01.svg'
import Feature2 from '../../assets/features02.svg'
import Feature3 from '../../assets/features03.svg'
import { useState } from 'react'


export function Features(){
    const [spec, setSpec] = useState(0);
    return(
        <section id="Features">
            <div className="flex items-center justify-center flex-col font-roboto w-full font-[arial] max-w-[1600px] 2xl:px-26 lg:px-56 md:px-10 sm:px-32 px-[5%] ">
                <div className='w-full flex-col mt-10 md:mt-0  items-center flex lg:justify-start justify-center'>
                    <h1 className='lg:text-[34px]/15 text-xl md:text-[30px]/14 text-center lg:text-start font-semibold md:mt-17 mb-4'>
                       Features
                    </h1>
                    <p className='text-[gray] text-center lg:text-lg xl:text-[18px] sm:w-5/7  w-3/4 md:w-4/6 xl:w-10/25'>
                        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go. 
                    </p>

                    <SpecificInfoBar spec={spec} setSpec={setSpec} />

                    <div className='mt-10 gap-4 flex'>
                        <SpecificInfoComps spec={spec} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function CommonButton({text,type}){
    return(
        <button className={`w-[130px] rounded-lg cursor-pointer text-md font-semibold py-4  ${type?"text-black bg-[#d1d5db] hover:ring-2 hover:text-slate-700 hover:bg-white":"text-white bg-newBlue hover:ring-2 hover:text-newBlue hover:bg-white"}`}>
            {text}
        </button>
    )
}

function SpecificInfoBar({spec, setSpec}){
    return (

        <div className='flex flex-col  md:flex-row mt-16 items-center px-2'>
        <SPcom name={"Simple Bookmarking "} spec={spec} setSpec={setSpec} num={1} />
        
        <SPcom name={"Speedy Searching "} spec={spec} setSpec={setSpec} num={2}/>
       
        <SPcom name={"Easy Sharing"} spec={spec} setSpec={setSpec} num={3}/>
        </div>
    )
}

function SPcom({name, spec , setSpec, num}){
    return(
        <div className='border-gray-200 px-9 border-b-1 flex items-center justify-center mb-6 '>

            <button className={`${spec==num?"border-b-4  pb-8":"pb-8"} hover:text-red-400  text-[#4d4d4d]  border-red-400 w-full`} onClick={()=>setSpec(num)}>
                        {name}
                    </button>
        </div>
    )
}

function SpecificInfoComps({spec}){
    const text = [{
        title:"Bookmark in one click ",
        description:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. "
    },{
        title:"Intelligent search ",
        description:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. "
    },{
        title:" Share your bookmarks",
        description:"Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button. "
    }]

    let finalOut = {};

    function now (){
            if(spec==1){
                finalOut = text[0]
                finalOut.img = Feature1
                return finalOut
            }else if(spec==2){
                finalOut = text[1]
                finalOut.img = Feature2
                return finalOut
            }else if(spec==3){
                finalOut = text[2]
                finalOut.img = Feature3
                return finalOut
            }else {
                finalOut = text[0]
                finalOut.img = Feature1
                return finalOut
            }
        }
    now()
    
    return(
        <div className='flex lg:flex-row flex-col items-center font-roboto w-full font-[arial]  max-w-[1600px] 2xl:px-26 lg:px-56 relative'>
        
           
            <div className='bg-newBlue lg:block hidden w-[2000px] h-70 absolute top-38 right-[830px] rounded-r-[150px] ' />  
            
            <div className='w-full z-40 flex flex-col xl:items-start items-center md:justify-start xl:pr-24 pr-0  '>
            <img className=' ' src={finalOut.img} />
            </div>
            <div className='flex  pl-6 flex-col w-full'>
                <h1 className='lg:text-[28px]/9  text-[24px]/9 lg:text-start font-semibold  xl:mb-8 mt-20 lg:mt-0 mb-5'>
                    {finalOut.title}
                </h1>
                <p className='text-[#9ca3af] lg:text-md text-[14px] lg:w-14/15 xl:w-7/9 lg:text-start lg:text-center xl:mb-14  mb-7'>
                    {finalOut.description}
                </p>
                <CommonButton text={"More Info"} type={false} />
            </div>
        </div>
    )
}