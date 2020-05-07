import React, { useState, useEffect } from 'react';
import { apiUrl } from '../../../libs/config';
import SearchInput from '../SearchInput';
import OrgCard from '../OrgCard';
import css from './search.module.css';
import FlipMove from 'react-flip-move';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [isClicked, setIsClicked] = useState('');

  function handleClick(index) {
    setIsClicked(index);
  }

  function handleClose() {
    setIsClicked('');
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
      <div className={css.searchContainer}>
        <p>
          Search our list of organisations and opportunities to see if any turn
          your head!
        </p>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <FlipMove className={css.ul} typeName="ul">
        {list
          .filter(function (org) {
            return (
              org.orgName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              org.briefBio.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((org, index) =>
            isClicked === index ? (
              <OrgCard
                org={org}
                handleClose={handleClose}
                className={css.orgCard}
              />
            ) : (
              <li className={css.card} onClick={() => handleClick(index)}>
                {org.orgName} {org.briefBio}
                <br></br>
                <img
                  src={org.img}
                  alt={org.briefBio}
                  className={css.orgImg}
                />{' '}
              </li>
            )
          )}
      </FlipMove>
    </div>
  );
}

export default Search;
