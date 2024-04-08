import React from 'react'

import { ProjectRamen, ProjectTodo, ProjectWeather } from '../../assets/image'

const Projects = () => {
    return (
        <section>
            <div
                id="projects"
                className="mx-auto max-w-[1000px] px-2 md:px-0 lg:my-40 text-[#2d2e32]"
            >
                <div className="p-0 mx-2 mb-4 lg:mx-0 lg:p-0">
                    <p className="mb-3 font-extrabold text-base text-blue-500">PORTFOLIO</p>
                    <p className="mb-3 font-extrabold text-2xl">
                        Each project is a unique piece of development
                    </p>
                    <div className="md:p-20 lg:p-6 lg:flex lg:justify-between lg:h-full lg:w-full shadow-3xl rounded-xl">
                        <div className="relative p-2 md:block">
                            <div className="shadow-3xl">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://react-store-ramen.vercel.app/"
                                >
                                    <img
                                        src={ProjectRamen}
                                        alt=""
                                        className="w-full h-auto rounded-lg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-[50%] text-center py-5 px-10 lg:mt-0 ml-3">
                            <p className="mb-3 font-extrabold text-lg">REACT RAMEN</p>
                            <p className="my-3 font-medium text-lg">
                                This is my mini online store for ordering ramen. In which I
                                practiced using Redux, Axios, MockaApi and Typescript.
                            </p>
                            <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 place-items-center mt-8 md:mt-14">
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">REACT</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">SCSS</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">
                                        TypeScript
                                    </p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">
                                        mockaApi
                                    </p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">Redux</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">Axios</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 md:p-20 lg:p-6 lg:flex lg:justify-between lg:h-full lg:w-full shadow-3xl rounded-xl">
                        <div className="lg:w-[50%] text-center py-5 px-10 lg:mt-0 ml-3">
                            <p className="mb-3 font-extrabold text-lg">WEATHER APP</p>
                            <p className="my-3 font-medium text-lg">
                                The weather app provides access to current weather conditions,
                                including temperature, precipitation, wind speed, humidity, sunrise
                                and sunset times, air pressure, feel like and visibility.
                            </p>
                            <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 place-items-center mt-8 md:mt-14">
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">
                                        NEXT.JS
                                    </p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">
                                        Tailwind
                                    </p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110 ml-5">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">
                                        TypeScript
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-2 md:block">
                            <div className="shadow-3xl">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://weather-app-three-gamma-31.vercel.app/"
                                >
                                    <img
                                        src={ProjectWeather}
                                        alt=""
                                        className="w-full h-auto rounded-lg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 md:p-20 lg:p-6 lg:flex lg:justify-between lg:h-full lg:w-full shadow-3xl rounded-xl">
                        <div className="relative p-2 md:block">
                            <div className="shadow-3xl ">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://todo-r-theta.vercel.app/"
                                >
                                    <img
                                        src={ProjectTodo}
                                        alt=""
                                        className="w-full h-auto rounded-lg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-[50%] text-center py-5 px-10 lg:mt-0 ml-3">
                            <p className="mb-3 font-extrabold text-lg">TODO LIST</p>
                            <p className="my-3 font-medium text-lg">
                                An application made to manage your tasks by providing an interface
                                for adding, editing the mark of whether a task is done or not and
                                deleting tasks.
                            </p>
                            <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 place-items-center mt-8 md:mt-14">
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">REACT</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">SCSS</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">
                                        TypeScript
                                    </p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">Redux</p>
                                </div>
                                <div className="rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg duration-500 hover:scale-110">
                                    <p className="font-bold bg-white px-3 py-2 rounded-xl">Axios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
