import React, { useState, useEffect } from "react";
import { apiUrl } from "../../libs/config";
import SearchInput from "./SearchInput";

//Search bar input
//on change takes in input
//fires handleChange which sets searchTerm state to what's inputted
//fetches org data from DB
//filters data by org name and renders on page.
//        - Org name
//        - Org image
//        - Org bio

// On enter key down or just autocomplete similar to WMCA project?

function Search() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <div>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {list}
    </div>
  );
}

export default Search;
