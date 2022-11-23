import React from 'react'
import Basketball from './Basketball'
import HeroInfo from './HeroInfo'

const HeroContainer = () => {
  return (
    <div className="max-w-7xl bg-template flex flex-col md:flex-row items-center justify-center md:space-x-2 lg:space-x-8 h-[85vh] md:h-[65vh] relative mx-auto">
      <HeroInfo />
      <Basketball />
    </div>
  )
}

export default HeroContainer
