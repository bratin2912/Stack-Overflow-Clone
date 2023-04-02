import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import upVote from '../../../src/assets/upVote.png';
import downVote from '../../../src/assets/downVote.png';
import { askQuestionReducer } from '../../redux/reducer/askQuestion';
import { useSelector } from 'react-redux';
import './QuestionDetails.css';
import DisplayAns from './DisplayAns';
const QuestionDetails = () => {
    const { id } = useParams();
    const questionList = useSelector(state => state.askQuestionReducer);
    return (
        <div className='question-details'>
            {
                questionList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {questionList.data.filter(question => question._id === id).map(question => {
                            return (
                                <div key={question._id}>
                                    <section className='question-details-container-1'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className='question-details-votes'>
                                                <img src={upVote} alt="upVote" width='50' className='votes-icon' />
                                                <p>{question.upVote - question.downVote}</p>
                                                <img src={downVote} alt="downVote" width='50' className='votes-icon' />
                                            </div>
                                            <div style={{ width: '100%' }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className="question-tags">
                                                    {question.questionTags.map(tag => {
                                                        return <p key={tag}>{tag}</p>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="question-action-user">
                                            <div>
                                                <button>Share</button>
                                                <button>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked on {question.postedOn}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' state={{ color: '#0086d8' }}>
                                                    <Avatar backgroundColor='orange' px='10px' py='5px' borderRadius='2px'>
                                                        {question.userPosted[0].toUpperCase()}
                                                    </Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>
            {question.noOfans !== 0 &&
                <section>
                    <h3>{question.noOfans}</h3>
                    <DisplayAns key={question._id} answers={question.answer} />
                </section>
            }
            <section className='post-ans-container'>
                <h3>Your Answer</h3>
                <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea><br />
                    <input type="Submit" value='Post Your Answer' className='post-ans-btn' />
                </form>
                <p>
                    Browse other Question tagged
                    {
                        question.questionTags.map(tag => {
                            return <Link to='/Tgas' key={tag} className='ans-tags'> {tag}</Link>
                        })
                    } or
                    <Link to='/AskQuestion' className='ans-tags-div'>ask your own question</Link>
                </p>
            </section>
        </div>
    )
})}
                    </>
        }
        </div >
    )
}

export default QuestionDetails