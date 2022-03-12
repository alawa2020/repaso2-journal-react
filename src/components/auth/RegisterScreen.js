import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAuthSignUp } from '../../actions/authActions';
import { doRemoveError, doSetError } from '../../actions/uiAuthActions';
import { useForm } from '../../hooks/useForm';
import { isValidFormRegister } from '../../utils/isValidFormRegister';
import { ErrorSentForm } from './ErrorSentForm';

const initialForm = {
  name: 'Peter',
  email: 'peter@gmail.com',
  password: '123456',
  password2: '123456',
};

export const RegisterScreen = () => {
  //hooks
  const { formData, handleInputChange } = useForm(initialForm);
  const { name, email, password, password2 } = formData;
  const { error } = useSelector((state) => state.uiAuth);
  const dispatch = useDispatch();

  //functions
  const handleSignUp = (e) => {
    dispatch(doRemoveError());
    e.preventDefault();
    const { isValidForm, error } = isValidFormRegister(
      name,
      email,
      password,
      password2,
    );
    console.log(error);
    if (!isValidForm) {
      dispatch(doSetError(error));
      return;
    }
    dispatch(startAuthSignUp(name, email, password));
  };

  return (
    <div className="auth auth-register px-3">
      {error && <ErrorSentForm errorMessage={error} />}

      <h1 className="text-success text-center">Register</h1>
      <form onSubmit={handleSignUp} className="auth-login__form">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Input your name"
          autoComplete="off"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Repeat your password"
          autoComplete="off"
          name="password2"
          value={password2}
          onChange={handleInputChange}
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
