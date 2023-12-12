import React from 'react'
import FirstComp from './FirstComp'
import OptimalSolutionsComp from './OptimalSolutionsComp'
import App from './test-slider/App'
import TwoSecComp from './imgTwoSecComp/TwoSecComp'
import Image from './img/1ci.jpg'
import Image2 from './img/1cibg.png'
import Image3 from './img/2cibg.png'
import Image4 from './img/2ci.jpg'
const AssembleComp = () => {
  return (
    <><FirstComp />
      <OptimalSolutionsComp />
      <App/>

      <TwoSecComp image={Image2} col1={'rgba(255, 255, 255, 0.2)'} col2={'rgba(0,0,0, 1)'} childImage={Image} headCont={'Why Choose Us'} txt={'At POCS, we take pride in our liveware, a team that embodies skill, innovation, responsibility, and unwavering determination. We\'ve earned the moniker "Visionary" because we don\'t just serve our clients; we envision and actualize advancement in their businesses. Our expertise lies in cutting-edge technology solutions, including cloud-based solutions, software development, mobile app development, and web design.'} dir={'row'} />

      <TwoSecComp image={Image3} col1={'rgba(0, 47, 166, 0.9)'} col2={'rgba(0, 47, 166, 0.3)'} childImage={Image4} headCont={'What we do?'} txt={"POCS is dedicated to exceeding client expectations, delivering top-tier quality and cost-effective IT products and services. We're not just about business; we're about nurturing the future. Our training and internship programs empower newcomers in the IT industry, fostering a brighter tomorrow. With a robust portfolio of cutting-edge IT solutions, we align our products with clients' goals, optimizing their business operations. Our commitment to excellence and innovation ensures we stand with our clients every step of the way, driving success and propelling businesses forward."} dir={'row-reverse'} />

    </>
  )
}

export default AssembleComp