import React from 'react'
import { motion } from 'framer-motion'

import { ImgAbout, ImgAboutLaptop, ImgAboutText } from '../../assets/image'

const spinTransition = {
    rotate: { repeat: Infinity, duration: 10, ease: 'linear' },
    scale: {
        duration: 2,
    },
}

const About = () => {
    return (
        <div className="mx-auto max-w-[1000px] my-20 text-[#2d2e32]" id="about">
            <div className="p-4 md:m-2 lg:m-0 lg:flex lg:justify-between lg:h-full lg:w-full lg:p-0">
                <div className="relative hidden md:block">
                    <div>
                        <img src={ImgAboutLaptop} alt="" className="w-full h-full rounded-lg" />
                    </div>
                    <div className="absolute -right-[4%] lg:-right-[10%] -bottom-[12%]">
                        <img src={ImgAbout} alt="" className="w-full h-full rounded-lg" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={spinTransition}
                        className="absolute -right-[4%] lg:-right-[10%] -bottom-[12%]"
                    >
                        <img src={ImgAboutText} alt="" className="w-full h-full" />
                    </motion.div>
                </div>
                <div className="lg:w-[37%] text-left mt-14 lg:mt-0">
                    <p className="mb-3 font-black text-[#147efb]">ABOUT ME</p>
                    <p className="my-3 font-extrabold text-lg">
                        A dedicated Front-end React Developer based in Yakutsk, Russia
                    </p>
                    <p className="text-justify font-semibold text-gray-600">
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills
                        in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing
                        and maintaining responsive websites that offer a smooth user experience. My
                        expertise lies in crafting dynamic, engaging interfaces through writing
                        clean and optimized code and utilizing cutting-edge development tools and
                        techniques. I am also a team player who thrives in collaborating with
                        cross-functional teams to produce outstanding web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
