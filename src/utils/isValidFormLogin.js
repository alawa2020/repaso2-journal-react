import validator from 'validator';

export const isValidFormLogin = (email, password) => {
  let isValidForm = true;
  let error = '';

  if (!validator.isEmail(email)) {
    error = 'Ingrese un email válido!';
    isValidForm = false;
  } else if (password.trim().length < 6) {
    error = 'La contraseña debe ser al menos de 6 caracteres';
    isValidForm = false;
  }

  return {
    isValidForm,
    error,
  };
};
