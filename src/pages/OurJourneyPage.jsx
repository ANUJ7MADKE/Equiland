import React from 'react'
import JourneyHero from '../components/JourneyHero'
import JourneyInfo from '../components/JourneyInfo'
import JourneyPassion from '../components/JourneyPassion'

function OurJourneyPage() {
  return (
    <div id="OurJourney" className='pt-16 pb-32 px-24'>
      <JourneyHero />
      <JourneyInfo />
      <JourneyPassion />
    </div>
  )
}

export default OurJourneyPage