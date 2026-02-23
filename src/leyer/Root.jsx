import React from 'react'
import Navber from '../componets/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer'

const Root = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root