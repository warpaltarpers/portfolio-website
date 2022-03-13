import React from 'react'

const LeftSlide = props => {
  return (
    <div id='landing' className='snap-start h-screen w-screen bg-heavy-metal flex flex-col items-start text-left justify-center pl-6 lg:pl-12 ease-in duration-200'>
      {props.content}
    </div>
  )
}

export default LeftSlide