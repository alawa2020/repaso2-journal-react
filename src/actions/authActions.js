import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Swal from 'sweetalert2';

import { auth } from '../firebase/config';
import { types } from '../types/types';

//* ACTIONS SINCRONOS

export const doAuthLogin = (uid, name) => ({
  type: types.authLogin,
  payload: {
    uid,
    name,
  },
});

export const doAuthSignOut = () => ({
  type: types.authLogout,
});

//* ACTIONS ASINCRONOS
export const startAuthSignUp = (name, email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(user, { displayName: name });
      dispatch(doAuthLogin(user.uid, user.displayName));
      Swal.fire('Registro exitoso!', 'Sesión iniciada', 'success');
    } catch (err) {
      console.log({ err });
      Swal.fire('Ocurrió un error!', err.message, 'error');
    } finally {
      console.log('raaaa');
    }
  };
};

export const startSignInEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(doAuthLogin(user.uid, user.displayName));
      Swal.fire('Sesión iniciada!', 'Bienvenido de nuevo', 'success');
    } catch (err) {
      console.log({ err });
      Swal.fire('Ocurrió un error!', err.message, 'error');
    }
  };
};

export const startSignInGoogle = () => {
  return async (dispatch) => {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, googleAuthProvider);
      dispatch(doAuthLogin(user.uid, user.displayName));
      Swal.fire('Registro exitoso!', 'Sesión iniciada', 'success');
    } catch (err) {
      console.log({ err });
      Swal.fire('Ocurrió un error!', err.message, 'error');
    }
  };
};

export const startAuthSignOut = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      Swal.fire('Sesión cerrada!', 'Hasta pronto', 'success');
      dispatch(doAuthSignOut());
    } catch (err) {
      console.log({ err });
    }
  };
};
