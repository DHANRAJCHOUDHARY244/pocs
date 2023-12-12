import React from 'react'
import Suryansh from './img/suryansh.jpg'
import Gajanand from './img/gajanand.jpg'
import Dhanraj from './img/dhanraj.jpg'
import './style.css';
import SocialLink from './SocialLink';
const OurLeaderShip = () => {
    return (
        <section className="container py-5">
            <h2 className="text-center display-4 font-weight-bold" style={{fontWeight: 600}}>Our Team</h2>
            <hr className="mx-auto border-0 bg-success w-25 mt-4 mb-4" />
            <p className="text-center lead" style={{fontWeight: 500}}>Our team consists only of the best talents</p>

            <div className="row mt-5 lead-img">
                <div className="col-lg-3 mb-4">
                    <div className="rounded-3 shadow">
                        <img src={Suryansh} alt="Suryansh" className="w-100 h-100 rounded-3" />
                    </div>
                </div>
                <div className="col-lg-9 lead-img-txt">
                    <div className="rounded-3 p-4 txt-cont" style={{background: '#96695E'}}>
                        <h3 className="text-indigo font-weight-bold head text-capitalize">Suryansh Singhal</h3>
                        <span className="text-indigo font-weight-light text-capitalize">Chief Manager</span>
                        <p className="text-indigo opacity-75">It’s not about ideas, It is all about making idea Happen. Having a great idea is just the beginning. Many people come up with brilliant ideas, but what sets individuals and organizations apart is their ability to execute those ideas. It's the execution that transforms abstract concepts into tangible results.</p>
                    <SocialLink link={'https://www.instagram.com/suryansh_singhal/'} linkedin={'https://www.linkedin.com/in/suryansh-singhal-25b375201/ '} />
                    </div>
                </div>
            </div>

            <div className="row mt-5 lead-img">
                <div className="col-lg-3 order-lg-2 mb-4">
                    <div className="rounded-3 shadow">
                        <img src={Gajanand} alt="Gajanand Pareek" className="w-100 h-100 rounded-3" />
                    </div>
                </div>
                <div className="col-lg-9  lead-img-txt order-lg-1">
                    <div className=" rounded-3 p-4 txt-cont" style={{background: 'white', boxShadow: '0px 2px 5px rgba(0,0,0,0.5)'}}>
                        <h3 className="font-weight-bold head text-capitalize" style={{color: 'black'}}>Gajanand Pareek</h3>
                        <span className="text-indigo font-weight-light text-capitalize">Chief Technology Officer</span>
                        <p className="opacity-75" style={{color: 'black'}}>Embrace the power of action, for it is the bridge between imagination and achievement. In the realm of making ideas happen, persistence, dedication, and a 'never give up' attitude will be your guiding stars. So, don't just dream it, do it, and watch your ideas transform the world.</p>
                        <SocialLink link={'https://www.instagram.com/the_gajanand_pareek/'} linkedin={'https://www.linkedin.com/in/gajanand-pareek-23aa7022b/'} />
                    </div>
                </div>
            </div>

            <div className="row mt-5 lead-img">
                <div className="col-lg-3 mb-4">
                    <div className="rounded-3 shadow">
                        <img src={Dhanraj} alt="Dhanraj Choudhary" className="w-100 h-100 rounded-3" />
                    </div>
                </div>
                <div className="col-lg-9  lead-img-txt">
                    <div className=" rounded-3 p-4 txt-cont" style={{background: '#96695E'}}>
                        <h3 className="text-indigo font-weight-bold head text-capitalize">Dhanraj Choudhary</h3>
                        <span className="text-indigo font-weight-light text-capitalize">Chief Executive Officer</span>
                        <p className="text-indigo opacity-75">Innovation is the heartbeat of web development. Don't follow the trends; set them. The digital world is your canvas, and your code is the brush. Every bug is an opportunity to learn, every line of code a stroke of creativity. Web development is the art of sculpting the digital world.</p>
                    <SocialLink link={'https://www.instagram.com/dhanrajchoudhary507/'} linkedin={'https://www.linkedin.com/in/dhanraj-choudhary-550892286/'} />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default OurLeaderShip