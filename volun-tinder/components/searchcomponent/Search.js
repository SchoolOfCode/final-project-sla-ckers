import React from "react";

//Search bar input
//on change

function Search({ handleChange }) {
  function onChange(event) {
    handleChange(event.target.value);
  }
  return (
    <input
      type="text"
      className="searchBox"
      placeholder="Type in an organisation name"
      onChange={onChange}
    ></input>
  );
}

export default Search;
