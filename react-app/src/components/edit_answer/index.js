import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { deleteAnswerThunk, editAnswerThunk } from "../../store/answer";
import './edit_answer.css'

function EditAnswerButton() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { answerid } = useParams()


  const currQuestion = useSelector(state => {

    return state.questionsReducer.question
  })

  const currAnswer = Object.values(currQuestion)[0]?.answers

  const answerFilter = currAnswer?.filter(obj => {
    return obj.id === +answerid
  })


  const [body, setBody] = useState(answerFilter ? answerFilter[0]?.body : 'Loading')

  const answerSet = (e) => {
    setBody(e.target.value);
  };

  const questionId = Object.values(currQuestion)[0]?.id
  const editCurrentAnswer = async (e) => {
    e.preventDefault();

    const editedAnswer = {
      body,
      answerid
    }

    await dispatch(editAnswerThunk(editedAnswer))


    // await dispatch(getAllAnswersThunk)

    // await setShowForm(false)

    return history.push(`/questions/${questionId}`)
  }

  const deleteCurrentAnswer = async (e) => {
    e.preventDefault();

    await dispatch(deleteAnswerThunk(answerid))

    return history.push(`/questions/${questionId}`)
  }


  return (
    <div className="edit-answer-container-div">
      <form onSubmit={editCurrentAnswer} className="edit-answer-form">
        <div>
          <label className="edit-answer-label">Answer:</label>
          <div className="edit-answer-text-area-div">
          <textarea
            className="edit-answer-text-area"
            type='text'
            name='answer-body'
            value={body}
            onChange={answerSet}
          ></textarea>
          </div>
        </div>
        <div className="edit-answer-button-duo">
        <button type='submit' className="submit-edited-answer-button">Submit Edited Answer</button>
        <button onClick={deleteCurrentAnswer} className='delete-edited-answer-button'> Delete Answer </button>
        </div>
      </form>
    </div>
  )
}

export default EditAnswerButton
