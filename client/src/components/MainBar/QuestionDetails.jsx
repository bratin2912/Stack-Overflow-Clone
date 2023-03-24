import React from 'react'
import { useParams } from 'react-router-dom'
const QuestionDetails = () => {
    const {id}=useParams();
    const questionList=null;
    return (
        <div className='question-details'>
            {
                questionList === null ?
                    <h1>Loading...</h1> :
                    <>
                        {questionList.filter(question=>question._id===id).map(question=>{
                            return(
                                <div key={question._id}>
                                    <section className='question-details-container-1'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className='question-details-votes'>
                                                <img src="" alt="" />
                                                <p>{question.upVotes - question.downVotes}</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )
                        })}
                    </>
        }
        </div>
    )
}

export default QuestionDetails