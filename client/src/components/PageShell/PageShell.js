import React from "react";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
import ActionBar from "./components/ActionBar";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

const ContentContainer = styled.div(({ theme }) => ({
  marginTop: "3rem",
  height: "100%",
  width: "100%",
  color: theme.fontDark,
}));

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;

  return (
    <Container>
      <HeaderBar appState={appState} />
      <ContentContainer>{children}</ContentContainer>
      <ActionBar appState={appState} />
    </Container>
  );
};

export default PageShell;
