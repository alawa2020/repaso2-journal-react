import validator from 'validator';

export const isValidFormRegister = (name, email, password1, password2) => {
  let isValidForm = true;
  let error = '';

  if (validator.isEmpty(name)) {
    error = 'El nombre no puede estar vacío!';
    isValidForm = false;
  } else if (!validator.isEmail(email)) {
    error = 'Ingrese un email válido!';
    isValidForm = false;
  } else if (!validator.equals(password1, password2)) {
    error = 'Las contraseñas deben ser iguales';
    isValidForm = false;
  } else if (password1.trim().length < 6) {
    error = 'La contraseña debe ser al menos de 6 caracteres';
    isValidForm = false;
  }

  return {
    isValidForm,
    error,
  };
};
