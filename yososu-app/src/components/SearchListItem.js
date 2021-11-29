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
  price,
}) => {
  const onClickItem = () => {
    setClickItem(address);
  };

  return (
    <Container onClick={onClickItem}>
      <Tag stock={stock} price={price} />
      <Content>{title}</Content>
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
