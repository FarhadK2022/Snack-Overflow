import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
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
      return searchResults
    } else {
      return setErrors([
        " Please refine your search and try again!"
      ]);
    }
  };
  console.log(searchInput)

  return (

    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type="search"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
        className="search-bar"
      />
      <button type="submit" className="search-button">Search</button>
    </form>

  );
};

export default SearchBar;
