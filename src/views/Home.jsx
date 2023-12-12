import React from 'react'
import CardComponents from '../components/Card/CardComponents'
import FullPageCard from '../components/Card/FullPageCard'
import Slider from '../components/slider/Slider'
import './home.css'
const Home = () => {
  return (
    <div className='page-cont'>
        <Slider />
      <CardComponents/>
      <FullPageCard/>
    </div>
  )
}

export default Home