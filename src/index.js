import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Применяем тему ДО рендера приложения
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
