import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './info'
import Contact from "./contact"
import About from "./about"
import Footer from "./footer"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="container">
    <Info />
    <Contact />
    <About />
    <Footer />
  </div>
  </React.StrictMode>
)
