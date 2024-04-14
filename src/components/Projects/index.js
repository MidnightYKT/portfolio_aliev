import React from 'react'

import { data } from '../../data'

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

                    <div className="lg:grid grid-cols-2 gap-8">
                        {data.map((project) => (
                            <div
                                className="duration-700 hover:scale-105 mt-7 p-3 md:p-5 lg:h-full lg:w-full shadow-3xl  rounded-xl dark:bg-gray-800"
                                key={project.id}
                            >
                                <div className="relative md:block">
                                    <div className="shadow-3xl">
                                        <a target="_blank" rel="noreferrer" href={project.url}>
                                            <img
                                                src={project.image}
                                                alt=""
                                                className="w-full h-full max-h-[300px] max-w-7xl rounded-lg"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className=" text-center py-5 lg:px-10 lg:mt-0 ml-3">
                                    <p className="mb-3 font-extrabold text-lg">{project.title}</p>
                                    <p className="my-3 font-medium text-lg italic dark:text-zinc-400">
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
                                    </div>
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
