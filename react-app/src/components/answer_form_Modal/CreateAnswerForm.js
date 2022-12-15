import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAnswerThunk } from "../../store/answer";
import { useParams } from "react-router-dom";
import { getQuestionByIdThunk } from "../../store/question";
import './answer_form.css'

const CreateAnswerForm = (setShowModal) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([])

  const { questionId } = useParams()


  const minLength = 20

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

  useEffect(() => {
    const err = []

    if(body.length < minLength){
      err.push("The Answer field is required and must be at least 20 characters long")
    }

    setErrors(err)
  }, [body])



  return (
    <div className="create-answer-div">
    <form onSubmit={handleSubmit}>
      <ul>
        {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div>
      <label>
        Answer:
        <br></br>
        <textarea
          className="create-answer-inputField"
          type="text"
          placeholder="Please be detailed in your Answer"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit" className="submit-answer-button">Submit Answer</button>
      </div>
    </form>
    </div>
  );
};

export default CreateAnswerForm;
