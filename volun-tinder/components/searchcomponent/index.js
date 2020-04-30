import React, { useState, useEffect } from "react";

//Search bar input
//on change takes in input and sets the search term
//fires handleChange which fetches organisation data from DB
//renders organisation data
//        - Org name
//        - Org image

// On enter key down or just autocomplete similar to WMCA project?

function Search({ handleChange }) {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://hnyslsh8ne.execute-api.eu-west-1.amazonaws.com/dev/orgs`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setList(data);
      });
  }, []);

  function handleChange(value) {
    setSearchTerm(value);
  }

  function onChange(event) {
    handleChange(event.target.value);
    console.log(event.target.value);
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
