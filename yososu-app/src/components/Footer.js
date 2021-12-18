import React from "react";
import styled from "styled-components";
import { RiGithubFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { ImWordpress } from "react-icons/im";
const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #e5e9fd;
  padding: 10px 20px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 1rem;
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
  width: 50%;
  margin-top: 12px;
  color: #979797;
  line-height: 20px;
`;

const Guide = styled.div`
  width: 100%;
  color: #c4c4c4;
  font-size: 0.55rem;
  text-align: start;
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
    <Contents>
      <Title>요소수 여기서</Title>는 요소수가 필요한 모든 분들께 <br />
      요소수 판매처 위치와 재고량 등의 정보를 쉽고 빠르게 제공하는 서비스입니다.
      <Guide>
        * 요소수 요기서에 모든 정보는 환경부의 공공 데이터를 활용하였습니다:)
      </Guide>
    </Contents>
    <Contents>
      <Tag>Developer & Contact</Tag>
      <address>
        Front-end 송현주{" "}
        <a href="https://github.com/shyunju7" target="_blank" rel="noreferrer">
          <RiGithubFill size="1rem" color="black" />
        </a>{" "}
        <a href="mailto:songthdo427@gmail.com">
          <SiGmail color="red" size="0.8rem" />
        </a>
      </address>

      <address>
        Back-end 이다은{" "}
        <a href="https://github.com/eleeje97" target="_blank" rel="noreferrer">
          <RiGithubFill size="1rem" color="black" />
        </a>{" "}
        <a href="mailto:eleeje97@gmail.com">
          <SiGmail color="red" size="0.8rem" />
        </a>
      </address>
    </Contents>
  </Container>
);
export default Footer;
