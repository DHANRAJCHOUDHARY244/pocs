import React from 'react'
import Card from './Card'
import Image from '../AboutsComp/img/1ci.jpg'
import Image2 from '../AboutsComp/img/1cibg.png'
import ServiceCard from './ServiceCard'
// import Projects from './projects/Projects'
import Carousel from './test-slider/Carousel'
import TwoSecComp from '../AboutsComp/imgTwoSecComp/TwoSecComp'
import SmallContactCard from './SmallContactCard'
import data from './CardData'
const AssembleComp = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '-100px' }}>
        {data.map((item)=>(
          <Card keys={item.id} heading={item.heading} txt={item.txt} linkToPage={item.linkToPage}  image={item.Image} />
        ))}
      </div>
      <ServiceCard />
      {/* <Projects/> */}
      <Carousel />
      <TwoSecComp image={Image} col1={'rgba(0, 47, 166, 0.6)'} col2={'rgba(0, 47, 166, 0.3)'} childImage={Image2} headCont={'What we do?'} txt={'We always make sure to live up to our client’s expectations regarding the quality and cost of the products and services offered. We Also conduct Training And Internship programmes in the field of IT SERVICES for freshers and novice Students Who Are Seeking For Better Future. Having an impressive product portfolio by our side in the realm of IT solutions with the latest technology for aligning our products with our client’s goals and expectations for better optimization of business operations.'} dir={'row-reverse'} />
      <SmallContactCard/>
    </>
  )
}

export default AssembleComp