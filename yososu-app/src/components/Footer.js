import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #e5e9fd;
  padding: 10px 20px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  font-family: S-CoreDream-8Heavy;
  color: #0023eb;
  margin-top: 12px;
`;

const Contents = styled.div`
  margin-top: 12px;
  color: #979797;
`;

const CopyRight = styled.h3`
  font-size: 0.7rem;
  font-family: S-CoreDream-4Regular;
  color: #667bf3;
  margin-top: 12px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const Footer = () => (
  <Container>
    <Title>YOSOSU</Title>
    <Contents>내용 채우기 개발자 소개나 정보 연결? </Contents>
    <CopyRight>&copy; {new Date().getFullYear()}Team-Whooper</CopyRight>
  </Container>
);
export default Footer;
