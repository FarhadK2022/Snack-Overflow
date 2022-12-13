import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getResultsThunk } from "../../store/search";
import './SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    const searchResults = await dispatch(
      getResultsThunk(searchInput)
    )

    if (searchResults) {
      return <Redirect to='/search' />;
    } else {
      return setErrors([
        " Please refine your search and try again!"
      ]);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
        className="search-bar"
      />
      <button type="submit">Search</button>
    </form>

  );
};

export default SearchBar;
