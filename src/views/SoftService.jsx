import React from 'react'
import ServicePageData from './ServicePagesdata'
import ServiceComp from '../components/Service/ServiceComp'
const SoftPageData = ServicePageData[0].softDev
const SoftService = () => {
  return (
    <ServiceComp headerImage={SoftPageData.headerImage} ContImage={SoftPageData.ContImage} pageName={SoftPageData.pageName} pageHeading={SoftPageData.pageHeading} ContHead1={SoftPageData.ContHead1} ContHead2={SoftPageData.ContHead2} ContText1={SoftPageData.ContText1} ContText2={SoftPageData.ContText2} />
  )
}

export default SoftService