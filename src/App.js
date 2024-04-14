import { useEffect, useState } from 'react'
import { Navbar, Content, About, Projects, Contact, Footer } from './components/index'

function App() {
    const [theme, setTheme] = useState('white')
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'white' : 'dark')
    }
    return (
        <div className="bg-white dark:bg-gray-900 text-[#2d2e32] dark:text-white">
            <Navbar handleThemeSwitch={handleThemeSwitch} />
            <Content />
            <About theme={theme} />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
