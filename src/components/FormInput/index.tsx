import React, { useContext } from 'react';

import { validateField } from '../../utils/formValidation';
import { Props as InputProps } from '../Input';
import { FormContext } from '../Form';
import { Wrapper, Input, Error } from './styles';

interface Props extends InputProps {
  name: string;
}

const FormInput: React.FC<Props> = (props) => {
  const { name, ref, ...inputProps } = props;
  const { values, setValues, errors, setErrors, formValidator } = useContext(
    FormContext,
  );
  const error = errors[name];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    const { [name]: toRemove, ...nextErrors } = errors;

    setErrors(nextErrors);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formValidator) {
      return;
    }

    const fieldValidators = formValidator[name];

    if (!fieldValidators) {
      return;
    }

    const { value } = e.target;
    const errorMessage = validateField(value, fieldValidators);

    if (errorMessage) {
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    }
  };

  return (
    <Wrapper>
      <Input
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        {...inputProps}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default FormInput;
