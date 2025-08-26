import React from 'react'
import { Navbar, Footer } from '../components'  
import About from '../pages/about'

const AboutPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <div>
            <Navbar />
            <About />
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage