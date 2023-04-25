import React from 'react'
import HomeQuestions from './HomeQuestions'
const QusetionList = ({questionList}) => {
  return (
    <>
        {questionList.map(question=>
            <HomeQuestions question={question} key={question._id}/>
        )}
    </>
  )
}

export default QusetionList