import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createAnswerThunk } from "../../store/answer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getQuestionByIdThunk } from "../../store/question";

const CreateAnswerForm = (setShowModal) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [body, setBody] = useState("");
  const { questionId } = useParams()


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newAnswer = {
  //     body,
  //   };

  //   const createdAnswer = await dispatch(createAnswerThunk(newAnswer, questionId, sessionUser));

  //   if (createdAnswer) {
  //     setShowModal(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAnswer = {
      questionId,
      user_id: sessionUser.id,
      body,
    };

    await dispatch(createAnswerThunk(newAnswer));
    setBody('');
    return await dispatch(getQuestionByIdThunk(questionId))


  };

  // useEffect(() => {
  //   dispatch(getQuestionByIdThunk(questionId))
  // }, [dispatch, questionId])


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Answer
        <input
          className="inputField"
          type="text"
          placeholder="Please be detailed in your Answer"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></input>
      </label>

      <button type="submit">Submit Answer</button>
    </form>
  );
};

export default CreateAnswerForm;
