import React, { useState } from 'react';
import Data from './data';
import './style.css'
const TechList = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleTxt2 = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <div className="container _container">
      <div className="row"  >
        {Data.map((item, index) => (
          <div className="col-md-3" key={item.id} >
            <div className="card-tech">
              <img className='card-tech-img' src={item.link} alt={item.alt} />
              <h1 className="card-tech-head">{item.heading}</h1>
              <p className='txt1-tech'>{item.txt1}</p>
              {activeItem === index && <p className='txt2-tech'>{item.txt2}</p>}
              <button className='card-tech-btn' onClick={() => toggleTxt2(index)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechList;
