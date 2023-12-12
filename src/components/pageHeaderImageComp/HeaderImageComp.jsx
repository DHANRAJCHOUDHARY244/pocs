import React from 'react'
import './style.css'
const HeaderImageComp = (props) => {
    return (
        <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 245, 0.3)),url(${props.bgImage})` }} className='headerimageComp'>
        <div className="hic-head">
            <h1>{props.heading}</h1>
        </div>
           <div className="hic-cont">
           <a className='hic-con-link' href='/'>HOME</a> <span className="divider">/</span> <span className='hic-con-pagename'>{props.pageName}</span>
           </div>
        </div>
    )
}

export default HeaderImageComp