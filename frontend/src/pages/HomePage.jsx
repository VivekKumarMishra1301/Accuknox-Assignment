import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Services from '../components/Services'

const HomePage = () => {
  return (
      <div className="app">
          
          <Header />
          <About />
          {/* <Services/> */}
    <Footer/>
    </div>
  )
}

export default HomePage