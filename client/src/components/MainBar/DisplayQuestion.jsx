import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
import QuestionDetails from './QuestionDetails';
const DisplayQuestion = () => {
    return (
        <div className='home-container1'>
            <LeftSideBar />
            <div className='home-container2'>
                <QuestionDetails/>
                <RightSideBar />
            </div>
        </div>
    )
}

export default DisplayQuestion