import React from 'react';
 
const CardFirstComp = (props) => {
  return (
    <div className='CardFirstComp' style={{ overflow: 'hidden' }}>
      <img src={props.image} alt={props.alt} style={{ width: '100%' }} />
      <div className="CardFirstComp-head">
        <span>{props.head}</span>
        <p>{props.text}</p>
      </div>
      <div className="CardFirstComp-link">
        <a href={props.link}>Learn More ➡</a>
      </div>
    </div>
  );
}

export default CardFirstComp;
