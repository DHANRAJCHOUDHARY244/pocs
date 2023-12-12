import React from 'react';
import './sociallink.css';

const SocialLink = (props) => (
  <div className="social-btns_">
    <div className="social-link_">
      <a href={props.linkedin} className='_btn1' target='_blank'>
        <i className='fab fa-linkedin-in'></i>
        <span className="link-name_">LinkedIn</span>
      </a>
    </div>
    <div className="social-link_">
      <a href={props.link} className='_btn2' target='_blank'>
        <i className='fas fa-link'></i>
        <span className="link-name_">Link</span>
      </a>
    </div>
  </div>
);

export default SocialLink;
