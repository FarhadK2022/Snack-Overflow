import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  Redirect } from "react-router-dom";
import { getResultsThunk } from "../../store/search";
import './SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("title");

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await dispatch(getResultsThunk(filter, searchInput));
    if(searchResults) return;
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        defaultValue={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        required
        className="search-bar"
      />
      <label>
        Filters
      <select
          className="queryParams"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value={'title'}>By Title</option>
          <option value={'body'}>By Content</option>
          <option value={'tags'}>By Tags</option>
        </select>
      </label>
       <button type="submit">Search</button>
    </form>
    <Redirect to={`/search/?question=${searchInput}&filter=${filter}`}/>
  </div>
  );
};

export default SearchBar;
