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

const Content = () => {
    return (
        <div className="w-full lg:h-screen text-center" id="Content">
            <div className="mx-auto max-w-[1000px]">
                <div className="px-4 lg:px-0">
                    <div className="flex justify-center lg:flex justify-between">
                        <div className="py-16 text-left md:w-[60%] lg:pt-14 lg:w-[50%]">
                            <div className="not-italic font-bold pt-8 lg:pr-8 text-2xl xl:leading-[68px] lg:text-6xl">
                                <p>
                                    Front-End React Developer
                                    <img
                                        src={ImgHello}
                                        alt=""
                                        className="w-7 h-7 lg:w-12 lg:h-12 inline lg:ml-3 lg:mb-2"
                                    />
                                </p>
                            </div>
                            <div className="font-semibold text-gray-600 text-lg lg:py-6">
                                Hi, I'm Bek Aliev. A dedicated Front-end React Developer based in
                                Yakutsk, Russia
                            </div>
                            <div className="flex justify-start">
                                <AiFillLinkedin size={40} />
                                <AiFillGithub size={40} className="ml-3" />
                            </div>
                        </div>
                        <div className="hidden md:block w-[25%] h-[20%] mr-14 md:pt-20 lg:w-[35%] lg:mr-0 lg:h-[45%] lg:pt-10">
                            <img
                                src={ImgAvatar}
                                alt=""
                                className="w-full h-full rounded-full outline outline-4"
                            />
                        </div>
                    </div>
                    <div className="md:flex mt-10">
                        <div className="font-bold text-base py-4 pr-3 mb-3 md:mb-0">Tech Stack</div>
                        <div className="min-h-[1em] w-px bg-black mx-2 hidden md:block"></div>
                        <div className="grid grid-cols-4 gap-4 md:flex py-2">
                            <div className="lg:mx-5 w-10 h-10">
                                <img src={ImgHtml} alt="" className="w-full h-full" />
                            </div>
                            <div className="mx-2 lg:mx-5 w-10 h-10">
                                <img src={ImgCss} alt="" className="w-full h-full" />
                            </div>
                            <div className="mx-2 lg:mx-5 w-10 h-10">
                                <img src={ImgJavaScript} alt="" className="w-full h-full" />
                            </div>
                            <div className="mx-2 lg:mx-5 w-10 h-10">
                                <img src={ImgReact} alt="" className="w-full h-full" />
                            </div>
                            <div className="mx-2 lg:mx-5 w-10 h-10">
                                <img src={ImgTailwind} alt="" className="w-full h-full" />
                            </div>
                            <div className="mx-2 lg:mx-5 w-10 h-10">
                                <img src={ImgSass} alt="" className="w-full h-full" />
                            </div>
                            <div className="mx-2 lg:mx-5 w-10 h-10">
                                <img src={ImgAntd} alt="" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
