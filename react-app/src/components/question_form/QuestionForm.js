import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
// import { signUp } from '../../store/session';
import * as questionActions from '../../store/question'



const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [tried_expected, setTried_Expected] = useState('');
  const [tags, setTags] = useState('');
  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false)
  // const [titleError, setTitleError] = useState("")
  // const [teError, setTeError] = useState("")
  // const [logicCheck, setLogicCheck] = useState(false)

  const dispatch = useDispatch();

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)
    if (errors.length > 0) return
    const createdQuestion = {
        title, question, tried_expected, tags
    }

    await dispatch(questionActions.createQuestionThunk(createdQuestion))

    let path = `/questions`;
    await history.push(path);
    setSubmitted(false)
  }

  const minLength = 20

  const titleSet = (e) => {
    setTitle(e.target.value);
  };

  const questionSet = (e) => {
    setQuestion(e.target.value);
  };

  const teSet = (e) => {
    setTried_Expected(e.target.value);
  };

  const tagSet = (e) => {
    setTags(e.target.value);
  };


  useEffect(() => {
    const errors = []
    if (title.length < minLength) {
      errors.push("The Title field is required and must be at least 20 characters long")
    }
    if (question.length < minLength) {
      errors.push("The Question field is required and must be at least 20 characters long")
    }

    if (tried_expected.length < minLength) {
      errors.push("The Tried & Expected field is required and must be at least 20 characters long")
    }

    setErrors(errors)
    return () => setErrors([])
  }, [title, question, tried_expected])

  // const logicSwap = errorMessage.length > 0 ? !logicCheck : logicCheck

  return (
    <form onSubmit={onSubmit}>
      {submitted && (
      <ul>
        {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      )}
      <div>
        <label>Title</label>
        <input
          type='text'
          name='title'
          onChange={titleSet}
          value={title}
        ></input>
      </div>
      {/* <div>
        {titleError}
      </div> */}
      <div>
        <label>Question</label>
            <textarea
            type='text'
            name='questiontextarea'
            onChange={questionSet}
            value={question}
            ></textarea>
      </div>
      <div>
      </div>
      <div>
        <label>Tried & Expected</label>
          <textarea
            type='text'
            name='tetextarea'
            onChange={teSet}
            value={tried_expected}
          ></textarea>
      </div>
      {/* <div>
        {teError}
      </div> */}
      <div>
        <label>Tags</label>
        <input
          type='text'
          name='tags'
          onChange={tagSet}
          value={tags}
        ></input>
      </div>
      <button type='submit'>Submit Question</button>
    </form>
  );
};

export default QuestionForm;
