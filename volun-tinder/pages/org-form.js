/* ----------------------------------------------------------------------------
PLAN FOR LOGIN:

- Need logic to listen for auth state change (via Firebase) and set the loggedInUser state accordingly - presumably on this level, so we can conditionally render the org form and the logout button once the user is logged in -> as set up but commented out for now below.

- Initial flow:
  1. User goes to org dashboard -> 
  2. User sees login form, where they either register or log in (form can do either) -> 
  3. Once they're logged in, loggedInUser contains user data for their session ->
  4. Login form goes away, and org form and logout button are rendered 

- After the flow above is set up, need to then add in the edit capabilities so that if the user account is already associated with an organisation, the data pulls through into the org form and it then becomes a put rather than a post req to edit their details... No clue yet how to work through this one! One step at a time. Will worry about that once the basic logging in is hooked up and working. 

- Test accounts:
  test@testy.test, pass: testing

----------------------------------------------------------------------------*/

import React, { useState } from 'react';
import InputComponent from '../components/InputComponent/index';
import Layout from '../components/Layout';
import Login from '../components/AuthComponents/Login/index';
import LogoutButton from '../components/AuthComponents/LogoutButton/index';

import firebase from '../libs/firebase';

export default function OrgForm() {
  //state for the logged in user; this way it'll trigger a re-render and store the user object in here:
  const [loggedInUser, setLoggedInUser] = useState(null);
  //form state that holds the info from the login and/or register form
  const [formState, setFormState] = useState({ email: '', password: '' });

  //Observer that watches out for change of auth state (i.e. a login):
  //FIXME: From Chris: "should this be in a useEffect on component mount? It's setting up a listener I think, which you probably only need to do once rather then on every render"
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // If there's a user object, user is signed in
      let email = user.email;
      console.log(`${email} is logged in`);
    } else {
      // If there's no user object, user is signed out
      console.log('no user signed in');
    }
    //Sets the loggedInUser state with the user object:
    setLoggedInUser(user);
    console.log(user);
  });

  //Function hooked up to signup button in login form
  function handleSignup() {
    //Gets the details from the form:
    const email = formState.email;
    const password = formState.password;
    //TODO: FIXME:Remove this console.log once tested!
    console.log({ email, password });
    //Tells Firebase to make the new user:
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.error(error);
      });
    //Clears the form after it sends the details to Firebase:
    setFormState({ email: '', password: '' });
    console.log(`new user signed up with email ${email}`);
  }

  //Logs in an existing user:
  function handleSubmit(event) {
    event.preventDefault();
    //gets info from login form:
    const email = formState.email;
    const password = formState.password;
    //TODO: FIXME:Remove this console.log once tested!
    console.log({ email, password });
    //passes it to Firebase and tells it to sign the user in with these credentials:
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        //handles wrong password with specific alert to user:
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
          //handles other errors with more general alert:
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    //clears out the form once it's done:
    setFormState({ email: '', password: '' });
    console.log('login finished');
  }

  //Signs out signed-in user:
  function handleSignout() {
    //Does what it says on the tin! Tells Firebase to log 'em out:
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('user logged out');
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  //Calls on a new instance of Google's sign-in doohickey:
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  //Sign in with google:
  function handleSignInWithPopup() {
    //Tells Firebase to open Google popup using the instance called on above, then the popup takes it from there:
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      <Layout>
        {!loggedInUser && (
          <Login
            formState={formState}
            setFormState={setFormState}
            handleSubmit={handleSubmit}
            handleSignInWithPopup={handleSignInWithPopup}
            handleSignup={handleSignup}
          />
        )}
        {loggedInUser && <LogoutButton handleSignout={handleSignout} />}
        {loggedInUser && <InputComponent />}
      </Layout>
    </div>
  );
}
