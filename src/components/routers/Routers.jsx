import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
  )
}

export default Routers