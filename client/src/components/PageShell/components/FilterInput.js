import React from "react";
import styled from "styled-components";

const Input = styled.input(({ theme }) => ({
  width: "100%",
  padding: "0.5rem",
  height: "1.75rem",
  fontSize: "0.75rem",
  color: theme.fontDark,
  border: `0.063rem solid ${theme.border}`,
  ...theme.roundedCorners,
}));

const FilterInput = () => {
  return <Input placeholder="Add tags" />;
};

export default FilterInput;
