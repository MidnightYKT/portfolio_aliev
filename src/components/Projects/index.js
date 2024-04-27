import React from 'react'

import { data } from '../../data'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <section>
            <div
                id="projects"
                className="mx-auto max-w-[1000px] px-2 md:px-0 lg:my-40 text-[#2d2e32] dark:text-white"
            >
                <div className="p-0 mx-2 mb-4 lg:mx-0 lg:p-0">
                    <p className="mb-3 font-extrabold text-base text-blue-500">PORTFOLIO</p>
                    <p className="mb-3 font-extrabold text-2xl">
                        Each project is a unique piece of development
                    </p>

                    <div className="md:grid grid-cols-3 gap-8">
                        {data.map((project) => (
                            <div
                                className="mt-7 px-3 pt-3 pb-3 md:px-5 md:pt-5 lg:pb-0 lg:h-full lg:w-full shadow-3xl rounded-xl dark:bg-gray-800"
                                key={project.id}
                            >
                                <div className="relative md:block">
                                    <img
                                        src={project.image}
                                        alt=""
                                        className="w-full h-full max-w-7xl lg:max-h-[200px] rounded-xl"
                                    />
                                </div>
                                <div className="text-center pt-3 px-0 lg:px-5">
                                    <p className="mb-3 font-extrabold text-lg">{project.title}</p>
                                    <div className="flex justify-around">
                                        <Link
                                            className="cursor-pointer border border-slate-600 p-3 rounded-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            to={project.github}
                                        >
                                            GitHub
                                        </Link>
                                        {/* <button className="cursor-pointer border border-slate-600 p-1 lg:p-2 rounded-lg ">
                                            Info
                                        </button> */}
                                        <Link
                                            className="cursor-pointer border border-slate-600 p-3 rounded-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            to={project.url}
                                        >
                                            Live Demo
                                        </Link>
                                    </div>
                                    {/* <p className="my-3 font-medium text-lg italic dark:text-zinc-400">
                                        {project.description}
                                    </p>
                                    <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 place-items-center mt-8 md:mt-14">
                                        {project.tools.map((tool) => (
                                            <div
                                                className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110"
                                                key={tool.id}
                                            >
                                                <p className="font-bold bg-white px-3 py-2 rounded-xl dark:text-black">
                                                    {tool.name}
                                                </p>
                                            </div>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
