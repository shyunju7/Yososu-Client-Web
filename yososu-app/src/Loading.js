import React from "react";
import styled from "styled-components";
import loadingImage from "../src/assets/loading_img.gif";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.h3`
  font-family: S-CoreDream-4Regular;
  font-size: 1rem;
`;

const Loading = () => (
  <Container>
    <img src={loadingImage} alt="loadingImage" width="200px" />
    <Text>Loading...</Text>
  </Container>
);

export default Loading;
