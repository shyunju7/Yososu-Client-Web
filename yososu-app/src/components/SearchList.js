import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  overflow-y: scroll;
  display: grid;
  gap: 0px;
  grid-template-columns: 1fr 1fr;
`;

const SearchList = ({ list, setClickItem }) => {
  return (
    <Container>
      {list.length > 0 ? (
        list.map((item, index) => (
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
