import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <p className='font-power text-5xl sm:text-6xl font-bold text-transparent mb-3 bg-clip-text bg-gradient-to-r from-roman via-vibrant-purple to-viking'>Who Am I?</p>
      <p className='font-sans text-base lg:text-lg text-aqua-haze w-3/4 lg:w-2/3'>Hey! My name is Max, and I love to <span className='text-roman'>make</span>, <span className='text-vibrant-purple'>create</span>, and <span className='text-viking'>generate</span> fun and beautiful projects with code! Ever since I laid hands on a Gameboy Advance SP as a kid, I've wanted to make video games. That turned into learning to code in 2014, which a fruitful 6 years later became a <span className='text-roman'>B.A. in Emerging Technology in Business and Design from Miami University</span>. I was given the opportunity to design my major, where I focused on my original goal which was video game development, and from there tacked on web design and development, agile project management, and a minor in Computer Science.</p>
      <p className='font-sans text-base lg:text-lg text-aqua-haze w-3/4 lg:w-2/3 mt-3'>Since graduating, I've had the opportunity to work on <span className='text-vibrant-purple'>international research for pediatric acute flaccid myelitis therapy through games</span>, <span className='text-vibrant-purple'>esports-based marketing strategies</span>, and a <span className='text-vibrant-purple'>J.D. Power Award winning mobile banking app</span>.</p>
      <p className='font-sans text-base lg:text-lg text-aqua-haze w-3/4 lg:w-2/3 mt-3'>When I'm not programming, I love <span className='text-viking'>photography</span>, <span className='text-viking'>rock climbing</span>, <span className='text-viking'>speedrunning video games</span>, and <span className='text-viking'>weightlifting</span>!</p>
      <p className='font-sans text-base lg:text-lg text-aqua-haze w-3/4 lg:w-2/3 mt-3'>Here are some technologies I've been working with:</p>
      <div className='columns-2 mt-4 text-aqua-haze'>
        <ul className='list ml-6'>
          <li>Flutter & Dart</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>React.js</li>
        </ul>
        <ul className='list ml-10'>
          <li>TailwindCSS</li>
          <li>Unity & C#</li>
          <li>Jenkins CI/CD</li>
          <li>Git</li>
        </ul>
      </div>
    </>
  )
}

export default About