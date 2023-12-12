import React from 'react'
import classes from './card.module.css'
const Card = (props) => {
    const styles={
        background: `url(${props.image}) no-repeat center bottom`
    }
    return (
        <div className={classes['parent-container']}>
            <div className={`${classes.card} ${classes.transition}`}>
                <h2 className={classes.transition}>{props.heading}</h2>
                <p>
                  {props.txt}
                </p>
                <div className={`${classes['cta-container']} ${classes.transition}`}>
                    <a href={props.linkToPage} className={classes.cta}>Call to action</a>
                </div>
                <div className={`${classes.card_circle} ${classes.transition}`} style={styles}></div>
            </div></div>
    )
}

export default Card