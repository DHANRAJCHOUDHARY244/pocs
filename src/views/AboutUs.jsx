import React from 'react'
import HeaderImageComp from '../components/pageHeaderImageComp/HeaderImageComp'
import AboutUsImage from './img/about.png'
import AssembleComp from '../components/AboutsComp/AssembleComp'
const AboutUs = () => {
  return (
    <>
        <HeaderImageComp bgImage={AboutUsImage}  pageName={'ABOUT US'} heading={'ABOUT US'} />
        <AssembleComp/>
    </>
  )
}

export default AboutUs