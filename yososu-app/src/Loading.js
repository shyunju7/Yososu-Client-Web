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
  font-family: S-CoreDream-6Bold;
  font-size: 1rem;
  color: #979797;
`;

const Loading = () => (
  <Container>
    <img src={loadingImage} alt="loadingImage" width="200px" />
    <Text>요소수 여기서</Text>
  </Container>
);

export default Loading;
