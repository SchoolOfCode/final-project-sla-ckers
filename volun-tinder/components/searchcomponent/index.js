import React, { useState, useEffect } from "react";

//Search bar input
//on change

function Search({ handleChange }) {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${SERVER_URL}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  function handleChange(value) {
    setSearchTerm(value);
  }

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
