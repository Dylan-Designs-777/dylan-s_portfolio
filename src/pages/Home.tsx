import React from 'react'
import Hero from '../components/sections/Hero'
import Portfolio from '../components/sections/Portfolio'
import About from '../components/sections/About'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
    </>
  )
}

export default Home