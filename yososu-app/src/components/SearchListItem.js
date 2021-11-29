import React from "react";
import {
  IoBagOutline,
  IoTimeOutline,
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  padding: 20px;

  border-bottom: 2px solid #f5f5f5;

  &:hover {
    background-color: rgba(0, 35, 235, 0.1);
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  color: #1a39ed;
  margin: unset;
  margin-bottom: 12px;
`;

const Content = styled.div`
  font-size: 0.8rem;
  color: #c4c4c4;
  padding: 2px auto;
`;

const SearchListItem = ({
  title,
  address,
  phoneNum,
  operatingTime,
  stock,
  setClickItem,
}) => {
  const onClickItem = () => {
    setClickItem(address);
  };

  return (
    <Container onClick={onClickItem}>
      <Title>{title}</Title>
      <Content>
        <IoLocationOutline />
        {address}
      </Content>
      <Content>
        <IoCallOutline />
        {phoneNum}
      </Content>
      <Content>
        <IoTimeOutline />
        {operatingTime}
      </Content>
      <Content>
        <IoBagOutline />
        {stock}
      </Content>
    </Container>
  );
};

export default SearchListItem;
