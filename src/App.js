import { Navbar, Content, About, Projects, Contact, Footer } from './components/index'

function App() {
    return (
        <div className="scrollbar-thin scrollbar-track-white scrollbar-thumb-black h-screen overflow-y-scroll">
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
