import React, { useState } from "react";
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
