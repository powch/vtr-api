import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Container = styled.div({
  width: "100%",
  height: "100%",
  position: "relative",
  padding: "5rem 2rem 2rem",
});

const CloseButton = styled.button(({ theme }) => ({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  border: 0,
  backgroundColor: "transparent",
  color: theme.primary,
  padding: 0,
}));

const FullscreenModal = ({ children, handleClose }) => {
  return (
    <Container>
      <CloseButton onClick={handleClose}>
        <FontAwesomeIcon icon={solid("xmark")} size={"xl"} />
      </CloseButton>
      {children}
    </Container>
  );
};

export default FullscreenModal;
