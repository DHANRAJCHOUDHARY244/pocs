import React from 'react';
import './style.css';

const TwoSecComp = (props) => {
    const divStyle = {
        backgroundImage: `linear-gradient(0deg, ${props.col1}, ${props.col2}) ,url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        flexDirection:`${props.dir}`
    };

    return (
        <div style={divStyle} className='TwoSecComp'>
            <div className="child-img-sec">
                <img src={props.childImage} alt="" />
            </div>
            <div className="child-cont-sec">
                <h1>{props.headCont}</h1>
                <p>{props.txt}</p>
            </div>
        </div>
    );
}

export default TwoSecComp;
