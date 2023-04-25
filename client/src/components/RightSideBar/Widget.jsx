import React from 'react';
import pen from '../../assets/pen-solid.svg';
import message from '../../assets/message-solid.svg';
import smallLogo from '../../assets/stack-overflow.svg';
import './RightSideBar.css';
const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='widget-div1'>
        <img src={pen} alt="pen" width='15' />
        <p>Observability is key to the future of software (and your DevOps career)</p>
      </div>
      <div className='widget-div2'>
        <img src={pen} alt="pen" width='15' />
        <p>Podcast 374: How valuable is your screen name?</p>
      </div>
      <h4>Featured on Meta</h4>
      <div className='widget-div1'>
        <img src={message} alt="message" width='15' />
        <p>Review queue workflows - Final release....</p>
      </div>
      <div className='widget-div2'>
        <img src={message} alt="message" width='15' />
        <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
      </div>
      <div className='widget-div3'>
        <img src={smallLogo} alt="smallLogo0" width='15' />
        <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='widget-div1'>
        <p>18</p>
        <p>Why was this spam flag declined, yet the question marked as spam?</p>
      </div>
      <div className='widget-div2'>
        <p>20</p>
        <p>What is the best course of action when a user has high enough rep to..</p>
      </div>
      <div className='widget-div3'>
        <p>38</p>
        <p>
          Is a link to the "How to ask" help page a useful comment?</p>
      </div>
    </div>
  )
}

export default Widget