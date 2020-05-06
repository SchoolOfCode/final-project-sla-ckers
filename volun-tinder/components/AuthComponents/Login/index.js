//----PLAN:-----------------

//Basic login form (and google option) modelled off of what we did during the Firebase lesson
//I've set up my Firebase account with the project as well, so it's ready to receive users once we hook things up

//TODO: Define loggedInUser logic at page level and pass to this component as props
//TODO: Add email/password fields on org form and the logic that goes with them to register the user's account (and google!)
//TODO: Have both login and register buttons - depends on if it's their first visit or logging in again
//TODO: Make sure that once the user is logged in, this form is conditionally rendered to no longer show (based on the loggedInUser state)

//---------------------------

import React from 'react';

function Login({
  setFormState,
  formState,
  handleSubmit,
  handleSignInWithPopup,
  handleSignup,
}) {
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormState({ ...formState, [name]: value });
  }

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
      {/* <button onClick={handleSignInWithPopup}>
        Sign in with your Google account
      </button> */}
      <button onClick={handleSignup}>Sign up as new user</button>
    </div>
  );
}

export default Login;
