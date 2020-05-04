import React, { useState, useEffect } from "react";
import { apiUrl } from "../../libs/config";
import SearchInput from "./SearchInput";
import ContactCard from "./OrgCard";

//Search bar input
//on change takes in input - DONE
//fires handleChange which sets searchTerm state to what's inputted - DONE
//fetch org data from DB - DONE
//filters data by org name and renders on page.
//        - Org name
//        - Org image
//        - Org bio - DONE

// On enter key down or just autocomplete similar to WMCA project? - NAH.

//When org is clicked render a card with the full details of that organisation
//

function Search() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState("");

  function handleClick(index) {
    setIsClicked(index);
  }

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
      <p>
        Search our list of organisations and opportunities to see if any turn
        your head!
      </p>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
        {list
          .filter(function (org) {
            return (
              org.orgName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              org.briefBio.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((org, index) =>
            isClicked === index ? (
              <ContactCard org={org} />
            ) : (
              <li onClick={() => handleClick(index)}>
                {org.orgName} {org.briefBio}{" "}
                <img src={org.img} alt={org.briefBio} />{" "}
              </li>
            )
          )}
      </ul>
    </div>
  );
}

export default Search;
