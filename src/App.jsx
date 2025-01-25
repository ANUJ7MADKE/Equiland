import React from 'react'
import Navbar from './components/Navbar'
import HeroPage from './pages/HeroPage'
import SaaSSection from './components/SaaSSection'
import SlidingSquare from './components/SlidingSquare'
import InsightsGrid from './components/InsightsSection'
import MarketSection from './components/MarketSection'
import ContactUsSection from './components/ContactUsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className='font-lexend text-text-brownish bg-secondary-cream'>
      <Navbar/>
      <HeroPage/>
      <SaaSSection/>
      <InsightsGrid/>
      <MarketSection/>
      <ContactUsSection/>
      <Footer/>
    </div>
  )
}

export default App