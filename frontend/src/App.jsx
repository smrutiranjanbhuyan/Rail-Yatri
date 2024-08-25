import React from 'react'
import {Header,Footer} from './layouts'
import {Outlet} from 'react-router-dom'
import {background} from './assets'
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <Outlet/>
    <Footer />
  </div>
  )
}

export default App
