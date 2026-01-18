import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../src/components/Hero'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes >
      {/* <Header /> */}
      {/* <Navbar/> */}
      {/* <Hero /> */}
      {/* <Industries /> */}
      {/* <Products /> */}
      {/* <Footer /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes>
  )
}

export default App
