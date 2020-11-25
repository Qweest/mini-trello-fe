import validator from 'validator';

export const isEmpty = (value: string, ignoreSpaces = true): boolean => {
  return validator.isEmpty(value, { ignore_whitespace: ignoreSpaces });
};
