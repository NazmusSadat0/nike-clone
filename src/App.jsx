import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Sections/Hero'
import PopularProducts from './components/PopularProducts'
import SuperQuality from './Sections/SuperQuality'
import Services from './Sections/Services'
import SpecialOffer from './Sections/SpecialOffer'


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
    </div>
  )
}

export default App
