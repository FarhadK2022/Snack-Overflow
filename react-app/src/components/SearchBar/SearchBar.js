import React, { useState } from "react";
// import { useDispatch } from "react-redux";


const SearchBar = () => {
  // const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    const searchResults = await fetch(`/api/search?question=${searchInput}`)
    return searchResults
  };
  console.log(searchInput)

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="search"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
      />

    <button type="submit">Search</button>

    </form>
  );
};

export default SearchBar;
