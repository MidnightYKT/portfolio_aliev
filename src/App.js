import { useEffect, useState } from 'react'
import { Navbar, Content, About, Projects, Contact, Footer } from './components/index'

function App() {
    return (
        <div className="bg-white dark:bg-gray-900 text-[#2d2e32] dark:text-white">
            <Navbar />
            <Content />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
