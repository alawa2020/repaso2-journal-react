import { types } from '../types/types';

//* ACTIONS SINCRONOS

export const doLogin = (uid, name) => ({
  type: types.authLogin,
  payload: {
    uid,
    name,
  },
});

export const doLogout = () => ({
  type: types.authLogout,
});

//* ACTIONS ASINCRONOS
