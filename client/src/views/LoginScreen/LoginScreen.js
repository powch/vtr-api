import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../components/Button";

const Container = styled.div({
  margin: 0,
  padding: "1rem",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const HeaderContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  margin: '5rem 0'
});

const ActionContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const LoginScreen = ({ appState }) => {
  const { state, dispatch } = appState;
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  useEffect(() => {
    !isLoading &&
      isAuthenticated &&
      dispatch({ action: "SEED_USER_DATA", payload: { user } });
  }, [isLoading, isAuthenticated]);

  return (
    <Container id="foo">
      <HeaderContainer>
        <h1>App Name</h1>
      </HeaderContainer>
      <ActionContainer>
        <Button
          css={{ marginBottom: "1rem" }}
          size={"large"}
          handleClick={() => loginWithRedirect()}
        >
          Log in
        </Button>
        {/* More than likely just for testing, so remove later */}
        <Button
          size={"large"}
          handleClick={() => logout()}
        >
          Log logout
        </Button>
      </ActionContainer>
    </Container>
  );
};

export default LoginScreen;
