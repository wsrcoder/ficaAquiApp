
import { useState } from 'react'

import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import BentoSection from '../../components/BentoSection/BentoSection'

import './home.css'

const Home = () => {


  return (
    <main className="home-page">

      <Hero/>
      <SearchBar />
      <BentoSection />
    </main>
  )
}

export default Home