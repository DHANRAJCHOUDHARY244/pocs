import React from 'react';
import HeaderImageComp from '../pageHeaderImageComp/HeaderImageComp';
import './style.css'
const ServiceComp = (props) => {
  return (
    <>
      <HeaderImageComp bgImage={props.headerImage} pageName={props.pageName} heading={props.pageHeading} />
      <div className="container ser-comp-cont text-center">
        <div className="row">
          <div className="col-lg-12 ser-comp-cont-head">
              <h1>
                {props.ContHead1} <br /> <span>{props.ContHead2}</span>
              </h1>
          </div>
        </div>
        <div className="row ser-comp-cont-img-txt">
          <div className="col-lg-6 col-md-12">
            <div className="img">
              <img src={props.ContImage} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ser-comp-cont-img-t">
            <div className="txt">
              {props.ContText1}
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 ser-comp-cont-txt">
            {props.ContText2}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComp;
