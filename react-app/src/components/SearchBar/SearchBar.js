import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getResultsThunk } from "../../store/search";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchResults = await dispatch(getResultsThunk(filter, searchInput));

    if (searchResults) {
      return history.push(`/search/?question=${searchInput}&filter=${filter}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="🔍Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
            required
          >
            <option placeholder=""></option>
            <option value={"title"}>By Title</option>
            <option value={"body"}>By Content</option>
            <option value={"tags"}>By Tags</option>
          </select>
        </label>
        <button type="submit">🔍</button>
      </form>
    </div>
  );
};

export default SearchBar;
