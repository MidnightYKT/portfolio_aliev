import {
    ProjectRamen,
    ProjectTodo,
    ProjectWeather,
    PorjectKanban,
    ProjectSendIt,
} from '../assets/image'

export const data = [
    {
        id: 0,
        title: 'React Send It',
        description:
            'A CRUD application that allows you to share your small messages. Prisma and Postgresql were used as a backend with Next authentication to create and authenticate users.',
        image: ProjectSendIt,
        url: 'https://nextjs-postit-psi.vercel.app/',
        tools: [
            {
                id: 0,
                name: 'React',
            },
            {
                id: 1,
                name: 'Next JS',
            },
            {
                id: 2,
                name: 'TypeScript',
            },
            {
                id: 3,
                name: 'Tailwind',
            },
            {
                id: 4,
                name: 'Postgresql',
            },
            {
                id: 5,
                name: 'Prisma',
            },
            {
                id: 6,
                name: 'Axios',
            },
            {
                id: 7,
                name: 'React Query',
            },
            {
                id: 8,
                name: 'Antd',
            },
            {
                id: 9,
                name: 'Moment Js',
            },
        ],
    },
    {
        id: 1,
        title: 'REACT RAMEN',
        description:
            'This is my mini online store for ordering ramen. In which I practiced using Redux, Axios, MockaApi and Typescript.',
        image: ProjectRamen,
        url: 'https://react-store-ramen.vercel.app/',
        tools: [
            {
                id: 0,
                name: 'React',
            },
            {
                id: 1,
                name: 'SCSS',
            },
            {
                id: 2,
                name: 'TypeScript',
            },
            {
                id: 3,
                name: 'mockaApi',
            },
            {
                id: 4,
                name: 'Redux',
            },
            {
                id: 5,
                name: 'Axios',
            },
        ],
    },
    {
        id: 2,
        title: 'WEATHER APP',
        description:
            'The weather app provides access to current weather conditions, including temperature, precipitation, wind speed, humidity, sunrise and sunset times, air pressure, feel like and visibility.',
        image: ProjectWeather,
        url: 'https://weather-app-three-gamma-31.vercel.app/',
        tools: [
            {
                id: 0,
                name: 'NEXT.JS',
            },
            {
                id: 1,
                name: 'Tailwind',
            },
            {
                id: 2,
                name: 'TypeScript',
            },
        ],
    },
    {
        id: 3,
        title: 'KANBAN REACT',
        description:
            'The Kanban Board React.js application is a dynamic project designed to streamline task management and enhance productivity. Developed with the modern web technology of React.js, this application serves as a visual project management tool.',
        image: PorjectKanban,
        url: 'https://kanban-board-iota-beige.vercel.app/',
        tools: [
            {
                id: 0,
                name: 'React',
            },
            {
                id: 1,
                name: 'Bootstrap',
            },
            {
                id: 2,
                name: 'ExpressJS',
            },
            {
                id: 3,
                name: 'Reactstrap',
            },
        ],
    },
    {
        id: 4,
        title: 'TODO LIST',
        description:
            'An application made to manage your tasks by providing an interfacefor adding, editing the mark of whether a task is done or not and deleting tasks.',
        image: ProjectTodo,
        url: 'https://todo-r-theta.vercel.app/',
        tools: [
            {
                id: 0,
                name: 'React',
            },
            {
                id: 1,
                name: 'Redux',
            },
            {
                id: 2,
                name: 'Axios',
            },
        ],
    },
]
