/* ----------------------------------------------------------------------------
PLAN FOR LOGIN:

- Need logic to listen for auth state change (via Firebase) and set the loggedInUser state accordingly - presumably on this level, so we can conditionally render the org form and the logout button once the user is logged in -> as set up but commented out for now below

- Initial flow:
  1. User goes to org dashboard -> 
  2. User sees login form, where they either register or log in (form can do either) -> 
  3. Once they're logged in, loggedInUser contains user data for their session ->
  4. Login form goes away, and org form and logout button are rendered 

- After the flow above is set up, need to then add in the edit capabilities so that if the user account is already associated with an organisation, the data pulls through into the org form and it then becomes a put rather than a post req to edit their details... No clue yet how to work through this one! One step at a time. Will worry about that once the basic logging in is hooked up and working. 

----------------------------------------------------------------------------*/

import React, { useState } from 'react';
import InputComponent from '../components/InputComponent/index';
import Layout from '../components/Layout';
import Login from '../components/AuthComponents/Login/index';
import LogoutButton from '../components/AuthComponents/LogoutButton/index';

export default function orgForm() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div>
      <Layout>
        {/* {!loggedInUser && <Login /> }*/}
        {/* {loggedInUser && <LogoutButton/>}
        {loggedInUser && <InputComponent/>} */}
        <InputComponent />
      </Layout>
    </div>
  );
}
