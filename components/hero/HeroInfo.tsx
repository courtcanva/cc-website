import Link from 'next/link'
import React from 'react'

const HeroInfo = () => {
  return (
    <section className='flex flex-col  mx-8 max-w-[40%]'>
    <h1 className='text-[48px] font-semibold leading-tight w-80'>Build your dream court width No effort</h1>
    <h4 className='text-xl font-light leading-snug w-80 mt-1'>Start to design your court with CourtCanva</h4>
    <Link href="/design" className='block text-base rounded-md w-[100%] md:w-40  py-1.5 px-6 mt-6 bg-btn text-center'>Design Now!</Link>
  </section>
  )
}

export default HeroInfo
