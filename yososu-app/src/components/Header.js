import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: S-CoreDream-8Heavy;
  color: #0023eb;
  margin-left: 38px;
`;

const Text = styled.span`
  font-family: S-CoreDream-4Regular;
  color: #979797;
  font-size: 0.62rem;
  margin-left: 8px;
`;

const Header = () => {
  return (
    <Container>
      <Title>YOSOSU</Title>
      <Text>요소수 어디서? 요기서!</Text>
    </Container>
  );
};

export default Header;
