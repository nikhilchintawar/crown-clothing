import React from 'react';

import { GroupContainer, InputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <InputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;