import React from "react";
import styled from "styled-components";

const Container = styled.div(({ theme }) => ({
  height: "3rem",
  width: "100%",
  position: "fixed",
  top: 0,
  backgroundColor: theme.primary,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

const PaddingContainer = styled.div({
  display: "flex",
  flex: 1,
});

const HeaderContainer = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 5,
  color: theme.fontColor,
}));

const MenuContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
});

const HeaderBar = ({ appState }) => {
  return (
    <Container>
      <PaddingContainer />
      <HeaderContainer>
        <h3>FOO</h3>
      </HeaderContainer>
      <MenuContainer />
    </Container>
  );
};

export default HeaderBar;
