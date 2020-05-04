//----PLAN:-----------------

//Basic login form (and google option) modelled off of what we did during the Firebase lesson
//I've set up my Firebase account with the project as well, so it's ready to receive users once we hook things up

//My code I'm using as an example to shape this from: https://github.com/lizkaufman/first-firebase-auth-app

//TODO: Add in logic on form page to define states and fxs passed down to this component as props
//TODO: Add email/password fields on org form and the logic that goes with them to register the user's account (perhaps a section of the form that also has an update with the google option?)
//TODO: Have an option that an org can choose from on the page (i.e. buttons) - if they're new, it takes them to the full form, and if they're returning, it shows them this login form instead
//TODO: Make sure that once the user is logged in, this form is conditionally rendered to no longer show (based on the loggedInUser state)

//---------------------------

import React from 'react';

function Login({
  handleSubmit,
  handleChange,
  formState,
  handleSignInWithPopup,
}) {
  return (
    <div>
      <p>
        Are you an organisation looking to update your details? Log in here:
      </p>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={formState.email}
        />
        <label>Password: </label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formState.password}
        />
        <input type="submit" />
      </form>
      <button onClick={handleSignInWithPopup}>
        Sign in with your Google account
      </button>
    </div>
  );
}

export default Login;
