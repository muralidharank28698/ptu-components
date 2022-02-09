import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput(props) {
  const handleOnSubmit = () => {};
  return (
    <form {...props} onSubmit={handleOnSubmit}>
      <input
        name="search"
        type="text"
        id="search-input__text-input"
        className="search-input__text-input"
        placeholder="search..."
      />
      <span className="search-input__search-btn">
        <button type="submit">
          <FaSearch />
        </button>
      </span>
    </form>
  );
}

export default SearchInput;
