import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import {
    ImgAvatar,
    ImgHtml,
    ImgCss,
    ImgJavaScript,
    ImgReact,
    ImgTailwind,
    ImgSass,
    ImgAntd,
    ImgHello,
} from '../../assets/image'

const img = [ImgHtml, ImgCss, ImgJavaScript, ImgReact, ImgTailwind, ImgSass, ImgAntd]

const Content = () => {
    return (
        <div className="w-full lg:h-screen text-center" id="Home">
            <div className="mx-auto max-w-[1000px] text-[#2d2e32]">
                <div className="mx-4 mb-4 lg:mx-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="lg:basis-[60%]">
                            <div className="md:py-12 text-left lg:pt-14 lg:w-[83%]">
                                <div className="not-italic font-bold pt-8 lg:pr-8 text-2xl xl:leading-[68px] lg:text-6xl">
                                    <p>
                                        Front-End React Developer
                                        <img
                                            src={ImgHello}
                                            alt=""
                                            className="w-7 h-7 lg:w-12 lg:h-12 inline lg:ml-3 lg:mb-2"
                                        />
                                    </p>
                                    <div className="font-semibold text-gray-600 text-lg lg:py-6">
                                        Hi, I'm Bek Aliev. A dedicated Front-end React Developer
                                        based in Yakutsk, Russia
                                    </div>
                                    <div className="flex justify-start mt-2 md:mt-0">
                                        <AiFillLinkedin size={40} />
                                        <AiFillGithub size={40} className="ml-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto px-8 pt-5 md:pt-10 lg:w-[40%] lg:mr-6 lg:h-[45%] lg:pt-10">
                            <img
                                src={ImgAvatar}
                                alt=""
                                className="w-full h-full outline outline-4 animate-wiggle"
                            />
                        </div>
                    </div>
                    <div className="md:flex mt-10">
                        <div className="font-bold text-base py-4 pr-3 mb-3 md:mb-0">Tech Stack</div>
                        <div className="min-h-[1em] w-px bg-[#2d2e32] mx-2 hidden md:block"></div>
                        <ul className="grid grid-cols-4 md:flex flex-wrap gap-8 md:gap-4 py-2 md:grid-cols-none">
                            {img.map((item, index) => (
                                <li className="w-10 h-10 cursor-pointer md:ml-5 duration-500 hover:scale-125">
                                    <img src={item} alt="" className="w-full h-full " />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
