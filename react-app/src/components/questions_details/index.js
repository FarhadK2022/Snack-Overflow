import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionByIdThunk, deleteQuestionThunk, addLikeThunk, removeLikeThunk } from '../../store/question';
import { addUpvoteThunk, addDownvoteThunk } from '../../store/answer';
import { useParams, useHistory, Link } from 'react-router-dom';
import './questions_details.css'
import EditQuestionButton from '../edit_question';
import CreateAnswerForm from '../answer_form_Modal/CreateAnswerForm'

const QuestionDetails = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { questionId } = useParams()

    const sessionUser = useSelector(state => state.session.user)


    const questionInfoObj = useSelector(state => {
        return state.questionsReducer.question[questionId]
    })

    console.log(questionInfoObj)
    const answerid = questionInfoObj?.answers[0]?.id

    useEffect(() => {
        dispatch(getQuestionByIdThunk(questionId))
      }, [dispatch, questionId])


    const deleteAQuestion = (e, id) => {
    e.preventDefault();
    dispatch(deleteQuestionThunk(id))
    return setTimeout(function () { history.push('/questions'); }, 10);
    }

    const userId = sessionUser?.id

    const createLike = async (e) => {
        e.preventDefault();
        await dispatch(addLikeThunk(questionId, userId))
        await dispatch(getQuestionByIdThunk(questionId))
    }

    const removeLike = async (e) => {
        e.preventDefault();
        await dispatch(removeLikeThunk(questionId, userId))
        await dispatch(getQuestionByIdThunk(questionId))
    }

    const createUpvote = async (e) => {
        e.preventDefault();
        await dispatch(addUpvoteThunk(answerid, userId))
        await dispatch(getQuestionByIdThunk(questionId))
    }

    const createDownvote = async (e) => {
        e.preventDefault();
        await dispatch(addDownvoteThunk(answerid, userId))
        await dispatch(getQuestionByIdThunk(questionId))
    }



    // if(!questionInfoObj){
    //     return null
    // }
    const currentLike = questionInfoObj?.who_liked.filter((obj) => {
        return sessionUser?.id === obj.id
    })
    // console.log("@@@@@@@@", currentLike)
    const currentVote = questionInfoObj?.answers.filter((obj) => {
        return sessionUser?.id === obj.id
    })

    // console.log("@@@@@@@@", currentVote)

    return (
        <div>
            <div> Title: {questionInfoObj?.title} </div>
            <div> Question: {questionInfoObj?.question}</div>
            <div> Tried & Expected: {questionInfoObj?.tried_expected} </div>
            <div> Tags: {questionInfoObj?.tags.split(',').join(' ')} </div>
            <div>  Likes: {questionInfoObj?.likes}    {sessionUser && currentLike?.length === 0 ? <button onClick={createLike}><i className="fa fa-heart" /></button> : null}
            {sessionUser && currentLike?.length >= 1 ? <button onClick={removeLike}><i className="fa fa-times" /></button> : null}</div>
            <div> Answers: {questionInfoObj?.answers.map((obj) => {
                // {console.log("THIS IS OBJ", obj)}
                return <li key={obj.id}>{obj?.body} Votes: {obj?.votes} <button onClick={createUpvote}> <i className="fa fa-arrow-up" /> </button> <button onClick={createDownvote}> <i className="fa fa-arrow-down" /> </button>
                {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? <Link to={`/edit/answers/${obj.id}`}>Edit Answer</Link> : null)}</li>
            })}  </div>

            <div>
            {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? <button onClick={(event) => deleteAQuestion(event, questionId)} className='delete-button'> Delete Question </button> : null)}
            </div>
            <div>
            {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? <EditQuestionButton /> : null)}
            </div>

            <div>
            {sessionUser && (sessionUser.id === questionInfoObj?.user_id ? null : <CreateAnswerForm />)}
            </div>
        </div>
    )

}

export default QuestionDetails
