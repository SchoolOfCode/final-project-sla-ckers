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
        const orgs = data.map((org) => org);
        setList(orgs);
        console.log(orgs);
      });
  }, []);

  return (
    <div>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
        {list.map((org) => (
          <li>
            {org.orgName} {org.briefBio}{" "}
            <img src={org.img} alt={org.briefBio} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
