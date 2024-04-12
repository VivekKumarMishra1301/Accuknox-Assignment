import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Services from './components/Services'
import About from './components/About'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/service' element={<Services />} />
         <Route path='/about' element={<HomePage/>}/>

      </Routes>
    </div>
  )
}

export default App
