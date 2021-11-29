import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  width: 100%;
  margin: 20px;
`;

const SearchList = ({ list }) => {
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
          />
        ))
      ) : (
        <span> 조회 데이터가 없습니다.</span>
      )}
    </Container>
  );
};

export default SearchList;
