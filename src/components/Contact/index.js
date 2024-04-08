import React from 'react'
import { TbLocationHeart } from 'react-icons/tb'
import { LuMailSearch } from 'react-icons/lu'

const Contact = () => {
    return (
        <div
            className="mx-auto max-w-[1000px] px-2 md:px-0 lg:my-40 text-[#2d2e32] my-11"
            id="contact"
        >
            <div className="mx-2 mb-4 lg:mx-0">
                <p className="mb-3 font-extrabold text-base text-blue-500">CONTACT</p>
                <p className="mb-3 font-extrabold text-2xl">Don't be shy! Hit me up!</p>
                <div className="flex justify-center mt-10">
                    <div className="h-full md:flex justify-center md:w-full">
                        <div className="flex md:w-1/3 md:h-1/4">
                            <span className="p-4 rounded-full shadow-3xl">
                                <TbLocationHeart size={40} className="text-blue-500" />
                            </span>
                            <div className="ml-3 md:ml-5 mt-2">
                                <p className="font-extrabold">Location</p>
                                <p className="font-semibold text-gray-600">Seattle, WA, USA</p>
                            </div>
                        </div>
                        <div className="mt-4 flex w-1/3 h-1/4 md:mt-0">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
