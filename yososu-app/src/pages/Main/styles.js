import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  background-color: transparent;
  position: absolute;
  right: ${(props) => (props.show ? "calc(70% - 1.4rem)" : -1)};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HideButton = styled.button`
  outline: none;
  border: 1px solid #d4d4d4;
  border-left: none;
  background-color: #ffffff;
  height: 2rem;
  align-items: center;
`;
