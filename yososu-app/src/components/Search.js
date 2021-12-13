import React, { useState } from "react";
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

const SortGroup = styled.div`
  width: 100%;
  display: flex;
  background-color: transparent;
  justify-content: flex-end;
  padding-right: 12px;
  margin-top: 16px;
`;

const Label = styled.label`
  padding: 0.3rem;
  border: 2px solid #f5f5f5;
  color: #979797;
  background-color: #ffffff;
  text-align: center;
  border-radius: 4px;
`;

const SortButton = styled.input`
  display: none;

  &:checked + label {
    border: 2px solid #0023eb;
    color: #0023eb;
  }
`;

const Guide = styled.div`
  width: 65%;
  color: #c4c4c4;
  font-size: 0.55rem;
  text-align: start;
  align-self: center;
  margin-right: 56px;
`;

const Search = ({
  showSearch,
  setClickItem,
  result,
  isLoading,
  searchLocation,
  setRadioValue,
  radioValue,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const onChangeRadioBtn = (event) => {
    setRadioValue(event.target.value);
  };

  const onKeyPressEnter = (event) => {
    if (event.key === "Enter") searchLocation(searchTerm);
    else return;
  };

  return (
    <Container show={showSearch}>
      <SearchWrapper>
        <SearchInput
          placeholder="지역 이름으로 장소를 검색해보세요!(ex. 서울/ 경기)"
          onChange={onChangeSearch}
          value={searchTerm}
          onKeyPress={onKeyPressEnter}
        />
        <SearchButton onClick={() => searchLocation(searchTerm)}>
          <RiSearchLine size="1rem" />
        </SearchButton>
      </SearchWrapper>

      <SortGroup>
        <Guide>
          * 실제 재고 현황과 일부 차이가 있을 수 있으니 확인 후, 방문바랍니다.
        </Guide>
        <SortButton
          id="radio_stock"
          type="radio"
          name="sorting"
          value="stock"
          checked={radioValue === "stock" ? true : false}
          onChange={onChangeRadioBtn}
          defaultChecked
        />
        <Label htmlFor="radio_stock">재고량순</Label>
        <SortButton
          id="radio_price"
          type="radio"
          name="sorting"
          value="price"
          checked={radioValue === "price" ? true : false}
          onChange={onChangeRadioBtn}
        />
        <Label htmlFor="radio_price">가격순</Label>
      </SortGroup>
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
