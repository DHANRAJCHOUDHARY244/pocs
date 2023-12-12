import React from 'react';
import classes from './ServiceCard.module.css';
import data from './data/serviceData'
const ServiceCard = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container_service}>
        {data.map((item)=>(
          <div className={classes.card} key={item.id} >
          <div className={`${classes.face} ${classes.face1}`}>
            <div className={classes.content}>
              <i className={item.icon}></i>
              <h3>{item.head}</h3>
            </div>
          </div>
          <div className={`${classes.face} ${classes.face2}`}>
            <div className={classes.content}>
              <p>
                {item.cont}
              </p>
              <a href={item.link} type="button">Read More</a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
