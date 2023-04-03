import React from 'react'
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './QuestionDetails.css'
const DisplayAns = ({answers,handleShare}) => {

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
                                    <button>Delete</button>
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