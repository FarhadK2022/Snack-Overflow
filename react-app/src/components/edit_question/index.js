import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as questionActions from '../../store/question'
import { useParams, useHistory } from 'react-router-dom';
import { getQuestionByIdThunk } from "../../store/question";

// import { useHistory } from 'react'



function EditQuestionButton() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { questionId } = useParams()
  const currentQuestion = useSelector(state => state.questionsReducer.allQuestions[questionId])


  const [title, setTitle] = useState(currentQuestion.title)
  const [question, setQuestion] = useState(currentQuestion.question)
  const [tried_expected, setTried_Expected] = useState(currentQuestion.tried_expected)
  const [tags, setTags] = useState(currentQuestion.tags)
  const [showForm, setShowForm] = useState(false)

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

  const abcd = async (e) => {
    await setShowForm(false)
  }


  const editCurrentQuestion = async (e) => {
    e.preventDefault();

    const editedQuestion = {
      questionId, title, question, tried_expected, tags
    }

    await dispatch(questionActions.editQuestionThunk(editedQuestion))


    await dispatch(questionActions.getQuestionByIdThunk(questionId))

    await setShowForm(false)
    return setTimeout(function () { history.push(`/questions/${questionId}`) }, 10);
  }

  useEffect(() => {
    dispatch(getQuestionByIdThunk(questionId))
  }, [dispatch, questionId])



  return (
    <>
      {
        showForm ?
          <form onSubmit={editCurrentQuestion} className="editquestion-form">
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
            <button type='submit'>Submit Edited Question</button>
            <button onClick={() => setShowForm(false)} className='closeedit-button'>Close</button>
          </form> : (<button onClick={() => setShowForm(true)} className='edit-question-button'> Edit Question</button>
          )}
    </>
  )
}

export default EditQuestionButton
