import React from 'react'
import './OptimalSol.css'
import { BsCheck2Circle } from 'react-icons/bs'
const OptimalSolutionsComp = () => {
    return (
        <div className='opt-sol'>
            <div>
                <h1 className="opt-sol-head">"Driving Success through <br />
                Tailored Excellence."</h1>
            </div>
            <div className="opt-sol-cont">
                <div className="opt-cont-child">
                    <div className="head">
                        <span className='icon'><BsCheck2Circle /></span><span className='icon-head'>Client Centric Approach</span>
                    </div>
                    <div className="cont">
                        We prioritize understanding our clients unique needs and objectives, allowing us to provide tailored solutions that precisely match their requirements.
                    </div>
                </div>
                <div className="opt-cont-child">
                    <div className="head">
                        <span className='icon'><BsCheck2Circle /></span><span className='icon-head'>Experienced Professionals</span>
                    </div>
                    <div className="cont">
                        Our team comprises seasoned experts with extensive industry experince, ensuring that you recieve the benifit of their deep knowledge and expertise.
                    </div>
                </div>
            </div>
            <div className="opt-sol-cont">
                <div className="opt-cont-child">
                    <div className="head">
                        <span className='icon'><BsCheck2Circle /></span><span className='icon-head'>Innovation-Driven</span>
                    </div>
                    <div className="cont">
                        We foster innovation in all our services, staying at the forfront of technological advancements to provide cutting-edge solutions.
                    </div>
                </div>
                <div className="opt-cont-child">
                    <div className="head">
                        <span className='icon'><BsCheck2Circle /></span><span className='icon-head'>Collaborative Partnerships</span>
                    </div>
                    <div className="cont">
                        We do'nt just offer services; we extablish collaborative partnerships with our clients, working together to achieve their goals and drive success.
                    </div>
                </div>
            </div>
            {/* <div className="opt-sol-cont">
                <div className="opt-cont-child">
                    <div className="head">
                        <span className='icon'><BsCheck2Circle /></span><span className='icon-head'>Quality Control System</span>
                    </div>
                    <div className="cont">
                        It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default OptimalSolutionsComp