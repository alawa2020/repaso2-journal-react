import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <div className="auth auth-register px-3">
      <h1 className="text-success text-center">Register</h1>
      <form className="auth-login__form">
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Input your name"
          autoComplete="off"
        />
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
        <input
          className="form-control mb-3"
          type="password"
          name="password2"
          placeholder="Repeat your password"
          autoComplete="off"
        />

        <div className="d-grid gap-2">
          <button className="btn btn-success mb-3" type="submit">
            Sign up
          </button>
        </div>
      </form>

      <div className="auth-login__register mb-3">
        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </div>
    </div>
  );
};
