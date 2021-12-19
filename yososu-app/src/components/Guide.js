import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  bottom: 2rem;
  right: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  color: #3e4958;
  font-family: S-CoreDream-4Regular;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
`;

const ColorPalette = styled.div`
  width: 30px;
  height: 10px;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin-right: 36px;
`;

const Guide = () => (
  <Container>
    <Row color="#0AB01B">
      <ColorPalette color="#0AB01B" />
      여유
    </Row>
    <Row color="#F3D432">
      <ColorPalette color="#F3D432" />
      보통
    </Row>
    <Row color="#EC3535">
      <ColorPalette color="#EC3535" />
      부족
    </Row>
    <Row color="#c4c4c4">
      <ColorPalette color="#c4c4c4" />
      매진
    </Row>
  </Container>
);

export default Guide;
