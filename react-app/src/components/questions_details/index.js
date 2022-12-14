import { useEffect } from "react";
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
import EditQuestionButton from "../edit_question";
import CreateAnswerForm from "../answer_form_Modal/CreateAnswerForm";
import SideNavBar from "../SideNavBar";

const QuestionDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { questionId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);

  const questionInfoObj = useSelector((state) => {
    return state.questionsReducer.question[questionId];
  });

  useEffect(() => {
    dispatch(getQuestionByIdThunk(questionId));
  }, [dispatch, questionId]);

  const deleteAQuestion = (e, id) => {
    e.preventDefault();
    dispatch(deleteQuestionThunk(id));
    return setTimeout(function () {
      history.push("/questions");
    }, 10);
  };

  const userId = sessionUser?.id;

  const createLike = async (e) => {
    e.preventDefault();
    await dispatch(addLikeThunk(questionId, userId));
    await dispatch(getQuestionByIdThunk(questionId));
  };

  const removeLike = async (e) => {
    e.preventDefault();
    await dispatch(removeLikeThunk(questionId, userId));
    await dispatch(getQuestionByIdThunk(questionId));
  };

  const createUpvote = async (e, answerid) => {
    e.preventDefault();
    await dispatch(addUpvoteThunk(answerid, userId));
    await dispatch(getQuestionByIdThunk(questionId));

    return;
  };

  const createDownvote = async (e, answerid) => {
    e.preventDefault();
    await dispatch(addDownvoteThunk(answerid, userId));
    await dispatch(getQuestionByIdThunk(questionId));

    return;
  };

  const currentLike = questionInfoObj?.who_liked.filter((obj) => {
    return sessionUser?.id === obj.id;
  });

  const currentVote = questionInfoObj?.answers.filter((obj) => {
    return sessionUser?.id === obj.id;
  });

  return (
    <div className="main-container">
      <div>
        <SideNavBar />
      </div>
      <div className="questions-info-container">
        <h1 className="question-info-title"> {questionInfoObj?.title} </h1>
        <div className="top-q-info-page">
          <div className="question-info-likes">
            {" "}
            {questionInfoObj?.likes}{" "}
            {sessionUser && currentLike?.length === 0 ? (
              <button className="question-like-button" onClick={createLike}>
                <i className="fa fa-heart" />
              </button>
            ) : null}
            {sessionUser && currentLike?.length >= 1 ? (
              <button className="question-like-button" onClick={removeLike}>
                <i className="fa fa-times" />
              </button>
            ) : null}
          </div>
          <div className="question-info">
            <div> {questionInfoObj?.question}</div>
            <div> {questionInfoObj?.tried_expected} </div>
            <div> Tags: {questionInfoObj?.tags.split(",").join(" ")} </div>
            <div className="question-buttons">
              <div>
                {sessionUser &&
                  (sessionUser.id === questionInfoObj?.user_id ? (
                    <EditQuestionButton />
                  ) : null)}
              </div>
              <div>
                {sessionUser &&
                  (sessionUser.id === questionInfoObj?.user_id ? (
                    <button
                      onClick={(event) => deleteAQuestion(event, questionId)}
                      className="delete-button"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  ) : null)}
              </div>
            </div>
          </div>
        </div>
        <div className="mid-q-info-page">
          <div className="question-info-answer">
            {" "}
            Answers{" "}
            {questionInfoObj?.answers.map((obj) => {
              return (
                <li key={obj.id}>
                  <div className="answer-voting">
                    <button onClick={(e) => createUpvote(e, obj.id)}>
                      {" "}
                      <i className="fa fa-arrow-up" />{" "}
                    </button>{" "}
                    {obj?.votes}{" "}
                    <button onClick={(e) => createDownvote(e, obj.id)}>
                      {" "}
                      <i className="fa fa-arrow-down" />{" "}
                    </button>{" "}
                  </div>
                  <div className="answer-voting-body">
                    {obj?.body}{" "}
                    {sessionUser &&
                      (sessionUser.id === obj?.user_id ? (
                        <Link to={`/edit/answers/${obj.id}`}>Edit Answer</Link>
                      ) : null)}
                  </div>
                </li>
              );
            })}
          </div>
        </div>
        <div className="bottom-q-info-page">
          <div className="question-info-answer">
            {sessionUser &&
              (sessionUser.id === questionInfoObj?.user_id ? null : (
                <CreateAnswerForm />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails;
