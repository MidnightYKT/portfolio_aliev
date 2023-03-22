import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="bg-[#2d2e32] w-full">
            <div className="mx-auto max-w-[1000px] text-white py-8">
                <div className="md:flex justify-between mx-2 lg:mx-0">
                    <div className=" text-center md:flex-none font-extrabold text-xl">
                        Copyright © 2023. All rights are reserved
                    </div>
                    <div className="flex justify-center md:flex justify-start mt-3 md:mt-0">
                        <AiFillLinkedin size={35} />
                        <AiFillGithub size={35} className="ml-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
