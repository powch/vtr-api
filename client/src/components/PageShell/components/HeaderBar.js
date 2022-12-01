import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../Button";
import FilterInput from "./FilterInput";

const Container = styled.div(({ theme }) => ({
  height: "3rem",
  width: "100%",
  position: "fixed",
  top: 0,
  backgroundColor: theme.backgroundColor,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `0.063rem solid ${theme.border}`,
}));

const LogoContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flex: 2,
  paddingLeft: "1rem",
  color: theme.fontDark,
}));

const InputContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 6,
});

const ActionContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  flex: 2,
  paddingRight: "1rem",
  color: theme.fontDark,
}));

const HeaderBar = ({ appState }) => {
  const { state, dispatch } = appState;
  const theme = useTheme();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  useEffect(() => {
    !isLoading &&
      isAuthenticated &&
      dispatch({ action: "SEED_USER_DATA", payload: { user } });
  }, [isLoading, isAuthenticated]);

  return (
    <Container>
      <LogoContainer>
        <h3>VTA</h3>
      </LogoContainer>
      <InputContainer>
        <FilterInput />
      </InputContainer>
      <ActionContainer>
        <Button
          css={{
            color: theme.fontLight,
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
          size={"small"}
          handleClick={() => loginWithRedirect()}
        >
          Log in
        </Button>
      </ActionContainer>
    </Container>
  );
};

export default HeaderBar;
