import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 2px solid #e5e5e5;
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
const Header = () => {
  return (
    <Container>
      <Title>YOSOSU</Title>
    </Container>
  );
};

export default Header;
