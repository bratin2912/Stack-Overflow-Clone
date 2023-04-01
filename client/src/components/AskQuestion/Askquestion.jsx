import {React,useState} from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { askQuestion } from '../../redux/actions/askQuestion';
import { currentUserReducer } from '../../redux/reducer/currentUser';
import './Askquestion.css'
const Askquestion = () => {
  const [askQuestionData, setaskQuestionData] = useState({questionTitle:"",questionBody:"",questionTags:[]});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const User=useSelector(state=>state.currentUserReducer);
  const handleenter=(e)=>{
    if(e.keyCode===13){
      setaskQuestionData({...askQuestionData,questionBody:askQuestionData.body+"/n"})
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(askQuestionData);
    dispatch(askQuestion({...askQuestionData,userPosted:User.result.name},navigate))
  }
  return (
    <div className='ask-question'>
      <div className="ask-question-container">
        <h1>Ask a Public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-from-container">
            <label htmlFor="ask-qus-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input type="text" id='ask-qus-title' placeholder='e.g Is there an R function for finding the index of an element in a vector' onChange={(e)=>setaskQuestionData({...askQuestionData,questionTitle:e.target.value})}/>
            </label>
            <label htmlFor="ask-qus-body">
              <h4>What are the details of your problem?</h4>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <textarea name="" id="ask-qus-body" cols="30" rows="10" onChange={(e)=>setaskQuestionData({...askQuestionData,questionBody:e.target.value})} onKeyUp={handleenter}></textarea>
            </label>
            <label htmlFor="ask-qus-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
              <input type="text" id='ask-qus-tags' placeholder='e.g ios ruby objective-c' onChange={(e)=>setaskQuestionData({...askQuestionData,questionTags:e.target.value.split(/\s+/)})}/>
            </label>
          </div>
          <input type="submit" value='Review Your Question' className='review-btn'/>
        </form>
      </div>
    </div>
  )
}

export default Askquestion