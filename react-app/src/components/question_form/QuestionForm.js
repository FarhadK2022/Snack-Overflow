import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
// import { signUp } from '../../store/session';
import * as questionActions from '../../store/question'

const QuestionForm = () => {
  // const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [tried_expected, setTried_Expected] = useState('');
  const [tags, setTags] = useState('');
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

//   if (user) {
//     return <Redirect to='/' />;
//   }

// onSubmit={onSignUp}
  return (
    <form onSubmit={onSubmit}>
      {/* <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
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
        <label>Question</label>
            <textarea
            type='text'
            name='questiontextarea'
            onChange={questionSet}
            value={question}>

            </textarea>
      </div>
      <div>
        <label>Tried & Expected</label>
            <textarea
            type='text'
            name='tetextarea'
            onChange={teSet}
            value={tried_expected}>

            </textarea>
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
      <button type='submit'>Submit Question</button>
    </form>
  );
};

export default QuestionForm;
