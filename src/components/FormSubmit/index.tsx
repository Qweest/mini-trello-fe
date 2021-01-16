import React, { useContext } from 'react';
import isEmpty from 'lodash/isEmpty';

import { validateForm } from '../../utils/formValidation';
import Button, { Props as ButtonProps } from '../Button';
import { FormContext } from '../Form';

interface Props extends ButtonProps {
  onClick: () => void;
}

const FormSubmit: React.FC<Props> = (props) => {
  const { onClick, ...rest } = props;
  const { values, setErrors, formValidator } = useContext(FormContext);

  const handleSubmit = () => {
    const errors = validateForm(values, formValidator || {});

    if (!isEmpty(errors)) {
      setErrors(errors);
      return;
    }

    onClick();
  };

  return <Button onClick={handleSubmit} {...rest} />;
};

export default FormSubmit;
