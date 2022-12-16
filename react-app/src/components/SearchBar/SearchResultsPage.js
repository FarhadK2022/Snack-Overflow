import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SideNavBar from '../SideNavBar';
import './SearchResultsPage.css'

const SearchResults = () => {
  const searchObj = useSelector((state) => {
    return state;
  });

  const history = useHistory()
  const search = Object.values(searchObj.searchReducer.allResults);

  const askQuestionButton = (e) => {
    e.preventDefault()
    return history.push('/ask')
  }

  if (search.length === 0) {
    return (
      <>
        <div>
          <SideNavBar />
        </div>
        <div className="no-results-found">
          <h1>
            <i className="fa-solid fa-triangle-exclamation fa-10x"></i>
          </h1>
          <h1>No Results Found</h1>
          <h2>Please Check Your Search and Try Again</h2>
        </div>
      </>
    );
  } else {
    return (
      <div className='main-container'>
        <div>
          <SideNavBar />
        </div>

        <div className='questions-div'>
          <div className='top-container'>

            <div className='all-questions-and-button'>
              <span className='all-questions-header'>Results</span>
              <button className='ask-question-button' onClick={(event => askQuestionButton(event))}>Ask Question</button>
            </div>

            <span className='question-count'>{search.length} questions</span>
          </div>
          {search.map((obj) => {
            return (
              <div key={obj.id} className="question-detail">
                <div className='question-detail-container'>
                  <div className='likes-answers'>
                    <span className='likes-count-question'>{obj.likes} likes</span>
                    <span className='answer-count'>{obj.answers.length} answers</span>

                  </div>
                  <Link className='title-link' style={{ textDecoration: 'none' }} to={`/questions/${obj.id}`}>
                    <p>{obj.title}</p>
                  </Link>
                  <p className='question-tried-expected-all-questions'>{obj.question} {obj.tried_expected.substring(0, 24)}...</p>
                  {obj.tags ?
                    <p className='question-detail-tags'>{obj.tags.split(',').join(', ').split(',').map((tag) => {
                      return <Link to='/work-in-progress' className="questions-tag-link">[{tag}]</Link>
                  })}</p>
                    : null}
                    <span className='username-all-questions'>{" "}
                      <i className="fa-solid fa-circle-user" />{" "}
                       {obj.user_questions.username}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
};

export default SearchResults;
