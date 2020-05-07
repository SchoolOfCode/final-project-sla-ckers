//----PLAN:-----------------

//Basic login form (and google option) modelled off of what we did during the Firebase lesson
//I've set up my Firebase account with the project as well, so it's ready to receive users once we hook things up

//Define loggedInUser logic at page level and pass to this component as props
//Add email/password fields on org form and the logic that goes with them to register the user's account (and google!)
//Have both login and register buttons - depends on if it's their first visit or logging in again
//Make sure that once the user is logged in, this form is conditionally rendered to no longer show (based on the loggedInUser state)

//---------------------------

import React from 'react';

import css from './login.module.css';

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
    <div className={css.loginFormContainer}>
      <p className={css.loginP}>
        Are you an organisation looking to update your details? Log in here:
      </p>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <label className={css.label}>
          Email:
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formState.email}
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Password:
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={formState.password}
            className={css.input}
          />
        </label>

        <input type="submit" className={css.button} value="Sign in" />
      </form>
      <div className={css.buttonContainer}>
        <button onClick={handleSignInWithPopup} className={css.button}>
          Sign in with your Google account
        </button>
        <button onClick={handleSignup} className={css.button}>
          Sign up as new user
        </button>
      </div>
    </div>
  );
}

export default Login;
