import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  background-color: transparent;
  overflow-y: scroll;
  display: grid;
  gap: 2px 12px;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.label`
  width: 100px;
  border-radius: 20px;
  padding: 0.5rem 0.7rem;
  border: 2px solid #dddddd;
  color: #979797;
  background-color: #ffffff;
  text-align: center;
`;

const SortButton = styled.input`
  display: none;
  border: 2px solid #0023eb;
  color: #ffffff;
  background-color: #0023eb;

  &:checked + label {
    width: 100px;
    border-radius: 20px;
    padding: 0.5rem 0.7rem;
    border: 2px solid #0023eb;
    color: #ffffff;
    background-color: #0023eb;
  }
`;

const SearchList = ({ result, setClickItem }) => {
  return (
    <Container>
      {/* <SortButton
        id="radio_stock"
        type="radio"
        name="sorting"
        value="stock"
        defaultChecked
      />
      <Label htmlFor="radio_stock">재고량순</Label>
      <SortButton id="radio_price" type="radio" name="sorting" value="price" />
      <Label htmlFor="radio_price">가격순</Label> */}

      {result.length > 0 ? (
        result.map((item, index) => (
          <SearchListItem
            key={index}
            title={item.title}
            operatingTime={item.operatingTime}
            address={item.address}
            stock={item.stock}
            phoneNum={item.phoneNum}
            price={item.price}
            setClickItem={setClickItem}
          />
        ))
      ) : (
        <span> 조회 데이터가 없습니다.</span>
      )}
    </Container>
  );
};

export default SearchList;
