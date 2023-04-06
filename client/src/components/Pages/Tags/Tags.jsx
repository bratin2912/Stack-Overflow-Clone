import React from 'react'
import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import TagsList from './TagsList';
const Tags = () => {
    return (
        <div className='home-container1'>
            <LeftSideBar />
            <div className='home-container2'>
                <h1>Tags</h1>
                <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                <TagsList/>
            </div>
        </div>
    )
}

export default Tags