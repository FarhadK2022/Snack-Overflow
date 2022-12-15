import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from '../../store/question'
import { useParams, useHistory } from 'react-router-dom';
import { getQuestionByIdThunk } from "../../store/question";
import './edit_question.css'

// import { useHistory } from 'react'



function EditQuestionButton() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { questionId } = useParams()
  const currentQuestion = useSelector(state => state.questionsReducer.allQuestions[questionId])


  const [title, setTitle] = useState(currentQuestion?.title)
  const [question, setQuestion] = useState(currentQuestion?.question)
  const [tried_expected, setTried_Expected] = useState(currentQuestion?.tried_expected)
  const [tags, setTags] = useState(currentQuestion?.tags)
  const [showForm, setShowForm] = useState(false)
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false)

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



  const editCurrentQuestion = async (e) => {
    e.preventDefault();
    setSubmitted(true)
    if (errors.length > 0) return
    const editedQuestion = {
      questionId, title, question, tried_expected, tags
    }

    await dispatch(questionActions.editQuestionThunk(editedQuestion))


    await dispatch(questionActions.getQuestionByIdThunk(questionId))

    await setShowForm(false)
    setSubmitted(false)
    return setTimeout(function () { history.push(`/questions/${questionId}`) }, 10);
  }

  useEffect(() => {
    dispatch(getQuestionByIdThunk(questionId))
    const errors = []
    if (title?.length < 20) {
      errors.push("The Title field is required and must be at least 20 characters long")
    }
    if (question?.length < 20) {
      errors.push("The Question field is required and must be at least 20 characters long")
    }

    if (tried_expected?.length < 20) {
      errors.push("The Tried & Expected field is required and must be at least 20 characters long")
    }

    setErrors(errors)
    return () => setErrors([])
  }, [dispatch, questionId, title, question, tried_expected])



  return (
    <div className="edit-container">
      {
        showForm ?
          <form onSubmit={editCurrentQuestion} className="editquestion-form">
            {submitted && (
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>
            )}
            <div>
              <label>Title</label>
              <input
                type='text'
                name='title'
                onChange={titleSet}
                value={title}
                required
              ></input>
            </div>
            <div>
              <label>Question</label>
              <textarea
                type='text'
                name='questiontextarea'
                onChange={questionSet}
                value={question}
                required
              ></textarea>
            </div>
            <div>
              <label>Tried & Expected</label>
              <textarea
                type='text'
                name='tetextarea'
                onChange={teSet}
                value={tried_expected}
                required
              ></textarea>
            </div>
            <div>
              <label>Tags</label>
              <input
                type='text'
                name='tags'
                onChange={tagSet}
                value={tags}
                required
              ></input>
            </div>
            <button type='submit'>Submit Edited Question</button>
            <button onClick={() => setShowForm(false)} className='closeedit-button'>Close</button>
          </form> : (<button onClick={() => setShowForm(true)} className='edit-question-button'> Edit </button>
          )}
    </div>
  )
}

export default EditQuestionButton
