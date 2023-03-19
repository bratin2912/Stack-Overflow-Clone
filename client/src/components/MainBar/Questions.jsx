import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
import MainBar from './MainBar';
import '../../App.css';
const Questions = () => {
  return (
    <div className='home-container1'>
        <LeftSideBar/>
        <div className='home-container2'>
            <MainBar/>
            <RightSideBar/>
        </div>
    </div>
  )
}

export default Questions