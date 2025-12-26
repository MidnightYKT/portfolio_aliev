import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import {
    ImgAvatar,
    ImgHtml,
    ImgCss,
    ImgJavaScript,
    ImgTypeScript,
    ImgReact,
    ImgTailwind,
    ImgSass,
    ImgAntd,
    ImgHello,
    ImgRedux,
    ImgFramerMotion,
} from '../../assets/image'
import { TypeAnimation } from 'react-type-animation'

const img = [
    ImgHtml,
    ImgCss,
    ImgJavaScript,
    ImgTypeScript,
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
                                <div className="not-italic font-bold text-center md:text-left pt-8 lg:pr-8 text-4xl xl:leading-[68px] lg:text-6xl">
                                    <p>
                                        Front-End React Developer
                                        <img
                                            src={ImgHello}
                                            alt=""
                                            className="w-7 h-7 lg:w-12 lg:h-12 inline lg:ml-3 lg:mb-2 duration-500 hover:scale-125"
                                        />
                                    </p>
                                    <div className="font-normal h-20 md:w-96 lg:w-full text-gray-600 dark:text-zinc-400 text-lg mt-3 lg:mt-6">
                                        Hi, I'm Bek Aliev. A dedicated
                                        <TypeAnimation
                                            sequence={[
                                                ' Front-end React Developer based in Seattle, WA. 📍',
                                                1000,
                                                ' Front-end',
                                                1000,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                            cursor={true}
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-start mt-2 md:mt-0">
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
                                            className="ml-2"
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
                        <div className="container mx-auto px-8 pt-5 md:pt-10 md:w-[50%] md:h-full lg:w-[35%] lg:mr-6 lg:h-[45%] lg:pt-10">
                            <img
                                src={ImgAvatar}
                                alt=""
                                className="w-full h-full outline outline-4 animate-wiggle"
                            />
                        </div>
                    </div>
                    <div className="md:flex mt-10">
                        <div className="w-1/2 md:w-max mx-auto md:m-0 text-center md:text-left font-bold text-base py-4 pr-3 mb-3 md:mb-0 border-b-2 md:border-b-0 border-r-0 md:border-r-2 ">
                            Tech Stack
                        </div>
                        <ul className="grid grid-cols-4 justify-items-center mt-8 md:mt-0 md:flex flex-wrap gap-8 md:gap-4 py-2 md:grid-cols-none md:justify-start">
                            {img.map((item, i) => {
                                const isBeforeSecondToLast = i === img.length - 3
                                const isRedux = i === 8 // Redux index - должен быть под Tailwind (col 2)
                                const isFramerMotion = i === 9 // FramerMotion index - должен быть под SCSS (col 3)
                                
                                const gridColumnClass = isRedux 
                                    ? 'tech-stack-redux' 
                                    : isFramerMotion 
                                    ? 'tech-stack-framermotion' 
                                    : ''
                                
                                return (
                                    <React.Fragment key={i}>
                                        {isBeforeSecondToLast && (
                                            <li className="hidden md:block md:flex-1"></li>
                                        )}
                                        <li className={`w-10 h-10 duration-500 hover:scale-125 md:ml-5 ${gridColumnClass}`}>
                                            <img src={item} alt="" className="w-full h-full " />
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
