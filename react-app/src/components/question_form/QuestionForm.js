import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as questionActions from "../../store/question";
import "./QuestionForm.css";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [tried_expected, setTried_Expected] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (errors.length > 0) return;
    const createdQuestion = {
      title,
      question,
      tried_expected,
      tags,
    };

    const submittedQuestion = await dispatch(questionActions.createQuestionThunk(createdQuestion));

    let path = `/questions/${submittedQuestion.id}`;
    await history.push(path);
    setSubmitted(false);
  };

  const minLength = 20;

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

  useEffect(() => {
    const errors = [];
    if (title.length < minLength) {
      errors.push(
        "The Title field is required and must be at least 20 characters long"
      );
    }
    if (question.length < minLength) {
      errors.push(
        "The Question field is required and must be at least 20 characters long"
      );
    }

    if (tried_expected.length < minLength) {
      errors.push(
        "The Tried & Expected field is required and must be at least 20 characters long"
      );
    }

    setErrors(errors);
    return () => setErrors([]);
  }, [title, question, tried_expected]);

  return (
    <>
      <div className='main-sign-up-container-1'>
        <div className='join-site-container'>
          <div className="question-form-container">
            <h1 className="join-site-text">What can the Snack Overflow community help with?</h1>
            <div className="whole-sign-up-form">

              <form onSubmit={onSubmit}>
                {submitted && (
                  <ul>
                    {errors?.map((error, idx) => (
                      <li key={idx}>{error}</li>
                    ))}
                  </ul>
                )}
                <div className='sign-up-form-fields'>
                  <label className='sign-up-form-fields-label'>Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={titleSet}
                    value={title}
                    className='sign-up-form-inputs-1'
                    placeholder="Use a title that will help introduce your issue"
                  ></input>
                </div>
                <div className='sign-up-form-fields'>
                  <label className='sign-up-form-fields-label'>Question</label>
                  <textarea
                    rows={10}
                    type="text"
                    name="questiontextarea"
                    onChange={questionSet}
                    value={question}
                    className='sign-up-form-inputs-1'
                    style={{ resize: "none" }}
                    placeholder="Please provide the specifics about the issue you are trying to get a better grasp of. The more descriptive you are, the better chance you will get a good answer."
                  ></textarea>
                </div>

                <div className='sign-up-form-fields'>
                  <label className='sign-up-form-fields-label'>Tried & Expected</label>
                  <textarea
                    rows={5}
                    type="text"
                    name="tetextarea"
                    onChange={teSet}
                    value={tried_expected}
                    placeholder='Please input everything you have tried in relation to the question you are posing. If you have results you can report and compare them potential results you were expecting as an out come, detail them here.'
                    className='sign-up-form-inputs-1'
                    style={{ resize: "none" }}

                  ></textarea>
                </div>

                <div className='sign-up-form-fields'>
                  <label className='sign-up-form-fields-label'>Tags</label>
                  <input
                    height={100}
                    type="text"
                    name="tags"
                    onChange={tagSet}
                    value={tags}
                    placeholder='Tags to increase reach of your question'
                    className='sign-up-form-inputs-1'
                  ></input>
                </div>
                <button className='sign-up-button-submit' type="submit">Submit Question</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
