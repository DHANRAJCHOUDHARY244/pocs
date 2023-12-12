import React from 'react'
import HeaderImageComp  from '../components/pageHeaderImageComp/HeaderImageComp'
import PortImage from './img/portimage.jpg'
import AssembleComp from '../components/PortfoliComp/AssembleComp'
const PortFolio = () => {
  return (
    <>
        <HeaderImageComp bgImage={PortImage}  pageName={'Portfolio'} heading={'Digital Solutions, Strategic Consulting, Your Success.'} />
        <AssembleComp/>
    </>
  )
}

export default PortFolio