import { useEffect, useState } from 'react'
import { Navbar, Content, About, Projects, Contact, Footer } from './components/index'
import videoRaccon from './assets/video/videoRacconPedro.mp4'

function App() {
    const [theme, setTheme] = useState('white')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'white' : 'dark')
    }
    return (
        <>
            {loading ? (
                <div className="w-full h-screen bg-black flex justify-center items-center">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `<video
                  loop
                  muted
                  autoplay
                  playsinline
                  className="w-full h-[full]"
                >
                    <source src=${videoRaccon} type="video/mp4" />
                </video>
                `,
                        }}
                        className="w-1/2 md:w-1/4 h-1/4 md:h-1/2"
                    />
                </div>
            ) : (
                // <div className="w-full h-screen bg-black">
                //     <video
                //         className="w-full h-full"
                //         src={videoRaccon}
                //         autoPlay
                //         loop
                //         muted
                //         playsInline
                //         type="video/mp4"
                //     />
                // </div>
                <div className="bg-white dark:bg-gray-900 text-[#2d2e32] dark:text-white duration-500">
                    <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
                    <Content />
                    <About theme={theme} />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    )
}

export default App
