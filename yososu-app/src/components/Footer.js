import React from "react";
import styled from "styled-components";
import { RiGithubFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
const Container = styled.footer`
  width: 100%;
  background-color: #e5e9fd;
  position: relative;
  display: flex;
  padding: 12px;
  flex-direction: ${(props) => (props.windowSize <= 740 ? "column" : "row")};
`;

const Title = styled.span`
  font-size: 18px;
  font-family: S-CoreDream-6Bold;
  color: #667bf3;
  margin-top: 12px;
`;

const Tag = styled.div`
  font-family: S-CoreDream-6Bold;
  color: #979797;
  margin-bottom: 12px;
`;

const Contents = styled.div`
  width: 100%;
  margin-top: 12px;
  color: #979797;
  line-height: 20px;
`;

const Guide = styled.div`
  width: 100%;
  color: #c4c4c4;
  font-size: 12px;
  text-align: start;
`;

const CopyRight = styled.h3`
  font-size: 14px;
  font-family: S-CoreDream-4Regular;
  color: #667bf3;
  margin-top: 12px;
`;

const Footer = ({ windowSize }) => (
  <Container windowSize={windowSize}>
    <Contents>
      {/* <Title>요소수 요기서</Title>에서 요소수 판매처 위치와 재고량 등의 정보를
      알려드립니다!
      <Guide>
        * 요소수 요기서에 모든 정보는 환경부의 공공 데이터를 활용하였습니다:)
      </Guide> */}
    </Contents>
    <Contents>
      <Tag>Developer</Tag>
      <address>
        Front-end 송현주{" "}
        <a href="https://github.com/shyunju7" target="_blank" rel="noreferrer">
          <RiGithubFill size="16px" color="black" />
        </a>{" "}
        <a href="mailto:songthdo427@gmail.com">
          <SiGmail color="red" size="16px" />
        </a>
      </address>
      <address>
        Back-end 이다은{" "}
        <a href="https://github.com/eleeje97" target="_blank" rel="noreferrer">
          <RiGithubFill size="16px" color="black" />
        </a>{" "}
        <a href="mailto:eleeje97@gmail.com">
          <SiGmail color="red" size="16px" />
        </a>
      </address>
      <CopyRight>
        {" "}
        &copy; {new Date().getFullYear()}
        Team-Whooper
      </CopyRight>
    </Contents>
  </Container>
);
export default Footer;
