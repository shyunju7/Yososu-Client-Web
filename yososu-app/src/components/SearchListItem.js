import React from "react";
import {
  IoTimeOutline,
  IoLocationOutline,
  IoCallOutline,
} from "react-icons/io5";
import styled from "styled-components";
import Tag from "./Tag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 122px;
  padding: 20px;
  border-radius: 20px;
  border-bottom: 2px solid #f5f5f5;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f8f5f5;
  }
`;

const Title = styled.h3`
  font-size: 0.8rem;
  color: #3e4958;
  margin: unset;
  margin-bottom: 12px;
`;

const Content = styled.div`
  font-size: 0.8rem;
  color: #3e4958;
  padding: 2px auto;
`;

const SearchListItem = ({
  title,
  address,
  phoneNum,
  operatingTime,
  stock,
  setClickItem,
  price,
}) => {
  const onClickItem = () => {
    setClickItem(address);
  };

  return (
    <Container onClick={onClickItem}>
      {/* <Tag stock={stock} price={price} /> */}
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
    </Container>
  );
};

export default SearchListItem;
