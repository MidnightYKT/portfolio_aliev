import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Link as Scroll } from 'react-scroll'

const Navbar = ({ handleThemeSwitch, theme }) => {
    const [open, setOpen] = useState(false)
    const handleNav = () => {
        setOpen(!open)
    }

    return (
        <div className="sticky top-0 z-40 shadow-md" id="bs-example-navbar-collapse-1">
            <div className="mx-auto max-w-[1000px] bg-white dark:bg-gray-900  px-0 flex justify-between items-center h-16 font-mono text-lg font-bold md:px-2 lg:px-0">
                <div className="hidden lg:flex">
                    <Scroll
                        className="cursor-pointer py-4"
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
                                className="cursor-pointer"
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
                                className="cursor-pointer"
                            >
                                About
                            </Scroll>
                        </li>
                        <li className="p-5">
                            <Scroll
                                to="projects"
                                className="cursor-pointer"
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
                                className="cursor-pointer"
                            >
                                Contact
                            </Scroll>
                        </li>
                        {theme === 'dark' ? (
                            <li className="p-5 cursor-pointer">
                                <MdOutlineLightMode size={26} onClick={handleThemeSwitch} />
                            </li>
                        ) : (
                            <li className="p-5 cursor-pointer">
                                <MdOutlineDarkMode size={26} onClick={handleThemeSwitch} />
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="ml-16 lg:hidden">Aliev.dev</div>
                <div className="flex lg:hidden">
                    <div className="mr-3">
                        {theme === 'dark' ? (
                            <MdOutlineLightMode size={21} onClick={handleThemeSwitch} />
                        ) : (
                            <MdOutlineDarkMode size={21} onClick={handleThemeSwitch} />
                        )}
                    </div>
                    <div onClick={handleNav} className="mr-4 lg:hidden">
                        {open ? (
                            <div>
                                <AiOutlineClose size={20} />
                            </div>
                        ) : (
                            <div>
                                <AiOutlineMenu size={20} />
                            </div>
                        )}
                    </div>
                </div>
                <ul
                    className={
                        open
                            ? 'text-center fixed left-0 top-16 w-full max-h-max border-r bg-white dark:bg-gray-900 duration-100 lg:hidden'
                            : 'ease-in-out text-center w-full h-1/2 duration-500 fixed top-[-100%]'
                    }
                >
                    <li className="p-3">
                        <Scroll
                            activeClass="active"
                            className="cursor-pointer"
                            to="content"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                            onClick={handleNav}
                        >
                            Home
                        </Scroll>
                    </li>
                    <li className="p-3">
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
                    <li className="p-3">
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
                    <li className="p-3">
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
