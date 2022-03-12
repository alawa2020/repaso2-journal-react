import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

import { types } from '../types/types';

//* ACTIONS SINCRONOS

export const doAuthLogin = (uid, name) => ({
  type: types.authLogin,
  payload: {
    uid,
    name,
  },
});

export const doAuthLogout = () => ({
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
