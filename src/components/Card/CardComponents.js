import React from 'react'
import Card1 from './Card1'
import './style.css'
const CardComponents = () => {
  return (
    <div className='wrap-cont'>
      <div className='wrap-cont-content'>
        <div className='childs' >
          <Card1 />
        </div>
        <div className='childs' >
          <Card1 />
        </div>
        <div className='childs' >
          <Card1 />
        </div>
      </div>
      <div className='wrap-cont-content'>
        <div className='childs' >
          <Card1 />
        </div>
        <div className='childs' >
          <Card1 />
        </div>
        <div className='childs' >
          <Card1 />
        </div>
      </div>
    </div>
  )
}

export default CardComponents