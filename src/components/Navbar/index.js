import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleNav = () => {
        setOpen(!open)
    }

    return (
        <div className="bg-white sticky top-0 z-40 shadow-md">
            <div className="mx-auto max-w-[1242px] flex justify-between items-center h-16 text-[#2d2e32] font-sans text-lg font-bold lg:px-3 lgx:px-0">
                <div className="hidden lg:flex">
                    <a href="#Home" className="py-5">
                        Aliev.dev
                    </a>
                </div>
                <ul className="hidden lg:flex">
                    <li className="p-5">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="p-5">
                        <a href="#About">About</a>
                    </li>
                    <li className="p-5">
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className="p-5">
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
                <div className="ml-4 lg:hidden">Aliev.dev</div>
                <div onClick={handleNav} className="mr-4 lg:hidden">
                    {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul
                    className={
                        open
                            ? 'text-center fixed left-0 top-16 w-full max-h-max border-r border-r-gray-900 bg-white ease-in-out duration-500 lg:hidden'
                            : 'ease-in-out text-center w-full h-1/2 duration-500 fixed top-[-100%]'
                    }
                >
                    <li className="p-3 hover:border-b-2 hover:border-[#FFBE41]">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="p-3 hover:border-b-2 hover:border-[#FFBE41]">
                        <a href="#About">About</a>
                    </li>
                    <li className="p-3 hover:border-b-2 hover:border-[#FFBE41]">
                        <a href="#Project">Projects</a>
                    </li>
                    <li className="p-3 hover:border-b-2 hover:border-[#FFBE41]">
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
