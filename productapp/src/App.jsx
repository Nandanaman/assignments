import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Products from './components/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/h' element={<Homepage/>}/>
        <Route path='/p' element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
