import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionByIdThunk, deleteQuestionThunk, addLikeThunk, removeLikeThunk } from '../../store/question';
import { addUpvoteThunk, addDownvoteThunk } from '../../store/answer';
import { useParams, useHistory, Link } from 'react-router-dom';
import './questions_details.css'
import EditQuestionButton from '../edit_question';
import CreateAnswerForm from '../answer_form_Modal/CreateAnswerForm'
import SideNavBar from '../SideNavBar';

const QuestionDetails = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { questionId } = useParams()

    const sessionUser = useSelector(state => state.session.user)

    const questionInfoObj = useSelector(state => {
        return state.questionsReducer.question[questionId]
    })


    // const answerid = questionInfoObj?.answers[0]?.id




    // console.log(questionInfoObj)

    useEffect(() => {
        dispatch(getQuestionByIdThunk(questionId))
    }, [dispatch, questionId])


    const deleteAQuestion = (e, id) => {
        e.preventDefault();
        dispatch(deleteQuestionThunk(id))
        return setTimeout(function () { history.push('/questions'); }, 10);
    }

    const createLike = async (e) => {
        e.preventDefault();
        await dispatch(addLikeThunk(questionId, sessionUser.id))
        await dispatch(getQuestionByIdThunk(questionId))
    }

    const removeLike = async (e) => {
        e.preventDefault();
        await dispatch(removeLikeThunk(questionId, sessionUser.id))
        await dispatch(getQuestionByIdThunk(questionId))
    }

    const createUpvote = async (e, answerid) => {
        e.preventDefault();
        await dispatch(addUpvoteThunk(answerid, sessionUser.id))
        await dispatch(getQuestionByIdThunk(questionId))

        return
    }

    const createDownvote = async (e, answerid) => {
        e.preventDefault();
        await dispatch(addDownvoteThunk(answerid, sessionUser.id))
        await dispatch(getQuestionByIdThunk(questionId))

        return
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        return history.push('/login')
      }


    // if(!questionInfoObj){
    //     return null
    // }

    const currentLike = questionInfoObj?.who_liked.filter((obj) => {
        return sessionUser?.id === obj.id
    })

    // const currentVote = questionInfoObj?.answers.filter((obj) => {
    //     return sessionUser?.id === obj.id
    // })

    return (
        <div className='main-container'>
            <div>
                <SideNavBar />
            </div>
            <div>
                <div> Title: {questionInfoObj?.title} </div>
                <div> Question: {questionInfoObj?.question}</div>
                <div> Tried & Expected: {questionInfoObj?.tried_expected} </div>
                <div> Tags: {questionInfoObj?.tags.split(',').join(' ')} </div>
                <div>  Likes: {questionInfoObj?.likes}    {(sessionUser && currentLike?.length === 0) && sessionUser.id !== questionInfoObj.user_id ? <button onClick={createLike}><i className="fa fa-heart" /></button> : null}
                    {sessionUser && currentLike?.length >= 1 ? <button onClick={removeLike}><i className="fa fa-times" /></button> : null}</div>
                <div> Answers: {questionInfoObj?.answers.map((obj) => {
                    // {console.log("THIS IS OBJ", obj)}
                    return <li key={obj.id}>{obj?.body} Votes: {obj?.votes} {sessionUser && sessionUser.id !== obj.user_id ? <button onClick={(e) => createUpvote(e, obj.id)}> <i className="fa fa-arrow-up" /> </button> : null}
                    {sessionUser && sessionUser.id !== obj.user_id ? <button onClick={(e) => createDownvote(e, obj.id)}> <i className="fa fa-arrow-down" /> </button> : null}
                        {sessionUser && (sessionUser.id === obj?.user_id ? <Link to={`/edit/answers/${obj.id}`}>Edit Answer</Link> : null)}</li>
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
                <div>
                    {sessionUser ? null : <button onClick={onSubmit}>Submit Answer</button>}
                </div>
            </div>
        </div>

    )
}

export default QuestionDetails
