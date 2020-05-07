import React from 'react';

import css from './searchInput.module.css';

function SearchInput({ searchTerm, setSearchTerm }) {
  function onChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <input
        value={searchTerm}
        type="text"
        className={css.searchBox}
        placeholder="Start searching here"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default SearchInput;
