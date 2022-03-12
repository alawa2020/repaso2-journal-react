import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSignInGoogle } from '../../actions/authActions';

export const LoginScreen = () => {
  //hooks
  const dispatch = useDispatch();

  //functions
  const handleSignInGoogle = () => {
    dispatch(startSignInGoogle());
  };
  return (
    <div className="auth auth-login px-3">
      <h1 className="text-primary text-center">Login</h1>
      <form className="auth-login__form">
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Input your email"
          autoComplete="off"
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Input your password"
          autoComplete="off"
        />

        <div className="d-grid gap-2">
          <button className="btn btn-primary mb-3" type="submit">
            Sign in
          </button>
        </div>
      </form>

      {/* GOOGLE BUTTON */}
      <div className="google-btn mb-3" onClick={handleSignInGoogle}>
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <div className="auth-login__register mb-3">
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </div>
    </div>
  );
};
