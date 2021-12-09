import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10rem;
  height: 6rem;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

const Guide = () => <Container>guide</Container>;

export default Guide;
