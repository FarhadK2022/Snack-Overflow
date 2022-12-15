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
  const [errorMessage, setErrorMessage] = useState([])
  const [titleError, setTitleError] = useState("")
  const [teError, setTeError] = useState("")
  const [logicCheck, setLogicCheck] = useState(false)

  const dispatch = useDispatch();

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    const createdQuestion = {
        title, question, tried_expected, tags
    }

    await dispatch(questionActions.createQuestionThunk(createdQuestion))

    let path = `/questions`;
    await history.push(path);
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
    const err = []
    if (title.length < minLength) {
      err.push("The Title field is required and must be at least 20 characters long")
    }
    if (question.length < minLength) {
      err.push("The Question field is required and must be at least 20 characters long")
    }

    if (tried_expected.length < minLength) {
      err.push("The Tried & Expected field is required and must be at least 20 characters long")
    }

    setErrorMessage(err)
  }, [title, question, tried_expected])

  const logicSwap = errorMessage.length > 0 ? !logicCheck : logicCheck

  return (
    <form onSubmit={onSubmit}>
      <ul>
        {errorMessage?.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div>
        <label>Title</label>
        <input
          type='text'
          name='title'
          onChange={titleSet}
          value={title}
        ></input>
      </div>
      <div>
        {titleError}
      </div>
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
      <div>
        {teError}
      </div>
      <div>
        <label>Tags</label>
        <input
          type='text'
          name='tags'
          onChange={tagSet}
          value={tags}
        ></input>
      </div>
      <button type='submit' disabled={logicSwap}>Submit Question</button>
    </form>
  );
};

export default QuestionForm;
