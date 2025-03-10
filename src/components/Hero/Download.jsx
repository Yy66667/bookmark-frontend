import Chrome from '../../assets/chrome.svg'
import Firefox from '../../assets/firefox.svg'
import Opera from '../../assets/opera.svg'


export function Download(){
    return(
        <section id="Download">
            <div className="flex mt-12 items-center justify-center flex-col font-roboto w-full font-[arial] max-w-[1600px] 2xl:px-26 lg:px-56 md:px-10 sm:px-32 px-[5%] ">
                <div className='w-full flex-col  items-center flex lg:justify-start justify-center'>
                    <h1 className='lg:text-[34px]/15 text-xl md:text-[30px]/14 text-center lg:text-start font-semibold md:mt-17 mb-4'>
                        Download the extension 
                    </h1>
                    <p className='text-[gray] text-center lg:text-lg xl:text-[17px] w-3/4 md:w-4/6 lg:w-full xl:w-5/8'>
                    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.  
                    </p>

                    <Extensions />

                </div>
            </div>
        </section>
    )
}


export function CommonButton({text,type}){
    return(
        <button className={`md:w-[260px] sm:w-50 w-70 rounded-lg cursor-pointer text-md  py-4 ${type?"text-black bg-[#d1d5db] hover:ring-2 hover:text-slate-700 hover:bg-white":"text-white bg-newBlue hover:ring-2 hover:text-newBlue hover:bg-white "}`}>
            {text}
        </button>
    )
}

function Extensions(){
    return(
        <div className='flex flex-col sm:flex-row  items-center justify-center gap-6 mt-10 md:mt-42'>
            <Cards name={" Chrome"} ver={" 62"} lol={Chrome}/>
            <Cards name={" Firefox"} ver={" 55"} lol={Firefox} />
            <Cards name={" Opera"} ver={" 46"} lol={Opera}/>
        </div>
    )
}

function Cards({name, ver, lol,}){
    return(
        <div className={`flex flex-col md:w-80 sm:w-60 w-80 shadow-xl h-90 items-center rounded-xl mb-20 justify-center`}>
            <div className='mb-10'>
                <img src={lol} />
            </div>
            <h1 className='font-semibold text-lg  mb-2'>
                Add to {name}
            </h1>
            <h2 className='py-2 text-[#8d8d8d]  '>
                Minimum version {ver}
            </h2>
            <div className=' px-20 bg-[length:18px_18px] bg-dot w-full h-5 mb-5'></div>
            <CommonButton text={"Add & Install Extension"} />
        </div>
    )
}