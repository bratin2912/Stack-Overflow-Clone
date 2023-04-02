import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const HomeQuestions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-vote'>
            <p>{question.upVote.length-question.downVote.length}</p>
            <p>Votes</p>
        </div>
        <div className='display-vote-ans'>
            <p>{question.noOfans}</p>
            <p>Answers</p>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
            <div className="display-tags-time">
                <div className="display-tags">
                    {question.questionTags.map(tag=>
                        <p key={tag}>{tag}</p>
                    )}
                </div>
                <div className='display-time'>
                <p >
                    asked {moment(question.postedOn).fromNow()} by {question.userPosted}
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeQuestions