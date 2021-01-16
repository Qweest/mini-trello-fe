import {
  email,
  FormValidator,
  length,
  required,
  matchPasswords,
} from '../../utils/formValidation';
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
} from './constants';

export const signInValidator = {
  email: [required('The email field is required'), email()],
  password: [
    required('The password field is required'),
    length('Invalid password length', MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH),
  ],
};

export const signUpValidator = (password: string): FormValidator => ({
  username: [
    required('The username field is required'),
    length('Invalid username length', MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH),
  ],
  email: [required('The email field is required'), email()],
  password: [
    required('The password field is required'),
    length('Invalid password length', MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH),
  ],
  confirmPassword: [
    required('The confirm password field is required'),
    matchPasswords("Passwords don't match", password),
  ],
});
