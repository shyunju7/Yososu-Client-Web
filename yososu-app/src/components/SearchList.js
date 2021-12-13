import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";
const Container = styled.div`
  background-color: transparent;
  overflow-y: scroll;
  display: grid;
  gap: 2px 12px;
  grid-template-columns: 1fr 1fr;
  margin: 24px 0px;
`;

const NoData = styled.span`
  display: flex;
  align-content: center;
  color: #c4c4c4;
  padding: 12px;
  text-align: center;
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
      <div>
        <NoData> 조회 데이터가 없습니다.</NoData>
      </div>
    )}
  </Container>
);

export default SearchList;
