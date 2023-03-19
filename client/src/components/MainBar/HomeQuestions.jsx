import React from 'react'
import {Link} from 'react-router-dom'
const HomeQuestions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-vote'>
            <p>{question.votes}</p>
            <p>Votes</p>
        </div>
        <div className='display-vote-ans'>
            <p>{question.numberOfVotes}</p>
            <p>Answers</p>
        </div>
        <div className='display-question-details'>
            <Link to={`/Questions/${question.id}`} className='question-title-link'>{question.title}</Link>
            <div className="display-tags-time">
                <div className="display-tags">
                    {question.tags.map(tag=>
                        <p key={tag}>{tag}</p>
                    )}
                </div>
                <div className='display-time'>
                <p >
                    asked on {question.askedOn} by {question.by}
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeQuestions