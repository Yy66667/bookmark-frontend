import { motion } from "framer-motion";
import { useState } from "react";

const BurgerMenu = ({isOpen, setIsOpen}) => {

    return (
        <div className="flex flex-col md:hidden   items-center justify-center ">
            <div
                className="w-6 h-5 flex flex-col justify-between cursor-pointer z-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div
                    className={`w-full h-[3px] ${isOpen?"bg-white":"bg-black"} rounded`}
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className={`w-full h-[3px] ${isOpen?"bg-white":"bg-black"} rounded`}
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className={`w-full h-[3px] ${isOpen?"bg-white":"bg-black"} rounded`}
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {isOpen && (
                <motion.div
                    className="fixed top-0 left-0 z-60 w-screen h-screen bg-[#252B46]/90 flex items-center justify-center "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <nav className=" text-white flex flex-col w-full items-center text-2xl uppercase space-y-4  ">
                        <a href="#Features" className="flex justify-center hover:text-red-500 border-b-1 border-gray-400  pb-4 w-52/54">Features</a>
                        <a href="#Download" className="flex justify-center hover:text-red-500 border-b-1 border-gray-400 pb-4 w-52/54">Download</a>
                        <a href="#FAQ" className="flex justify-center hover:text-red-500 border-b-1 border-gray-400 pb-4 w-52/54">FAQ</a>
                        <a href="#Home" className="flex justify-center hover:text-red-500 pb-4 w-52/54"justify-center >LOGIN</a>
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default BurgerMenu;
