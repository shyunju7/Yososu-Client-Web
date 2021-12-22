import React from "react";
import styled from "styled-components";
import footerImage from "../assets/footer_img.png";
const Container = styled.footer`
  width: 100%;
  height: 78px;
  background-color: #f8f9fe;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CopyRight = styled.h3`
  font-size: 14px;
  font-family: S-CoreDream-4Regular;
  font-weight: bold;
  color: #667bf3;
  margin-top: 12px;
`;

const FooterImage = styled.img`
  margin-top: 8px;
  width: 120px;
`;

const Footer = ({ windowSize }) => (
  <Container windowSize={windowSize}>
    <FooterImage src={footerImage} alt="footerImage" width="140px" />
    <CopyRight>
      &copy; {new Date().getFullYear()}
      Team-Whooper
    </CopyRight>
  </Container>
);
export default Footer;
