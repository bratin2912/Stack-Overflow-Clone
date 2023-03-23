import React from 'react';
import './Askquestion.css'
const Askquestion = () => {
  return (
    <div className='ask-question'>
      <div className="ask-question-container">
        <h1>Ask a Public Question</h1>
        <form>
          <div className="ask-from-container">
            <label htmlFor="ask-qus-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input type="text" id='ask-qus-title' placeholder='e.g Is there an R function for finding the index of an element in a vector' />
            </label>
            <label htmlFor="ask-qus-body">
              <h4>What are the details of your problem?</h4>
              <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
              <textarea name="" id="ask-qus-body" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="ask-qus-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
              <input type="text" id='ask-qus-tags' placeholder='e.g ios ruby objective-c' />
            </label>
          </div>
          <input type="submit" value='Review Your Question' className='review-btn'/>
        </form>
      </div>
    </div>
  )
}

export default Askquestion