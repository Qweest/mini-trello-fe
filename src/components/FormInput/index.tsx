import React, { useContext, useState } from 'react';

import {
  ErrorMessageFunction,
  getErrorMessage,
} from '../../utils/formValidation';
import { Props as InputProps } from '../Input';
import { FormContext } from '../Form';
import { Wrapper, Input, Error } from './styles';

interface Props extends InputProps {
  name: string;
  validations?: ErrorMessageFunction<string>[];
}

const FormInput: React.FC<Props> = (props) => {
  const { name, validations, ref, ...inputProps } = props;
  const { values, setValues } = useContext(FormContext);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setError('');
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validations?.length) {
      return;
    }

    const { value } = e.target;
    const errorMessage = getErrorMessage(value, validations);

    setError(errorMessage);
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
