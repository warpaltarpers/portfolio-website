import React from 'react'

function Landing() {
  return (
    <>
      <p className='font-mono text-base lg:text-lg text-aqua-haze'>Howdy, my name is</p>

      <p className='font-power text-5xl sm:text-6xl font-bold text-transparent mt-3 mb-3 bg-clip-text bg-gradient-to-r from-roman via-vibrant-purple to-viking'>Maxwell Walters</p>

      <p className='font-sans text-base lg:text-lg text-aqua-haze w-3/4 lg:w-2/3'>I'm a software engineer specializing in hybrid mobile apps, beautiful website front-ends, and flowing virtual assistant solutions. I'm currently elevating the award-winning <a href='https://www.huntington.com/Personal/mobile-banking/mobile-apps' className='text-viking hover:underline ease-in-out duration-300'>Huntington Mobile app</a> by keeping it intuitive, accessible, and user-focused.</p>

      <button className='mt-12 text-viking hover:text-aqua-haze hover:bg-gradient-to-r hover:from-roman hover:via-vibrant-purple hover:to-viking rounded-md border-2 border-viking hover:border-heavy-metal px-8 py-4 ease-in-out duration-150' onClick={() => window.open('https://github.com/warpaltarpers', '_blank')}>Follow me on GitHub!</button>
    </>
  )
}

export default Landing