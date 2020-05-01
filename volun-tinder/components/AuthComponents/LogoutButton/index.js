//----PLAN:-----------------

//This could show in the header if an org is logged in, giving them the option to sign out on any page

//TODO: Put in header with condition to only show if a user is logged in (NOTE: I've added the conditional rendering here, but it could also be done where the component is called!)
//TODO: Pass handleSignout and loggedInUser in as a prop

//---------------------------

import React from 'react';

function LogoutButton({ loggedInUser, handleSignout }) {
  return (
    <div>
      {loggedInUser && <button onClick={handleSignout}>Sign out</button>}
    </div>
  );
}

export default LogoutButton;
