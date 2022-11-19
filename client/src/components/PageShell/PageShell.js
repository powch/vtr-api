import React from "react";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";

const Container = styled.div({
  width: "100%",
  height: "100%",
});

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;

  return (
    <Container>
      <HeaderBar appState={appState} />
      {children}
    </Container>
  );
};

export default PageShell;
