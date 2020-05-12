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

//When org is clicked render a card with the full details of that organisation - DONE

//Add searchability by number of hours to spare
//        - Drop down menu to select this
//        - Update handle function to take in this number and set the searchTerm
//        - TODO: Update filter in Search function to include number of hours

function Search() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchHours, setSearchHours] = useState(0); //
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
        <h1 className={css.searchHeader}>In the mood for a bit of a browse?</h1>
        <h3 className={css.searchIntro}>
          See all of the organisations looking for volunteers below. Click on
          each organisation for more information about their opportunities
          available.
        </h3>
        <h3 className={css.searchIntro}>
          Use the search below to narrow down the list to see if any turn your
          head:
        </h3>
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          // searchHours={searchHours}
          // setSearchHours={setSearchHours}
        />
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
                <h3 className={css.orgHeader}>{org.orgName}</h3>
                <p>{org.briefBio}</p>
                <img
                  src={org.img}
                  alt={org.briefBio}
                  className={css.orgImg}
                />{' '}
                <br />
                <span className={css.clickToExpand}>
                  Click for more details
                </span>
              </li>
            )
          )}
      </FlipMove>
    </div>
  );
}

export default Search;
