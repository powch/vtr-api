import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Container = styled.div(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  height: "4rem",
  width: "100%",
  borderTop: `0.063rem solid ${theme.border}`,
}));
const InnerContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
});

const ButtonContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.primaryA,
}));

const Divider = styled.div(({ theme }) => ({
  height: "2rem",
  width: "0.063rem",
  backgroundColor: theme.border,
}));

const ActionButton = ({ icon, tag, css }) => {
  const fire = solid("fire");
  const heart = solid("heart");
  const star = solid("star");
  const chosenIcon = icon === "fire" ? fire : icon === "heart" ? heart : star;

  return (
    <ButtonContainer css={css}>
      <FontAwesomeIcon icon={chosenIcon} />
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem" }}>{tag}</p>
    </ButtonContainer>
  );
};

const ActionBar = ({ appState }) => {
  const { state, dispatch } = appState;

  return (
    <Container>
      <InnerContainer>
        <ActionButton icon={"star"} tag={"Newest"} />
        <Divider />
        <ActionButton icon={"fire"} tag={"Popular"} />
        <Divider />
        <ActionButton icon={"heart"} tag={"Favorites"} />
      </InnerContainer>
    </Container>
  );
};

export default ActionBar;
