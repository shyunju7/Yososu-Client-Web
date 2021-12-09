import React, { useState } from "react";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import SearchList from "./SearchList";
const Container = styled.div`
  width: calc(100vw - 710px);
  height: 100%;
  background-color: #ffffff;
  border-right: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: ${(props) => (props.show ? "0.1s ease-in" : "0.1s ease-in-out")};
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  border: 2px solid #d4d4d4;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #303030;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
    border: 2px solid #0023eb;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  width: 1rem;
  height: 1rem;
  top: 50%;
  right: 2.2rem;
  cursor: pointer;
`;

const Search = ({ showSearch, setClickItem }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const list = [
    {
      id: 1,
      title: "안성(서울방향)",
      address: "경기도 안성시 원곡면 경부고속도로 372",
      operatingTime: "매일 24시간",
      phoneNum: "031-664-4096",
      stock: "1300",
      price: "1200",
    },
    {
      id: 2,
      title: "울주(함양방향)",
      address: "울산 울주군 삼동면 보은리 산192-3",
      operatingTime: "매일 24시간",
      phoneNum: "052-977-3243",
      stock: "387",
      price: "2100",
    },

    {
      id: 3,
      title: "현풍(마산방향)",
      address: "대구 달성군 현풍읍 성하길 48",
      operatingTime: "매일 24시간",
      phoneNum: "053-614-2437",
      stock: "1360",
      price: "1200",
    },

    {
      id: 4,
      title: "언양(서울방향)",
      address: "울산 울주군 언양읍 경부고속도로 44",
      operatingTime: "매일 24시간",
      phoneNum: "052-263-6146",
      stock: "500",
      price: "10",
    },
  ];
  return (
    <Container show={showSearch}>
      <SearchWrapper>
        <SearchInput
          placeholder="지역 이름으로 장소를 검색해보세요!"
          onChange={onChangeSearch}
          value={searchTerm}
        />
        <SearchButton>
          <CgSearch color="#C4C4C4" />
        </SearchButton>
      </SearchWrapper>

      <SearchList list={list} setClickItem={setClickItem} />
    </Container>
  );
};

export default Search;
