import React, { useState } from 'react';
import { FormValidator } from '../../utils/formValidation';

interface Props {
  values: any;
  setValues: (values: any) => void;
  formValidator?: FormValidator;
}

interface ContextValue extends Props {
  errors: { [x: string]: any };
  setErrors: (errors: any) => void;
}

export const FormContext = React.createContext<ContextValue>({
  values: {},
  setValues: () => {},
  errors: {},
  setErrors: () => {},
  formValidator: {},
});

const Form: React.FC<Props> = (props) => {
  const { values, setValues, formValidator, children } = props;
  const [errors, setErrors] = useState({});

  return (
    <FormContext.Provider
      value={{
        values,
        setValues,
        errors,
        setErrors,
        formValidator,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default Form;
