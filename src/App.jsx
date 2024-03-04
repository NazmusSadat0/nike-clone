import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Sections/Hero'
import PopularProducts from './components/PopularProducts'
import SuperQuality from './components/SuperQuality'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
    </div>
  )
}

export default App
