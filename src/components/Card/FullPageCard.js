import React, { useState, useEffect, useRef } from 'react';
import classes from './FullPageCard.module.css';
import Anim1 from './img/anim1.gif';
import CountUp from 'react-countup';

const FullPageCard = () => {
  const countUpRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setStartCounting(true);
    } else {
      setStartCounting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className={classes['wrap-cont']}>
      <div className={classes.wrap}>
        <div className={classes.child1}>
          <img src={Anim1} alt="Animation" />
        </div>
        <div className={classes.child2}>
          <span>Who We are</span>
          <h1>We Solve Better Digital Marketing Solution</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.
            </p>
            <p>
              Vivamus ullam corper text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.
            </p>
          </div>
          <div className={classes['count-wrap']}>
            <div ref={countUpRef}>
              <CountUp end={200} duration={5} separator=" " suffix="+" start={startCounting} />
              <h4>Global Presence</h4>
            </div>
            <div ref={countUpRef}>
              <CountUp end={100} duration={5} separator=" " suffix="%" start={startCounting} />
              <h4>Satisfaction</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes['wrap-cont']}>
      <div className={`${classes.wrap} ${classes.wrap2}`}>
        <div className={classes.child2}>
          <span>Who We are</span>
          <h1>We Solve Better Digital Marketing Solution</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.
            </p>
            <p>
              Vivamus ullam corper text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.
            </p>
          </div>
          <div className={classes['count-wrap']}>
            <div ref={countUpRef}>
              <CountUp end={200} duration={5} separator=" " suffix="+" start={startCounting} />
              <h4>Global Presence</h4>
            </div>
            <div ref={countUpRef}>
              <CountUp end={100} duration={5} separator=" " suffix="%" start={startCounting} />
              <h4>Satisfaction</h4>
            </div>
          </div>
        </div>
        <div className={classes.child1}>
          <img src={Anim1} alt="Animation" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default FullPageCard;
