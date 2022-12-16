import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editQuestionThunk } from '../../store/question'
import { useParams, useHistory } from 'react-router-dom';
import './edit_question.css'


function EditQuestionButton() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { questionId } = useParams()

  const currentQuestion = useSelector(state => state.questionsReducer.question[questionId])

  const [title, setTitle] = useState(currentQuestion?.title)
  const [question, setQuestion] = useState(currentQuestion?.question)
  const [tried_expected, setTried_Expected] = useState(currentQuestion?.tried_expected)
  const [tags, setTags] = useState(currentQuestion?.tags)
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {

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
  }, [title, question, tried_expected])

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (errors.length > 0) return
    const updatedData = {
      questionId,
      title,
      question,
      tried_expected,
      tags
    }
    const editedData = await dispatch(editQuestionThunk(updatedData))
    // console.log(editedData)
    if (editedData) {
      history.push(`/questions/${questionId}`)
    }
    setSubmitted(false)
  }

  const onCancel = () => {
    history.push(`/questions/${questionId}`)
  }

  return (
    <div className="edit-container">

        <div className="inner-edit">
          <form onSubmit={onSubmit} className="editquestion-form">
            {submitted && errors.length > 0 && (
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>Question</label>
              <textarea
                type='text'
                name='questiontextarea'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label>Tried & Expected</label>
              <textarea
                type='text'
                name='tetextarea'
                value={tried_expected}
                onChange={(e) => setTried_Expected(e.target.value)}
                required
              ></textarea>
            </div>
            <div>
              <label>Tags</label>
              <input
                type='text'
                name='tags'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
              ></input>
            </div>
            <button type='submit'>Submit Edited Question</button>
            <button onClick={onCancel} className='closeedit-button'>Close</button>
          </form>
          </div>
    </div>
  )
}

export default EditQuestionButton
