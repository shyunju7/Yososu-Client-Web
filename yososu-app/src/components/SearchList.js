import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";
const Container = styled.div`
  width: 100%;
  background-color: transparent;
  overflow-y: auto;
  display: grid;
  gap: 2px 0px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  margin-top: 12px;
  margin-bottom: 12px;
  overflow-x: hidden;
  align-items: center;
`;

const NoData = styled.span`
  width: 100%;
  height: 50vh;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  color: #c4c4c4;
  padding: 12px;
`;

const SearchList = ({ result, setClickItem }) => (
  <Container>
    {result && result.length > 0 ? (
      result.map((item) => (
        <SearchListItem
          key={item.code}
          title={item.name}
          operatingTime={item.openTime === null ? "정보 없음" : item.openTime}
          address={item.addr}
          stock={item.inventory}
          phoneNum={item.tel}
          updateTime={item.regDt}
          price={item.price}
          setClickItem={setClickItem}
          lat={item.lat}
          long={item.lng}
          color={item.color}
        />
      ))
    ) : (
      <NoData> 조회 데이터가 없습니다.</NoData>
    )}
  </Container>
);

export default SearchList;
