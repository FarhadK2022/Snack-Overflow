import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideNavBar from '../SideNavBar';
import './SearchResultsPage.css'

const SearchResults = () => {
  const searchObj = useSelector((state) => {
    return state;
  });

  const search = Object.values(searchObj.searchReducer.allResults);

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
                      <h1 className='all-questions-header'>Results</h1>
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
                                  <p className='question-detail-tags'>[{obj.tags}]</p>
                                  : null}
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
