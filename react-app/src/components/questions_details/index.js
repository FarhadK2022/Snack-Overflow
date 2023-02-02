import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getQuestionByIdThunk,
    deleteQuestionThunk,
    addLikeThunk,
    removeLikeThunk,
} from "../../store/question";
import { addUpvoteThunk, addDownvoteThunk } from "../../store/answer";
import { useParams, useHistory, Link } from "react-router-dom";
import "./questions_details.css";
import CreateAnswerForm from "../answer_form_Modal/CreateAnswerForm";
import SideNavBar from "../SideNavBar";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

const QuestionDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { questionId } = useParams();

    const [confirm, setConfirm] = useState(false)

    const sessionUser = useSelector((state) => state.session.user);

    const questionInfoObj = useSelector((state) => {
        return state.questionsReducer.question[questionId];
    });

    useEffect(() => {
        dispatch(getQuestionByIdThunk(questionId));
    }, [dispatch, questionId]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    // const deleteAQuestion = (e, id) => {
    //     e.preventDefault();
    //     dispatch(deleteQuestionThunk(id))
    //     return setTimeout(function () { history.push('/questions'); }, 10);
    // }

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

        return;
    };

    const createDownvote = async (e, answerid) => {
        e.preventDefault();
        await dispatch(addDownvoteThunk(answerid, sessionUser.id))
        await dispatch(getQuestionByIdThunk(questionId))

        return
    }

    const confirmDelete = (e) => {
        e.preventDefault();
        setConfirm(true)
    }

    const theSetConfirm = () => {
        setConfirm(false)
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        return history.push('/login')
    }


    const currentLike = questionInfoObj?.who_liked.filter((obj) => {
        return sessionUser?.id === obj.id
    })

    const tagsArray = questionInfoObj?.tags.split(",").join(',').split(',')

    return (
        <div className="main-container">
            <div className="side-navbar-for-pages">
                <SideNavBar />
            </div>
            <div className="questions-info-container">
                <h1 className="question-info-title"> {questionInfoObj?.title} </h1>
                <div className="top-q-info-page">
                    <div className="question-info-likes">
                        {" "}
                        <div className="like-symbol-likeval">
                            {questionInfoObj?.likes}{" "}
                        </div>
                        {sessionUser && sessionUser?.id !== questionInfoObj?.user_id && currentLike?.length === 0 ? (
                            <button className="question-like-button" onClick={createLike}>
                                <IconContext.Provider value={{ size: '1.9em', color: 'red' }}>
                                    <FaHeart />
                                </IconContext.Provider>
                            </button>
                        ) : null}
                        {sessionUser && currentLike?.length >= 1 ? (
                            <button className="question-unlike-button" onClick={removeLike}>

                                <IconContext.Provider value={{ size: '1.9em', color: 'black' }}>
                                    <FaHeartBroken />
                                </IconContext.Provider>
                            </button>
                        ) : null}
                    </div>
                    <div className="question-info">
                        <div> {questionInfoObj?.question}</div>
                        <div> {questionInfoObj?.tried_expected} </div>
                        <div> Tags: {tagsArray?.map((tag, idx) => {
                            return <Link key={idx} to='/work-in-progress' className="question-details-tag-link">[{tag}]</Link>
                        })} </div>
                        <span className="user-circle-span">{" "}
                            <i className="fa-solid fa-circle-user" />{" "}
                            {questionInfoObj?.user_questions.username}
                        </span>
                        <div className="question-buttons">
                            <div>
                                {sessionUser &&
                                    (sessionUser.id === questionInfoObj?.user_id && (
                                        <Link exact="true" to={`/edit/questions/${questionId}`}>
                                            <button className="edit-question-button">
                                                Edit Question
                                            </button>
                                        </Link>
                                    ))}
                            </div>
                            <div>
                                {sessionUser &&
                                    (sessionUser.id === questionInfoObj?.user_id ? (
                                        <button
                                            onClick={(event) => confirmDelete(event)}
                                            className="question-delete-button"
                                        >
                                            {" "}
                                            Delete Question{" "}
                                        </button>
                                    ) : null)}
                                {confirm ? <ConfirmDelete confirm={confirm} setconfirm={theSetConfirm} /> : ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mid-q-info-page">
                    <div className="question-info-answer">
                        {" "}
                        Answers:{" "}
                        {questionInfoObj?.answers.sort((a, b) => {
                            return b.votes - a.votes
                        }).map((obj) => {
                            return (
                                <li className='specific-answer' key={obj.id}>
                                    <div className="answer-voting">
                                        {sessionUser && sessionUser.id !== obj.user_id ?
                                            <>
                                                <button className="answer-vote-button-up" onClick={(e) => createUpvote(e, obj.id)}>
                                                    {" "}
                                                    <i className="fa fa-arrow-up fa-2x" />{" "}
                                                </button>{" "}
                                            </>
                                            : <>
                                                <button className="answer-vote-button-up-non-logged">
                                                    {" "}
                                                    <i className="fa fa-arrow-up fa-2x" />{" "}
                                                </button>{" "}
                                            </>}
                                        <div className="question-details-vote-number">{obj?.votes}{" "}</div>
                                        {sessionUser && sessionUser.id !== obj.user_id ?
                                            <>
                                                <button className="answer-vote-button-down" onClick={(e) => createDownvote(e, obj.id)}>
                                                    {" "}
                                                    <i className="fa fa-arrow-down fa-2x" />{" "}
                                                </button>{" "}
                                            </>
                                            : <>
                                                <button className="answer-vote-button-down-non-logged">
                                                    {" "}
                                                    <i className="fa fa-arrow-down fa-2x" />{" "}
                                                </button>{" "}
                                            </>}
                                    </div>
                                    <div className="answer-voting-body">
                                        {obj?.body}{" "}
                                        {sessionUser &&
                                            (sessionUser.id === obj?.user_id ? (
                                                <Link to={`/edit/${questionId}/answers/${obj.id}`} className='question-details-edit-answer-link'>Edit Answer</Link>
                                            ) : null)}
                                    </div>
                                </li>
                            );
                        })}
                        <div className="question-info-answer-bottom">
                            {sessionUser &&
                                (sessionUser.id === questionInfoObj?.user_id ? null : (
                                    <CreateAnswerForm />
                                ))}
                        </div>
                        <div className="question-info-answer-bottom">
                            {!sessionUser ? <button onClick={onSubmit}>Login to answer</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetails;
