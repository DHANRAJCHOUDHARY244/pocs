import React from 'react'
import ServicePageData from './ServicePagesdata'
import ServiceComp from '../components/Service/ServiceComp'
const AndPageData = ServicePageData[0].andDev
const AndService = () => {
  return (
    <ServiceComp headerImage={AndPageData.headerImage} ContImage={AndPageData.ContImage} pageName={AndPageData.pageName} pageHeading={AndPageData.pageHeading} ContHead1={AndPageData.ContHead1} ContHead2={AndPageData.ContHead2} ContText1={AndPageData.ContText1} ContText2={AndPageData.ContText2} />
  )
}

export default AndService