import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionByIdThunk, deleteQuestionThunk } from '../../store/question';
import { useParams, useHistory } from 'react-router-dom';
import './questions_details.css'
import EditQuestionButton from '../edit_question';
import CreateAnswerFormModal from '../answer_form_Modal'

const QuestionDetails = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { questionId } = useParams()

    const sessionUser = useSelector(state => state.session.user)


    const questionInfoObj = useSelector(state => {
        return state.questionsReducer.question[questionId]
    })


    useEffect(() => {
        dispatch(getQuestionByIdThunk(questionId))
      }, [dispatch, questionId])


    const deleteAQuestion = (e, id) => {
    e.preventDefault();
    dispatch(deleteQuestionThunk(id))
    return setTimeout(function () { history.push('/questions'); }, 10);
    }

    if(!questionInfoObj){
        return null
    }

    return (
        <div>
            <div> Title: {questionInfoObj.title} </div>
            <div> Question: {questionInfoObj.question}</div>
            <div> Tried & Expected: {questionInfoObj.tried_expected} </div>
            <div> Tags: {questionInfoObj.tags} </div>

            <div>
            {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? <button onClick={(event) => deleteAQuestion(event, questionId)} className='delete-button'> Delete Question </button> : null)}
            </div>
            <div>
            {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? <EditQuestionButton /> : null)}
            </div>

            <div>
            {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? null : <CreateAnswerFormModal />)}
            </div>
        </div>
    )

}

export default QuestionDetails
