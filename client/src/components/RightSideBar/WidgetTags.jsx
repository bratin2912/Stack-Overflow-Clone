import React from 'react'
import './RightSideBar.css'
const WidgetTags = () => {
  const tags=['c','cpp','react','express','node','prthon','php','c#','django','angular','.net'];
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map(tag=>{
            return(
              <p key={tag}>{tag}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default WidgetTags