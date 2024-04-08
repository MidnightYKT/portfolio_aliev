import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link as Scroll } from 'react-scroll'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleNav = () => {
        setOpen(!open)
    }

    return (
        <div className="bg-white sticky top-0 z-40 shadow-md" id="bs-example-navbar-collapse-1">
            <div className="mx-auto max-w-[1000px]  px-0 flex justify-between items-center h-16 text-[#2d2e32] font-mono text-lg font-bold md:px-2 lg:px-0">
                <div className="hidden lg:flex">
                    <Scroll
                        className="cursor-pointer py-4 hover:text-blue-700"
                        to="content"
                        smooth={true}
                        duration={500}
                        offset={-80}
                    >
                        Aliev.dev
                    </Scroll>
                </div>
                <nav className="navbar">
                    <ul className="hidden lg:flex">
                        <li className="p-5">
                            <Scroll
                                activeClass="active"
                                className="cursor-pointer hover:text-blue-700"
                                to="content"
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={500}
                            >
                                Home
                            </Scroll>
                        </li>
                        <li className="p-5">
                            <Scroll
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-110}
                                className="cursor-pointer hover:text-blue-700"
                            >
                                About
                            </Scroll>
                        </li>
                        <li className="p-5">
                            <Scroll
                                to="projects"
                                className="cursor-pointer hover:text-blue-700"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                Projects
                            </Scroll>
                        </li>
                        <li className="p-5">
                            <Scroll
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-blue-700"
                            >
                                Contact
                            </Scroll>
                        </li>
                    </ul>
                </nav>
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
                    <li className="p-3 hover:border-blue-500">
                        <Scroll
                            activeClass="active"
                            className="cursor-pointer"
                            to="content"
                            smooth={true}
                            duration={500}
                            onClick={handleNav}
                        >
                            Home
                        </Scroll>
                    </li>
                    <li className="p-3 hover:border-blue-500">
                        <Scroll
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer"
                            onClick={handleNav}
                        >
                            About
                        </Scroll>
                    </li>
                    <li className="p-3 hover:border-blue-500">
                        <Scroll
                            to="projects"
                            className="cursor-pointer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleNav}
                        >
                            Projects
                        </Scroll>
                    </li>
                    <li className="p-3 hover:border-blue-500">
                        <Scroll
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer"
                            onClick={handleNav}
                        >
                            Contact
                        </Scroll>
                    </li>
                    <div className="flex justify-center my-4 md:mt-0">
                        <a
                            href="https://www.linkedin.com/in/bek-aliev-310a6a26a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin
                                size={40}
                                onMouseOver={({ target }) => (target.style.color = 'grey')}
                                onMouseOut={({ target }) => (target.style.color = 'black')}
                            />
                        </a>
                        <a href="https://github.com/MidnightYKT" target="_blank" rel="noreferrer">
                            <AiFillGithub
                                size={40}
                                onMouseOver={({ target }) => (target.style.color = 'grey')}
                                onMouseOut={({ target }) => (target.style.color = 'black')}
                            />
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
