import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from "../components/Nav"
import FollowCursor from '../components/FlowCursor'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Projects from './projects'
import About from './about'
import Contact from './contact'

function App() {
  return (
    <>
      <div>
        <FollowCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
