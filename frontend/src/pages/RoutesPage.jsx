import React, { useState } from 'react'
import {MapComponent,SideBar} from '../components'
const RoutesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
  <div className='flex'>
  <MapComponent/>
  <SideBar></SideBar>
  </div>
  )
}

export default RoutesPage
