import React from 'react'

const RightSlide = (props) => {
  return (
    <div id='landing' className='snap-start h-screen w-screen bg-heavy-metal flex flex-col items-end text-right justify-center pr-6 lg:pr-16 ease-in duration-200'>
      {props.content}
    </div>
  )
}

export default RightSlide