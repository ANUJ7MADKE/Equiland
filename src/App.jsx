import React from 'react'
import Navbar from './components/Navbar'
import HeroPage from './pages/HeroPage'
import SaaSSection from './pages/SaaSSection'
import SlidingSquare from './components/SlidingSquare'
import InsightsGrid from './pages/InsightsGrid'

function App() {
  return (
    <div className='font-lexend text-text-brownish bg-secondary-cream'>
      <Navbar/>
      <HeroPage/>
      <SaaSSection/>
      <InsightsGrid/>
    </div>
  )
}

export default App