import React from "react";
import {
  RiMapPinTimeFill,
  RiContrastDrop2Line,
  RiMoneyDollarCircleFill,
  RiMapPin2Fill,
  RiHistoryFill,
  RiPhoneFill,
} from "react-icons/ri";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 128px;
  padding: 20px;
  border-bottom: 2px solid #f5f5f5;
  margin-bottom: 12px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 35, 235, 0.03);
  }
`;

const Title = styled.h3`
  font-size: 0.8rem;
  color: #3e4958;
  margin: unset;
  margin-bottom: 12px;
  font-family: S-CoreDream-6Bold;
`;

const TagContainer = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Tag = styled.span`
  width: 50%;
  display: flex;
  align-items: flex-end;
  font-size: 0.7rem;
  font-family: S-CoreDream-6Bold;
`;

const Content = styled.div`
  font-size: 0.7rem;
  color: #3e4958;
  padding: 2px auto;
  margin-bottom: 4px;
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
      <Title>{title}</Title>

      <TagContainer>
        <Tag aria-label="price" role="img">
          <RiMoneyDollarCircleFill color="#0023eb" size="1rem" /> {price}
        </Tag>

        <Tag aria-label="stock" role="img">
          <RiContrastDrop2Line color="#0023eb" size="1rem" /> {stock}
        </Tag>
      </TagContainer>

      <Content>
        <RiMapPin2Fill size="0.7rem" />
        {address}
      </Content>
      <Content>
        <RiPhoneFill size="0.7rem" />
        {phoneNum}
      </Content>
      <Content>
        <RiMapPinTimeFill size="0.7rem" />
        {operatingTime}
      </Content>
    </Container>
  );
};

export default SearchListItem;
