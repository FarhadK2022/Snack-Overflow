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
    console.log(editedData)
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
            <div className="edit-question-title-input-div">
              <label className="edit-questions-title-label">Title: </label>
              <input
                className="edit-question-title-input"
                type='text'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Use a title that will help introduce your issue"
              ></input>
            </div>
            <div className="edit-question-question-textarea-div">
              <label className="edit-questions-question-label">Question: </label>
              <textarea
                className="edit-question-question-textarea"
                type='text'
                name='questiontextarea'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                placeholder="Please provide the specifics about the issue you are trying to get a better grasp of. The more descriptive you are, the better chance you will get a good answer."
              ></textarea>
            </div>
            <div className="edit-question-triedexpected-textarea-div">
              <label className="edit-questions-triedexpected-label">Tried & Expected: </label>
              <textarea
                className="edit-question-triedexpected-textarea"
                type='text'
                name='tetextarea'
                value={tried_expected}
                onChange={(e) => setTried_Expected(e.target.value)}
                required
                placeholder='Please input everything you have tried in relation to the question you are posing. If you have results you can report and compare them potential results you were expecting as an out come, detail them here.'

              ></textarea>
            </div>
            <div className="edit-question-tags-input-div">
              <label className="edit-questions-tags-label">Tags: </label>
              <input
                className="edit-question-tags-input"
                type='text'
                name='tags'
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder='Please enter in the format "Tag1,Tag2,Tag3"'
                // required
              ></input>
            </div>
            <div className="edit-questions-two-button-div">
            <button type='submit' className="submit-edit-question-button">Submit Edited Question</button>
            <button onClick={onCancel} className='close-edit-question-button'>Close</button>
            </div>
          </form>
          </div>
    </div>
  )
}

export default EditQuestionButton
