import React from "react";

//

function Search({ handleChange }) {
  function onChange(event) {
    handleChange(event.target.value);
  }
  return (
    <input
      type="text"
      className="search-box"
      placeholder="Type in an organisation name"
      onChange={onChange}
    ></input>
  );
}

export default Search;
