import { useState } from "react"
import DownIcon from "../../assets/down-arrow.svg?react"

export function FAQ(){
    return(
        <div id="FAQ" className="flex flex-col items-center">
            <h1 className=' text-xl md:text-[40px]/14 text-center lg:text-start font-semibold md:mt-0 mb-4'>
            Frequently Asked Questions                    </h1>
            
            <p className="text-center text-[13px] sm:text-[16px] sm:w-5/7  w-2/4 md:w-8/13 xl:w-20/25 mb-10 lg:mb-20">
            Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </p>
            <Ques />
        </div>
    )
}

function Ques(){

    const [d,setD] = useState(0)
    return(
        <div className="w-[700px] flex flex-col items-center ">
        <Faq n={1} d={d} set={setD} q={" What is Bookmark? "}  />
        <Faq n={2} d={d} set={setD} q={"How can I request a new browser? "}/>
        <Faq n={3} d={d} set={setD} q={'Is ther a mobile app? '} />
        <Faq n={4} d={d} set={setD} q={'What about other Chromium browsers '} />
        </div>
        
    )
} 

function Faq({q,d,n,set}){
    return (
        <div className="flex flex-col items-center w-full border-b-[1px]  border-[#9f9f9f] mb-6  " onClick={()=>{if(d!==n){set(n)}else{
            set(0)
        }}}>
            <h2 className="flex sm:w-[540px] md:w-[700px] w-[320px] justify-between hover:text-red-400  text-[#7d7d7d] text-xl mb-2 pb-4" >
                {q}
                <DownIcon className={`w-8 h-8 ${d==n?"scale-y-[-1]":""} duration-300`} />
            </h2>
            <p className={`flex ${d==n?"block":"hidden"} md:w-full w-3/7 justify-between text-zinc-400 text-xl text-justify duration-600  pb-9`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore? 
            </p>
        </div>
    )
}