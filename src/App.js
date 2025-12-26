import { useEffect, useState } from 'react'
import { Navbar, Content, About, Projects, Contact, Footer } from './components/index'

function App() {
    const initialTheme = localStorage.getItem('theme') || 'white'
    const [theme, setTheme] = useState(initialTheme)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'white')
        }
    }, [theme])

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    const handleThemeSwitch = () => {
        const newTheme = theme === 'dark' ? 'white' : 'dark'
        // Применяем класс dark синхронно, до обновления состояния
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setTheme(newTheme)
    }
    
    if (loading) {
        const isDark = theme === 'dark'
        return (
            <div 
                className="fixed inset-0 flex items-center justify-center z-50 transition-colors duration-500"
                style={{ 
                    backgroundColor: isDark ? '#111827' : '#ffffff'
                }}
            >
                <div className="flex flex-col items-center gap-6 loading-animation">
                    <div className="relative w-24 h-24">
                        <div 
                            className="absolute inset-0 border-4 rounded-full border-t-transparent animate-spin" 
                            style={{ 
                                animationDuration: '1s',
                                borderColor: isDark ? '#60a5fa' : '#3b82f6',
                                borderTopColor: 'transparent'
                            }}
                        ></div>
                        <div 
                            className="absolute inset-3 border-4 rounded-full border-b-transparent animate-spin" 
                            style={{ 
                                animationDirection: 'reverse', 
                                animationDuration: '0.8s',
                                borderColor: isDark ? '#a78bfa' : '#8b5cf6',
                                borderBottomColor: 'transparent'
                            }}
                        ></div>
                        <div 
                            className="absolute inset-6 border-4 rounded-full border-l-transparent animate-spin" 
                            style={{ 
                                animationDuration: '1.2s',
                                borderColor: isDark ? '#f472b6' : '#ec4899',
                                borderLeftColor: 'transparent'
                            }}
                        ></div>
                    </div>
                    <div 
                        className="text-2xl font-semibold animate-pulse"
                        style={{ color: isDark ? '#ffffff' : '#2d2e32' }}
                    >
                        Loading...
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="bg-white dark:bg-gray-900 text-[#2d2e32] dark:text-white transition-colors duration-500">
            <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
            <Content />
            <About theme={theme} />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
