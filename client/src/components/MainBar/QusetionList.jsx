import React from 'react'
import HomeQuestions from './HomeQuestions'
const QusetionList = ({questionList}) => {
  return (
    <>
        {questionList.map(question=>
            <HomeQuestions question={question}/>
        )}
    </>
  )
}

export default QusetionList