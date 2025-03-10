export function Subscribe(){
    return(
        <div className="flex mt-20 flex-col h-[420px] bg-newBlue items-center justify-center w-full text-white">
            <h1 className="uppercase text-lg/10 mb-4">  35,000+ Already Joined    </h1>
            <h1 className="font-bold text-4xl/10 mb-10 w-[500px] text-center">
            Stay up-to-date with what we're doing 
            </h1>
            <div className="gap-4 flex">
                <input placeholder="Enter your email address" className="font-medium text-start bg-white text-gray-700 w-70 px-6 py-3 rounded-xl" />
                <button className="font-bold text-xl bg-red-400 hover:bg-red-400/80  px-8 py-4 rounded-xl" >
                     Contact Us
                </button>
            </div>
        </div>
    )
}