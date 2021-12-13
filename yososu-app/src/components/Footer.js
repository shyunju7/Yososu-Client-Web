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

const Guide = styled.div`
  width: 100%;
  color: #c4c4c4;
  font-size: 0.55rem;
  text-align: start;
  margin-bottom: 4px;
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
    <Contents>
      <Guide>
        * 요소수 요기서에 모든 정보는 환경부의 공공 데이터를 활용하였습니다:)
      </Guide>
      <Guide>
        * 공개되는 요소수 가격은 기본적으로 벌크 요소수 가격이며, 페트 요소수
        가격은 표시된 가격과 다를 수 있습니다.
      </Guide>
      <Guide>
        * 벌크 요소수가 매진 되었을 경우, 페트 요소수 가격으로 업데이트 됩니다.
      </Guide>
    </Contents>
    <CopyRight>&copy; {new Date().getFullYear()}Team-Whooper</CopyRight>
  </Container>
);
export default Footer;
