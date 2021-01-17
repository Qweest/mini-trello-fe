import validator from 'validator';

interface Validation<T> {
  (value: T, ...args: any[]): boolean;
}

export const isEmpty: Validation<string> = (value, ignoreSpaces = true) => {
  return validator.isEmpty(value, { ignore_whitespace: ignoreSpaces });
};

export const isEmail: Validation<string> = (value) => {
  return validator.isEmail(value);
};

export const isLength: Validation<string> = (
  value,
  min = 0,
  max = undefined,
) => {
  return validator.isLength(value, { min, max });
};
