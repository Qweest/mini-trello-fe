import { isEmpty, isEmail, isLength } from './validation';

export interface ErrorMessageFunction<T> {
  (value: T): string;
}

export interface FormValidation<T> {
  (errorMessage?: string, ...args: any[]): ErrorMessageFunction<T>;
}

export const getErrorMessage = <T = string>(
  value: T,
  validations: ErrorMessageFunction<T>[],
): string => {
  for (let i = 0; i < validations.length; i++) {
    const validator = validations[i];
    const errorMessage = validator(value);

    if (errorMessage) {
      return errorMessage;
    }
  }

  return '';
};

export const required: FormValidation<string> = (
  errorMessage = 'The field is required',
) => (value) => {
  if (isEmpty(value)) {
    return errorMessage;
  }

  return '';
};

export const email: FormValidation<string> = (
  errorMessage = 'The email is not valid',
) => (value) => {
  if (!isEmail(value)) {
    return errorMessage;
  }

  return '';
};

export const length: FormValidation<string> = (
  errorMessage = 'The length is out of bounds',
  min = 0,
  max = undefined,
) => (value) => {
  if (!isLength(value, min, max)) {
    return errorMessage;
  }

  return '';
};
