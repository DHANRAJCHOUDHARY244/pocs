import React from 'react'
import Form from '../components/Form/Form'
import HeaderImageComp from '../components/pageHeaderImageComp/HeaderImageComp'
import ContactUsImage from './img/contactus.jpg'
const ContactUs = () => {
  return (
    <>
      <HeaderImageComp bgImage={ContactUsImage}  pageName={'CONTACT US'} heading={'Contact Us'}  />
      <Form />
    </>
  )
}

export default ContactUs