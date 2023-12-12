import React from 'react'
import OurLeaderShip from '../components/Leadership/OurLeaderShip'
import HeaderImageComp from '../components/pageHeaderImageComp/HeaderImageComp'
import Team from './img/team2.jpg'
const LeaderShip = () => {
  return (
    <>
      <HeaderImageComp bgImage={Team}  pageName={'Our LeaderShip'} heading={'Our Team'}  />
        <OurLeaderShip/>
    </>
  )
}

export default LeaderShip