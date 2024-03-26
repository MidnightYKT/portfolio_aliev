import React from 'react'
import { TbLocationHeart } from 'react-icons/tb'
import { LuMailSearch } from 'react-icons/lu'

const Contact = () => {
    return (
        <div className="mx-auto max-w-[1000px] px-2 md:px-0 lg:my-40 text-[#2d2e32]" id="contact">
            <div className="p-4 mx-2 mb-4 lg:mx-0 lg:p-0">
                <p className="mb-3 font-extrabold text-base text-[#147efb]">CONTACT</p>
                <p className="mb-3 font-extrabold text-2xl">Don't be shy! Hit me up!</p>
                <div className="md:flex mt-10">
                    <div className="flex md:w-1/3 md:h-1/4">
                        <span className="p-4 rounded-full shadow-3xl">
                            <TbLocationHeart size={40} className="text-blue-500" />
                        </span>
                        <div className="ml-3 md:ml-5 mt-2">
                            <p className="font-extrabold">Location</p>
                            <p className="font-semibold text-gray-600">Seattle, WA, USA</p>
                        </div>
                    </div>
                    <div className="flex w-1/3 h-1/4">
                        <span className="p-4 rounded-full shadow-3xl">
                            <LuMailSearch size={40} className="text-[#147efb]" />
                        </span>
                        <div className="ml-3 md:ml-5 mt-2">
                            <p className="font-extrabold">Mail</p>
                            <a
                                href="mailto:nomiamaykt@gmail.com"
                                className="font-semibold text-gray-600 hover:text-[#147efb] no-underline"
                            >
                                nomiamaykt@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
