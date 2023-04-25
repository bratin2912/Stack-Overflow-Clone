import React from 'react'
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteAnswer } from '../../redux/actions/askQuestion';

import './QuestionDetails.css'
const DisplayAns = ({ answers, handleShare, user,noOfans,id}) => {
    const dispatch=useDispatch();
    const handleDeleteAnswer=(answerId)=>{
        dispatch(deleteAnswer(id,answerId,noOfans-1))
    }
    return (
        <div>
            {
                answers.map(ans => {
                    return (
                        <div className="display-ans" key={ans._id}>
                            <p>{ans.answerBody}</p>
                            <div className="answer-action-user">
                                <div>
                                    <button onClick={handleShare}>Share</button>
                                    {
                                        ans.userId === user?.result._id &&
                                        <button onClick={()=>handleDeleteAnswer(ans._id)}>Delete</button>
                                    }
                                </div>
                                <div>
                                    <p>answered {moment(ans.answeredOn).fromNow()} by</p>
                                    <Link to={`/User/${ans.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                        <Avatar backgroundColor='green' px='10px' py='5px' borderRadius={'2px'}>
                                            {ans.userAnswered[0].toUpperCase()}
                                        </Avatar>
                                        <div>
                                            {ans.userAnswered}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayAns