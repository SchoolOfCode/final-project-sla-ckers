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
        <br />
        <label>Password: </label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={formState.password}
        />
        <br />
        <input type="submit" />
      </form>
      <button onClick={handleSignInWithPopup}>
        Sign in with your Google account
      </button>
    </div>
  );
}

export default Login;
