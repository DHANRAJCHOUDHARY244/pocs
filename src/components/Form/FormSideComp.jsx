import React from 'react'
import Bgform from './bgform.gif'
import './FormsideComp.css'
import { AccessTime, Mail, Phone } from '@mui/icons-material'
const FormSideComp = () => {
    return (
        <div className='form-side'>
            <div className='form-side-img'>
                <img src={Bgform} />
            </div>
            <div className='form-side-cont-info' >
                <div className='form-side-cont-info-cont'>
                    <span><Mail /></span>
                    <div >Email: choudharydhanraj239@gmail.com</div>
                </div>
                <div className='form-side-cont-info-cont'>
                    <span><Phone /></span>
                    <div>Phone No: +91 -9116459382</div>
                </div>
                <div className='form-side-cont-info-cont'>
                    <span><AccessTime /></span>
                    <div >Mon - Fri: 10:00Am to 8:00Pm <br />Sat - Sun: Off </div>
                </div>
            </div>
        </div>
    )
}

export default FormSideComp