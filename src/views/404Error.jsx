import React from 'react'
import './404error.css'
const Error404 = () => {
  const styles = {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    textAlign:'center'
  }
  
  const heading={
    fontSize:'50px',
    fontWeight:'bold'
  }
  const subHeading={
    fontWeight:'bold',
    fontSize:'20px'
  }
  return (
    <div style={styles}>
      <div>
        <h1 style={heading}>Oops!</h1>
        <span style={subHeading} >404 - PAGE NOT FOUND</span>
      </div>
      <div>
        <p>The page you are looking for might have been removed
          <br />
          had its name changed or is temporarily unavailable.</p>
      </div>
      <button class="button-19">GO TO HOMEPAGE</button>
    </div>
  )
}

export default Error404