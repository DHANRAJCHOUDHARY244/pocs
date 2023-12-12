import React from 'react'
import HeaderImageComp from '../components/pageHeaderImageComp/HeaderImageComp'
import TechImage from './img/technology.jpg'
import AssembleComp from '../components/technology/Assemble'
const Technology = () => {
  return (
    <>
        <HeaderImageComp bgImage={TechImage}  pageName={'Technology'} heading={'Technologies'} />
        <AssembleComp/>
    </>
  )
}

export default Technology