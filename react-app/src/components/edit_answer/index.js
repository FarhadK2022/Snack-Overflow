import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as questionActions from '../../store/question'
import { useParams, useHistory } from 'react-router-dom';
import { deleteAnswerThunk, editAnswerThunk } from "../../store/answer";

function EditAnswerButton() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { answerid } = useParams()


  const currQuestion = useSelector(state => {

    return state.questionsReducer.question
  })

  const currAnswer = Object.values(currQuestion)[0].answers

  const answerFilter = currAnswer.filter(obj => {
    return obj.id === +answerid
  })


  const [body, setBody] = useState(answerFilter[0]?.body)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const err = []

    if(body.length < 20){
      err.push("The Answer field is required and must be at least 20 characters long")
    }

    setErrors(err)
  }, [body])

  const answerSet = (e) => {
    setBody(e.target.value);
  };

  const questionId = Object.values(currQuestion)[0]?.id
  const editCurrentAnswer = async (e) => {
    e.preventDefault();
    setSubmitted(true)
    if (errors.length > 0) return
    const editedAnswer = {
      body,
      answerid
    }

    await dispatch(editAnswerThunk(editedAnswer))


    // await dispatch(getAllAnswersThunk)

    // await setShowForm(false)
    setSubmitted(false)
    return history.push(`/questions/${questionId}`)
  }

  const deleteCurrentAnswer = async (e) => {
    e.preventDefault();

    await dispatch(deleteAnswerThunk(answerid))

    return history.push(`/questions/${questionId}`)
  }


  return (
    <>

      <form onSubmit={editCurrentAnswer} className="edit-answer-form">
        {submitted && errors.length > 0 && (
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}
        <div>
          <label>Answer:</label>
          <textarea
            type='text'
            name='answer-body'
            value={body}
            onChange={answerSet}
          ></textarea>
        </div>
        <button type='submit'>Submit Edited Answer</button>
        <button onClick={deleteCurrentAnswer} className='delete-button'> Delete Answer </button>
        {/* <button onClick={() => setShowForm(false)} className='close-edit-answer-button'>Close</button> */}
      </form>
      {/* : (<button onClick={() => setShowForm(true)} className='edit-answer-button'> Edit Answer</button>
        ) */}

    </>
  )
}

export default EditAnswerButton
