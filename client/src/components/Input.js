import React from "react";
import styled from "styled-components";

const InputContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

const StyledInput = styled.input(({ theme }) => ({
    ...theme.roundedCorners,
    border: "0.063rem grey solid",
  }));

const StyledLabel = styled.label(({ theme }) => ({
  ...theme.label,
}));

const Input = ({ label, value, name, handleChange }) => (
  <InputContainer>
    <StyledLabel for={name}>{label}</StyledLabel>
    <StyledInput
      name={name}
      value={value}
      onChange={(e) => handleChange(name, e.target.value)}
    />
  </InputContainer>
);

export default Input;
