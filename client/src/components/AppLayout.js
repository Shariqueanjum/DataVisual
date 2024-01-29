import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  










  return (
    
    <div className="flex flex-wrap w-screen h-screen absolute">
        <Sidebar/>
        <Header/>
        <div className='ml-[15%] w-[85%] absolute mt-20 h-[85%]'>
        <Outlet/>
        </div>
         
    </div>



  )
}

export default AppLayout