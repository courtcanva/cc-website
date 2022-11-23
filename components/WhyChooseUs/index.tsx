import React from 'react'
import CardContainer from './CardContainer'

const WhyChooseUs = () => {
  return (
    <section className='px-8 py-12 relative bg-[#323232]  max-w-7xl mx-auto'>
      <h2 className='text-h2'>Why Choose Us</h2>
      <p className='font-light'>The products we provide are different from others</p>
      <div className='flex flex-col justify-center items-center'>
      <CardContainer />
      <div className='text-base rounded-md w-40 text-center py-1.5 px-6 mt-6 bg-btn font-light'>
        <a href="#">Start free trial</a>
      </div>
      </div>
      
    </section>
  )
}

export default WhyChooseUs