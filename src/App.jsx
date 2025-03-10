import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return(
    <Router>
    <div className='flex flex-col items-center w-full'>
    <Navbar />
    <Hero />
    <Footer />
    </div>
    </Router>
  )
}

export default App
