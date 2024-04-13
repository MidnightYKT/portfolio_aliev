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
    ImgRedux,
    ImgFramerMotion,
} from '../../assets/image'

const img = [
    ImgHtml,
    ImgCss,
    ImgJavaScript,
    ImgReact,
    ImgTailwind,
    ImgSass,
    ImgAntd,
    ImgRedux,
    ImgFramerMotion,
]

const Content = () => {
    return (
        <div className="w-full text-center" id="content">
            <div className="mx-auto max-w-[1000px] text-[#2d2e32] dark:text-white">
                <div className="mx-4 mb-4 p-2 lg:mx-0 lg:p-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="lg:basis-[60%]">
                            <div className="md:py-12 text-left lg:pt-14 lg:w-[83%]">
                                <div className="not-italic font-bold pt-8 lg:pr-8 text-2xl xl:leading-[68px] lg:text-6xl">
                                    <p>
                                        Front-End React Developer
                                        <img
                                            src={ImgHello}
                                            alt=""
                                            className="w-7 h-7 lg:w-12 lg:h-12 inline lg:ml-3 lg:mb-2 duration-500 hover:scale-125"
                                        />
                                    </p>
                                    <div className="font-normal text-gray-600 dark:text-zinc-400 text-lg lg:mt-6 lg: mb-2">
                                        Hi, I'm Bek Aliev. A dedicated Front-end React Developer
                                        based in Seattle, WA
                                    </div>
                                    <div className="flex justify-start mt-2 md:mt-0">
                                        <a
                                            href="https://www.linkedin.com/in/bek-aliev-310a6a26a/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <AiFillLinkedin
                                                size={35}
                                                onMouseOver={({ target }) =>
                                                    (target.style.color = 'grey')
                                                }
                                                onMouseOut={({ target }) =>
                                                    (target.style.color = 'black')
                                                }
                                            />
                                        </a>
                                        <a
                                            href="https://github.com/MidnightYKT"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <AiFillGithub
                                                size={35}
                                                onMouseOver={({ target }) =>
                                                    (target.style.color = 'grey')
                                                }
                                                onMouseOut={({ target }) =>
                                                    (target.style.color = 'black')
                                                }
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto px-8 pt-5 md:pt-10 lg:w-[35%] lg:mr-6 lg:h-[45%] lg:pt-10">
                            <img
                                src={ImgAvatar}
                                alt=""
                                className="w-full h-full outline outline-4 animate-wiggle"
                            />
                        </div>
                    </div>
                    <div className="md:flex mt-10">
                        <div className="font-bold text-base py-4 pr-3 mb-3 md:mb-0">Tech Stack</div>
                        <div className="min-h-[1em] w-px bg-[#2d2e32] dark:bg-zinc-400 mx-2 hidden md:block"></div>
                        <ul className="grid grid-cols-4 md:flex flex-wrap gap-8 md:gap-4 py-2 md:grid-cols-none">
                            {img.map((item, i) => (
                                <li
                                    className="w-10 h-10 md:ml-5 duration-500 hover:scale-125"
                                    key={i}
                                >
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
