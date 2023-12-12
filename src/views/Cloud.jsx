import React from 'react'
import ServicePageData from './ServicePagesdata'
import ServiceComp from '../components/Service/ServiceComp'
const CloudPageData = ServicePageData[0].cloudDev
const CloudService = () => {
  return (
    <ServiceComp headerImage={CloudPageData.headerImage} ContImage={CloudPageData.ContImage} pageName={CloudPageData.pageName} pageHeading={CloudPageData.pageHeading} ContHead1={CloudPageData.ContHead1} ContHead2={CloudPageData.ContHead2} ContText1={CloudPageData.ContText1} ContText2={CloudPageData.ContText2} />
  )
}

export default CloudService