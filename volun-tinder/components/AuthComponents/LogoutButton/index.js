//----PLAN:-----------------

//This could show if an org is logged in, giving them the option to sign out on any page

//Pass handleSignout in as a prop ✅

//---------------------------

import React from 'react';

import css from './logoutButton.module.css';

function LogoutButton({ handleSignout }) {
  return (
    <div>
      <button onClick={handleSignout} className={css.logoutButton}>
        Sign out
      </button>
    </div>
  );
}

export default LogoutButton;
