import React, { useState } from "react";
import styled from "styled-components";
import CustomSelect from "./CustomSelect";
import SearchList from "./SearchList";
const Container = styled.div`
  width: 45%;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
  transition: ${(props) => (props.show ? "0.1s ease-in" : "0.1s ease-in-out")};
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Guide = styled.div`
  width: 100%;
  margin-left: 64px;
  color: #c4c4c4;
  font-size: 0.55rem;
  text-align: start;
  align-self: center;
  line-height: 18px;
`;

const SelectBox = styled.select`
  &:-ms-expand {
    display: none;
  }
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 200px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 2px solid #ccd3fb;
  }
`;

const Search = ({
  showSearch,
  setClickItem,
  result,
  isLoading,
  searchLocation,
}) => {
  const changeLocation = (optionItem) => {
    console.log(optionItem);
    searchLocation(optionItem);
  };

  return (
    <Container show={showSearch}>
      <SearchWrapper>
        <CustomSelect changeLocation={changeLocation} />
      </SearchWrapper>

      <Guide>
        * 실제 재고 현황과 일부 차이가 있을 수 있으니 확인 후, 방문바랍니다.{" "}
        <br />
        * 요소수 가격은 기본적으로 벌크 요소수 가격이며, 페트 요소수 가격은
        표시된 가격과 다를 수 있습니다.
        <br />* 벌크 요소수가 매진 되었을 경우,페트 요소수 가격으로 업데이트
        됩니다.
      </Guide>

      <SearchList
        result={result}
        setClickItem={setClickItem}
        isLoading={isLoading}
        showSearch={showSearch}
      />
    </Container>
  );
};

export default Search;
