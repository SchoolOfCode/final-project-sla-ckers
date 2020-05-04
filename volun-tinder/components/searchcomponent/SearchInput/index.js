import React from "react";

function SearchInput({ searchTerm, setSearchTerm }) {
  function onChange(event) {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <input
        value={searchTerm}
        type="text"
        className="searchBox"
        placeholder="Type in an organisation name"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default SearchInput;
