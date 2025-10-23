import React from 'react'
import Header from '../header/Header'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
function Layout() {
  return (
    <Router>
        <Header/>
        <Routers/>
    </Router>
  )
}

export default Layout