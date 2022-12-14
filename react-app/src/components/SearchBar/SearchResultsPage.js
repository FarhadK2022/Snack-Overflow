import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const searchObj = useSelector((state) => {
    return state;
  });

  const search = Object.values(searchObj.searchReducer.allResults);

  if (search.length === 0) {
    return (
      <div>
        <h1>⚠️🍽⚠️</h1>
        <h2>🍩No Results Found🍩</h2>
        <h3>☞Please Check Your Search a🔍nd Try Again☜</h3>
      </div>
    );
  } else {
    return (
      <div className="search-results-div">
        <h2>
          {search.map((obj) => {
            return (
              <div key={obj.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/questions/${obj.id}`}
                >
                  <p>Title: {obj.title}</p>
                  {/*

                           */}
                </Link>
              </div>
            );
          })}
        </h2>
      </div>
    );
  }
};

export default SearchResults;
