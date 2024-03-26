import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="bg-[#2d2e32] w-full" id="footer">
            <div className="mx-auto max-w-[1000px] text-white py-8">
                <div className="md:flex justify-between mx-2 lg:mx-0">
                    <div className="text-center md:flex-none font-mono font-semibold text-xl">
                        Copyright© 2024. All rights are reserved
                    </div>
                    <div className="flex justify-center md:flex justify-start mt-3 md:mt-0">
                        <a
                            href="https://www.linkedin.com/in/bek-aliev-310a6a26a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin
                                size={35}
                                onMouseOver={({ target }) => (target.style.color = 'grey')}
                                onMouseOut={({ target }) => (target.style.color = 'white')}
                            />
                        </a>
                        <a href="https://github.com/MidnightYKT" target="_blank" rel="noreferrer">
                            <AiFillGithub
                                size={35}
                                className="ml-3"
                                onMouseOver={({ target }) => (target.style.color = 'grey')}
                                onMouseOut={({ target }) => (target.style.color = 'white')}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
