import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'


function App() {


  return (
    <div className="app-container">

      {/* Header stays outside Routes because it appears on every page */}
      <Header/>
      
      <main className="main-content">
          <Routes>
          <Route path="/" element= {<Home />}/>

          {/** Future pages looks like: <Route path="/about" element={<About />}  /> */}
          </Routes>
          <Footer />
      </main>

    </div>
  )
}

export default App
