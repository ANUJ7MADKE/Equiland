import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import HeroPage from './pages/HeroPage'
import SaaSSection from './pages/SaaSSection'
import SlidingSquare from './components/SlidingSquare'
import InsightsGrid from './pages/InsightsGrid'

function App() {
  useLayoutEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Your GSAP animations will go here
      gsap.from('.hero-animation', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    })

    // Cleanup
    return () => ctx.revert()
  }, [])

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