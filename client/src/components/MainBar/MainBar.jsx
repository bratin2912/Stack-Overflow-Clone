import React from 'react'
import './Mainbar.css'
import {useLocation,useNavigate} from 'react-router-dom';
import QusetionList from './QusetionList';
const MainBar = () => {
  const location=useLocation();
  const QuestionsList=1;
  const user=1;
  const navigate=useNavigate();
  const redirect=()=>{
    if(user===null){
      alert("To Ask a question first login or signup");
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestion')
    }
  }
  const qus=[
    {
      id:1,
      votes:4,
      numberOfVotes:6,
      title:'What is function',
      body:'It mean to be',
      tags:['java','node js','react js'],
      by:'mano',
      askedOn:'jan 1'
    },
    {
      id:2,
      votes:4,
      numberOfVotes:10,
      title:'What is function',
      body:'It mean to be',
      tags:['java','node js','react js'],
      by:'mano',
      askedOn:'jan 1'
    },
    {
      id:1,
      votes:3,
      numberOfVotes:25,
      title:'What is function',
      body:'It mean to be',
      tags:['java','node js','react js'],
      by:'mano',
      askedOn:'jan 1'
    }
  ]
  return (
    <div className='mainbar'>
      <div className='mainbar-header'>
        {location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>}
        <button onClick={redirect} className='mainbar-btn'>Ask Question</button>
      </div>
      <div>
        {!QuestionsList ? <h1>Loading...</h1>:
          <>
            <p>{qus.length} Questions</p>
            <QusetionList questionList={qus}/>
          </>
        }
      </div>
    </div>
  )
}

export default MainBar