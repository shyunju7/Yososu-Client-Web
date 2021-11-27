import React from "react";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
const Container = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ffffff;
  border-right: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const SearchButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  width: 1rem;
  height: 1rem;
  top: 50%;
  right: 2rem;
`;

const Search = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="지역 이름으로 장소를 검색해보세요!" />
        <SearchButton>
          <CgSearch />
        </SearchButton>
      </SearchWrapper>
    </Container>
  );
};

export default Search;
