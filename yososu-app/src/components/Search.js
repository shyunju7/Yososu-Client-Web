import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import SearchList from "./SearchList";
const Container = styled.div`
  width: calc(100vw - 740px);
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

const SearchButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  color: #c4c4c4;
  width: 1rem;
  height: 1rem;
  top: 50%;
  right: 8%;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 0.5rem;
  margin: auto 32px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
  font-family: S-CoreDream-3Light;
  margin-top: 1rem;
  font-size: 0.7rem;
  color: #303030;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
    border: 2px solid #ccd3fb;
  }
`;

const Guide = styled.div`
  width: 100%;
  margin-left: 64px;
  color: #c4c4c4;
  font-size: 0.55rem;
  text-align: start;
  align-self: center;
`;

const SelectBox = styled.select`
  width: 80%;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid #f4f4f4;
  margin-top: 24px;
  color: #979797;
  font-family: S-CoreDream-6Bold;

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
  const [optionValue, setOptionValue] = useState("강원");

  const changeLocation = (e) => {
    setOptionValue(e.target.value);
    searchLocation(e.target.value);
    console.log(optionValue);
  };

  return (
    <Container show={showSearch}>
      <SearchWrapper>
        <SelectBox onChange={changeLocation} value={optionValue}>
          <option value="강원" defaultChecked>
            강원도
          </option>
          <option value="경기">경기도</option>
          <option value="경남">경상남도</option>
          <option value="경북">경상북도</option>
          <option value="대구">대구광역시</option>
          <option value="대전">대전광역시</option>
          <option value="부산">부산광역시</option>
          <option value="서울">서울특별시</option>
          <option value="세종">세종자치시</option>
          <option value="울산">울산광역시</option>
          <option value="인천">인천광역시</option>
          <option value="전남">전라남도</option>
          <option value="전북">전라북도</option>
          <option value="제주">제주특별자치도</option>
          <option value="충남">충청남도</option>
          <option value="충북">충청북도</option>
        </SelectBox>
      </SearchWrapper>

      <Guide>
        * 실제 재고 현황과 일부 차이가 있을 수 있으니 확인 후, 방문바랍니다.
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
