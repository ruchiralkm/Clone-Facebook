import React from 'react';
import NavBar from '../../Components/Navigation/NavBar';
import './Home.css'
import LeftSide from '../../Components/LeftSide/LeftSide';
import CenterSide from '../../Components/CenterSide/CenterSide';
import RightSide from '../../Components/RightSide/RightSide';


export default function Home() {
  return (
    <div>
        <NavBar/>
      <div className='bottomContainer'>
        <LeftSide/>
        <CenterSide/>
        <RightSide/>
      </div>

    </div>
  )
}
