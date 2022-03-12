import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  startSignInEmailPassword,
  startSignInGoogle,
} from '../../actions/authActions';
import { doRemoveError, doSetError } from '../../actions/uiAuthActions';
import { useForm } from '../../hooks/useForm';
import { isValidFormLogin } from '../../utils/isValidFormLogin';
import { ErrorSentForm } from './ErrorSentForm';

const initialForm = {
  email: '',
  password: '',
};

export const LoginScreen = () => {
  //hooks
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.uiAuth);
  const { formData, handleInputChange } = useForm(initialForm);
  const { email, password } = formData;
  //functions
  const handleSignInGoogle = () => {
    dispatch(startSignInGoogle());
  };

  const handleSignInEmailPassword = (e) => {
    e.preventDefault();
    dispatch(doRemoveError());
    const { error, isValidForm } = isValidFormLogin(email, password);
    if (!isValidForm) {
      dispatch(doSetError(error));
      return;
    }
    dispatch(startSignInEmailPassword(email, password));
  };
  return (
    <div className="auth auth-login px-3">
      {error && <ErrorSentForm errorMessage={error} />}
      <h1 className="text-primary text-center">Login</h1>
      <form className="auth-login__form" onSubmit={handleSignInEmailPassword}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Input your email"
          autoComplete="off"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Input your password"
          autoComplete="off"
          name="password"
          value={password}
          onChange={handleInputChange}
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
