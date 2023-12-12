import React from 'react'
import './FirstComp.css'
import './CardFirstComp.css'
import CardFirstComp from './CardFirstComp'
// import Image from './img/company.png'
import need from './img/need.jpg'
import can from './img/can.jpg'

const FirstComp = () => {
    return (
        <div> 
            <p className='first-comp-subtitle'>Parrot Organization Consultancy Services</p>
            <h1 className='first-comp-head'>"Empowering Your Digital Journey,  <br />One Innovation at a  <span>Time</span>"</h1>
            <div className="about-cont">
                <div class="modern-number-01">
                    <h2 class="heading  me-5"><span class="mark-text">01</span>Years’ <br /> Experience <br /> in IT
                    </h2>
                    <h6 class="heading mt-30">More About Our Success Stories</h6>
                </div>
                <div className="about-cont-text">
                    <p>Parrots are known for their intelligence, adaptability, and ability to mimic sounds or voices. Likewise, POCS symbolize our capability to adapt and mimic successful operational strategies to help our clients. Our consultancy primarily deals with the day-to-day operational aspects of businesses.</p>
                </div>
            </div>
            <div className="first-comp-card-sec-parent">
                <div className="first-comp-card-sec">
                    <CardFirstComp image={can} link={'/our-technology'} text={'At our IT consultancy, we provide a diverse range of services, including IT strategy Development, software Development, cloud computing solutions, project management and IT infrastructure optimization.'} head={'What we can do?'} />
                    {/* <CardFirstComp image={Image} link={'/'} text={'We provide the most responsive and functional IT design for companies and businesses worldwide.'} head={'Become our partners?'} /> */}
                    <CardFirstComp image={need} link={'/contact-us'} text={'We are here to lend a helping hand and empower you to reach your goals in the fast-paced world of IT, we understand that navigating the complexities of technology can be a challenge. That\'s where we come in.'} head={'Need a hand?'} />
                </div>
                
            </div>
        </div>
    )
}

export default FirstComp