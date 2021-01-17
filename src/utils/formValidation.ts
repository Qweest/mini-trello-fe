import reduce from 'lodash/reduce';

import { isEmpty, isEmail, isLength } from './validation';

export interface FormValidator {
  [fieldName: string]: FieldValidator<string>[];
}

export interface FieldValidator<T> {
  (value: T): string;
}

export interface MessageFieldValidator<T> {
  (errorMessage?: string, ...args: any[]): FieldValidator<T>;
}

export const validateForm = (
  values: any,
  formValidator: FormValidator,
): any => {
  return reduce(
    formValidator,
    (errors, fieldValidators, fieldName) => {
      const errorMessage = validateField(values[fieldName], fieldValidators);

      if (errorMessage) {
        return {
          ...errors,
          [fieldName]: errorMessage,
        };
      }

      return errors;
    },
    {},
  );
};

export const validateField = <T = string>(
  value: T,
  validators: FieldValidator<T>[],
): string => {
  for (let i = 0; i < validators.length; i++) {
    const validator = validators[i];
    const errorMessage = validator(value);

    if (errorMessage) {
      return errorMessage;
    }
  }

  return '';
};

export const required: MessageFieldValidator<string> = (
  errorMessage = 'The field is required',
) => (value) => {
  if (isEmpty(value)) {
    return errorMessage;
  }

  return '';
};

export const email: MessageFieldValidator<string> = (
  errorMessage = 'The email is not valid',
) => (value) => {
  if (!isEmail(value)) {
    return errorMessage;
  }

  return '';
};

export const length: MessageFieldValidator<string> = (
  errorMessage = 'The length is out of bounds',
  min = 0,
  max = undefined,
) => (value) => {
  if (!isLength(value, min, max)) {
    return errorMessage;
  }

  return '';
};

export const matchPasswords: MessageFieldValidator<string> = (
  errorMessage = "Don't match",
  password: string,
) => (value) => {
  if (value !== password) {
    return errorMessage;
  }

  return '';
};
