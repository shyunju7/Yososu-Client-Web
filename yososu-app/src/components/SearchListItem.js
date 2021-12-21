import React from "react";
import {
  RiMapPinTimeFill,
  RiContrastDrop2Line,
  RiMoneyDollarCircleFill,
  RiMapPin2Fill,
  RiPhoneFill,
} from "react-icons/ri";

import { MdOutlineInvertColorsOff } from "react-icons/md";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #f5f5f5;
  padding: 20px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 35, 235, 0.03);
  }
`;

const Title = styled.h3`
  font-size: 0.72rem;
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
  font-size: 0.64rem;
  color: #3e4958;
  margin-bottom: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 18px;
`;

const SearchListItem = ({
  title,
  address,
  phoneNum,
  operatingTime,
  stock,
  setClickItem,
  price,
  lat,
  long,
  updateTime,
  setClickListButton,
}) => {
  const onClickItem = () => {
    if (setClickListButton) {
      setClickListButton((prev) => !prev);
    }
    setClickItem({
      lat: lat,
      lng: long,
      name: title,
      addr: address,
      tel: phoneNum,
      openTime: operatingTime,
      inventory: stock,
      price: price,
      regDt: updateTime,
    });
  };

  return (
    <Container onClick={onClickItem}>
      <Title>{title}</Title>

      <TagContainer>
        <Tag aria-label="price" role="img">
          <RiMoneyDollarCircleFill color="#0023eb" size="0.8rem" /> 가격 {price}
        </Tag>
        <Tag aria-label="stock" role="img">
          {stock === "0" ? (
            <MdOutlineInvertColorsOff color="#EA3535" size="0.8rem" />
          ) : (
            <RiContrastDrop2Line color="#0023eb" size="0.8rem" />
          )}
          재고량 {stock}
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
