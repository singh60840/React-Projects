import React from 'react'
import Header from '../header\'/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
import Home from '../Home/home'
function Layout() {
  return (
   <>
    <Header/>
    <Outlet/>   
    <Footer/>

   </>
  )
}

export default Layout
