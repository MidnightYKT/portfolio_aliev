import React from 'react'
import { TbLocationHeart } from 'react-icons/tb'
import { LuMailSearch } from 'react-icons/lu'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div
            className="mx-auto max-w-[1000px] px-2 md:px-0 lg:my-28 text-[#2d2e32] dark:text-white my-11"
            id="contact"
        >
            <div className="mx-2 mb-4 lg:mx-0">
                <p className="mb-3 font-extrabold text-base text-blue-500">CONTACT</p>
                <p className="mb-3 font-extrabold text-2xl">Don't be shy! Hit me up!</p>
                <div className="mt-10 h-full grid justify-items-center md:grid-cols-2 gap-4 md:w-full">
                    <div className="mt-4 flex w-[90%] sm3:w-[80%] sm2:w-[60%]">
                        <span className="p-4 rounded-full shadow-3xl">
                            <TbLocationHeart size={40} className="text-blue-500" />
                        </span>
                        <div className="ml-3 md:ml-5 mt-2">
                            <p className="font-extrabold">Location</p>
                            <p className="font-semibold text-gray-600">Seattle, WA, USA</p>
                        </div>
                    </div>
                    <div className="mt-4 flex w-[90%] sm3:w-[80%] sm2:w-[60%]">
                        <span className="p-4 rounded-full shadow-3xl">
                            <LuMailSearch size={40} className="text-blue-500" />
                        </span>
                        <div className="ml-3 md:ml-5 mt-2">
                            <p className="font-extrabold">Mail</p>
                            <a
                                href="mailto:nomiamaykt@gmail.com"
                                className="font-semibold text-gray-600 hover:text-blue-500 no-underline"
                            >
                                nomiamaykt@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 flex w-[90%] sm3:w-[80%] sm2:w-[60%]">
                        <span className="p-4 rounded-full shadow-3xl">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://github.com/MidnightYKT"
                            >
                                <FaGithubAlt size={40} className="text-blue-500" />
                            </Link>
                        </span>
                        <div className="ml-3 md:ml-5 mt-2">
                            <p className="font-extrabold">GitHub</p>
                            <a
                                href="https://github.com/MidnightYKT"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-gray-600 hover:text-blue-500 no-underline"
                            >
                                MidnightYKT
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 flex w-[90%] sm3:w-[80%] sm2:w-[60%]">
                        <span className="p-4 rounded-full shadow-3xl">
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                to="https://www.linkedin.com/in/bek-aliev-310a6a26a/"
                            >
                                <FaLinkedinIn size={40} className="text-blue-500" />
                            </Link>
                        </span>
                        <div className="ml-3 md:ml-5 mt-2">
                            <p className="font-extrabold">Linkedin</p>
                            <a
                                href="https://www.linkedin.com/in/bek-aliev-310a6a26a/"
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-gray-600 hover:text-blue-500 no-underline"
                            >
                                bek-aliev
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
