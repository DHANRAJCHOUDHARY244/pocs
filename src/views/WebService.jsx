import React from 'react'
import ServiceComp from '../components/Service/ServiceComp'
import ServicePageData from './ServicePagesdata'
const WebPageData=ServicePageData[0].webDev
const WebService = () => {
  return (
    <>
        <ServiceComp headerImage={WebPageData.headerImage} ContImage={WebPageData.ContImage} pageName={WebPageData.pageName} pageHeading={WebPageData.pageHeading} ContHead1={WebPageData.ContHead1} ContHead2={WebPageData.ContHead2} ContText1={WebPageData.ContText1} ContText2={WebPageData.ContText2} />
    </>
  )
}

export default WebService