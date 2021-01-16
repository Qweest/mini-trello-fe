import React from 'react';

interface Props {
  values: any;
  setValues: (values: any) => void;
}

export const FormContext = React.createContext<Props>({
  values: {},
  setValues: () => {},
});

const Form: React.FC<Props> = (props) => {
  const { values, setValues, children } = props;

  return (
    <FormContext.Provider
      value={{
        values,
        setValues: setValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default Form;
