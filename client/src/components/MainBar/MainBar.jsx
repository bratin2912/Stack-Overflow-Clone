import React from 'react'
import './Mainbar.css'
import {useLocation,useNavigate} from 'react-router-dom';
import QusetionList from './QusetionList';
import { useSelector } from 'react-redux';
import { askQuestionReducer } from '../../redux/reducer/askQuestion';
import { currentUserReducer } from '../../redux/reducer/currentUser';
const MainBar = () => {
  const location=useLocation();
  const user=useSelector(state=>state.currentUserReducer)
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
  const questionList=useSelector(state=>state.askQuestionReducer)
  console.log(questionList)
  return (
    <div className='mainbar'>
      <div className='mainbar-header'>
        {location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>}
        <button onClick={redirect} className='mainbar-btn'>Ask Question</button>
      </div>
      <div>
        {!questionList.data ? <h1>Loading...</h1>:
          <>
            <p>{questionList.data.length} Questions</p>
            <QusetionList questionList={questionList?.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default MainBar