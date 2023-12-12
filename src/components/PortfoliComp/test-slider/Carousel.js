import React, {Component} from 'react';
import './Carousel.css';
import { items } from './Data';
import { ReactComponent as ArrowLeft } from './assets/chevron-left-solid.svg';
import { ReactComponent as ArrowRight } from './assets/chevron-right-solid.svg';
import { ReactComponent as Circle } from './assets/circle-solid.svg';
const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'hsla(221, 0%, 49%, 0.98)';

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            leftcard1: 0,
            activeIndex: 0,
            rightcard1: 0,
            arrayLength: 0
        };
        this.getLength = this.getLength.bind(this);
        this.activatePreviousSlide = this.activatePreviousSlide.bind(this);
        this.activateNextSlide = this.activateNextSlide.bind(this);
    }
    componentDidMount() { // gets index of active card1 from imported data and sets state
        let length = this.getLength();
        for (var i = 0; i < length; i++) {
            if (items[i].status === 'active') {
                this.setState({
                    leftcard1: i - 1,
                    activeIndex: i,
                    rightcard1: i + 1,
                    arrayLength: length
                });
            }
        }
    }
    getLength() { // calculating length of imported array
        let length = 0;
        // eslint-disable-next-line 
        for (var i in items) {
            length++;
        }
        return length;
    }
    activatePreviousSlide() {
        let leftIndex = 0;
        if (this.state.leftcard1 - 1 === -1) { // checking for out of bounds
            leftIndex = this.state.arrayLength - 1; // set left to last index
        }
        else {
            leftIndex = this.state.leftcard1 - 1; // moving back by one card1
        }
        this.setState({
            rightcard1: this.state.activeIndex,
            activeIndex: this.state.leftcard1,
            leftcard1: leftIndex
        })
    }
    activateNextSlide() {
        let rightIndex = 0;
        if (this.state.rightcard1 + 1 === this.state.arrayLength) { // checking for out of bounds
            rightIndex = 0; // set rightcard1 to beginning of array
        }
        else {
            rightIndex = this.state.rightcard1 + 1; // moving forward by one card1
        }
        this.setState({
            leftcard1: this.state.activeIndex,
            activeIndex: this.state.rightcard1,
            rightcard1: rightIndex
        })
    }
    render() {
        var trackerArray = [];
        for (var i = 0; i < this.state.arrayLength; i++) {
            if (i === this.state.activeIndex) {
                trackerArray.push(<div className='circle'> <Circle fill={activeColour} /> </div>);
            }
            else {
                trackerArray.push(<div className='circle'> <Circle fill={inactiveColour} /> </div>);
            }

        }
        return (
            <div className="card-body"><div className="carousel-container">
                <div className="card1s">
                    <div className="card1 leftcard1">
                        <img className="avatars" src={items[this.state.leftcard1].imgSrc} alt="avatar"></img>
                        <div className="text">
                            <h3 className="name">{items[this.state.leftcard1].name} </h3>
                            <i className="position">{items[this.state.leftcard1].position}</i>
                            <p className="testimony">{items[this.state.leftcard1].quote}</p>
                        </div>
                    </div>
                    <div className="card1 active">
                        <img className="avatars" src={items[this.state.activeIndex].imgSrc} alt="avatar"></img>
                        <span>
                            <div className="text">
                                <h3 className="name">{items[this.state.activeIndex].name}</h3>
                                <i className="position">{items[this.state.activeIndex].position}</i>
                                <p className="testimony">{items[this.state.activeIndex].quote}</p>
                            </div>
                            <div className="arrow-container">
                                <ArrowLeft className="arrow arrow-left" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.activatePreviousSlide.bind(this)}></ArrowLeft>
                                <ArrowRight className="arrow arrow-right" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.activateNextSlide.bind(this)}></ArrowRight>
                            </div>
                        </span>
                    </div>
                    <div className="card1 rightcard1">
                        <img className="avatars" src={items[this.state.rightcard1].imgSrc} alt="avatar"></img>
                        <div className="text">
                            <h3 className="name">{items[this.state.rightcard1].name}</h3>
                            <i className="position">{items[this.state.rightcard1].position}</i>
                            <p className="testimony">{items[this.state.rightcard1].quote}</p>
                        </div>
                    </div>
                </div>
                <div className="tracker">
                    {trackerArray}
                </div>
            </div></div>
        )
    }
}

export default Carousel;