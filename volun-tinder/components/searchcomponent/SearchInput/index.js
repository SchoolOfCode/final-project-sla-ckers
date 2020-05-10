import React from "react";

import css from "./searchInput.module.css";

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

      {/* <label>
        Search by number of hours
        <p>
          <select
            name="category"
            onChange={onChange}
            value={searchTerm}
            id="hoursSearch"
            // className={css.dropdown}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
      </label> */}
    </div>
  );
}

export default SearchInput;
