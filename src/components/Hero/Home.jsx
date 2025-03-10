import HomeImg from '../../assets/home.svg'

export function Home(){
    return(
        <section id="Home">
            <div className="flex lg:justify-between justify-center flex-col-reverse lg:flex-row font-roboto w-full font-[arial]  py-6 max-w-[1600px] 2xl:px-26 lg:px-56 md:px-10 sm:px-32 px-[5%] ">
                <div className='w-full flex-col lg:items-start items-center flex lg:justify-start justify-center'>
                    <h1 className='lg:text-[54px]/15 text-xl md:text-[30px]/14 text-center lg:text-start font-semibold md:mt-17 mb-10'>
                        A Simple Bookmark Manager
                    </h1>
                    <p className='text-[#9ca3af] lg:text-start text-center lg:text-xl xl:text-2xl w-5/6 lg:w-full xl:w-5/7'>
                       A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free. 
                    </p>
                    <div className='mt-10 gap-4 flex-col sm:flex-row flex'>
                    <CommonButton text={"Get It On Chrome"} type={false} />
                    <CommonButton text={"Get It On Firefox"} type={true} />
                    </div>
                </div>
                <div className='w-full flex items-center justify-center lg:block mt-0 md:mt-20 lg:mt-0  h-80 '>
                    <div className='relative '>
                        <img className='z-50  lg:absolute relative lg:translate-y-25 2xl:translate-y-0 ' src={HomeImg} />
                   
                    <div className='bg-newBlue lg:block hidden w-[2000px] h-76 absolute top-52 left-50 rounded-l-[150px] z-10' />  
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export function CommonButton({text,type}){
    return(
        <button className={`w-[185px] rounded cursor-pointer text-md font-semibold px-3 py-5  ${type?"text-black bg-[#d1d5db] hover:ring-2 hover:text-slate-700 hover:bg-white":"text-white bg-newBlue hover:ring-2 hover:text-newBlue hover:bg-white"}`}>
            {text}
        </button>
    )
}