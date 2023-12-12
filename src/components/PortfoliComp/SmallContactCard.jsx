import React from 'react'
import './SmallContactCard.css'
const SmallContactCard = () => {
  return (
    <div className='scc'>
    <div className='scc-head'>
        <h1>
        As an IT company, we provide all kinds of IT services to ensure 
            <span> your success and satisfaction.</span>
        </h1>
    </div>
    <div className='scc-btn'>
        <a className='scc-btn1'  href='/contact-us' type="button"> <i className='far fa-comment-alt'></i> Let's Talk</a>
        <a className='scc-btn2'  href='/about-us' type="button"> <i className="fas fa-info-circle"></i> Get Info</a>
    </div>
    </div>
  )
}

export default SmallContactCard