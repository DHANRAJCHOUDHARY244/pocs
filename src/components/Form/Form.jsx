import React from 'react'
import './style.css'
import {FcAbout, FcBusinessman, FcCallback, FcInvite, FcOrganization } from "react-icons/fc";
import FormSideComp from './FormSideComp';
const Form = () => {
  return (
    <div className='custom-form' >
      <div className='ch1'>
        <div className='form-head'>
          <span>Get In Touch</span>
        </div>
        <div className='form-cont' >
          <div className='inp-item'>
            <div className='inp-item-childbg'><span className='icon' > <FcBusinessman /> </span> <input id='inp' type='text' placeholder='Enter Your Name' /></div>
          </div>
          <div className='inp-item'>
          <div className='inp-item-childbg'><span className='icon' ><FcCallback />  </span> <input id='inp' type='text' placeholder='Enter Contact Number' /></div>
          </div>
          <div className='inp-item'>
            <div className='inp-item-childbg'><span className='icon' > <FcInvite /> </span> <input id='inp' type='text' placeholder='Enter Email address' /></div>
          </div>
          <div className='inp-item'>
            <div className='inp-item-childbg'><span className='icon' > <FcOrganization /> </span> <input id='inp' type='text' placeholder='Organization Name' /></div>
          </div>
          {/* <div className='inp-item'>
            <div className='inp-item-childbg'>
              <span className='icon' > <Email /> </span>
              <select id='sel'>
                <option selected>Industry</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select></div>
          </div> */}
          <div className='inp-item'>
            <div className='inp-item-childbg'><span className='icon' > <FcAbout /> </span> <textarea id='text-area' maxLength={800} placeholder='How Can We Help You??**' /> </div>
          </div>
          <div className='inp-item' style={{flexDirection:'column', fontSize: '35px', fontWeight: '500'}}>
              <span>Obtaining further information by make a contact with our experienced IT staffs.</span>
          </div>
          <div className='inp-item'>
           <button className='inp-item-btn'>Submit</button>
          </div>
        </div>
      </div>
      <FormSideComp />
    </div>
  )
}

export default Form 