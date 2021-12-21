import React from "react";
import styled from "styled-components";
import CustomSelect from "./CustomSelect";
import SearchList from "./SearchList";
const Container = styled.div`
  width: ${(props) => (props.windowSize <= 740 ? "" : "45%")};
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  visibility: ${(props) => (props.windowSize <= 740 ? "hidden" : "visible")};
  transition: ${(props) =>
    props.windowSize <= 740 ? "0.1s ease-in" : "0.1s ease-in-out"};
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Contents = styled.span`
  margin-top: 24px;
  color: #979797;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 18px;
  font-family: S-CoreDream-6Bold;
  color: #667bf3;
  margin-top: 12px;
  margin-left: 12px;
`;

const Guide = styled.div`
  width: 100%;
  margin-left: 64px;
  color: #c4c4c4;
  font-size: 12px;
  text-align: start;
  align-self: center;
  line-height: 18px;
  margin-top: 12px;
`;

const Search = ({
  setClickItem,
  result,
  isLoading,
  searchLocation,
  windowSize,
}) => {
  const changeLocation = (optionItem) => {
    console.log(optionItem);
    searchLocation(optionItem);
  };

  return (
    <Container windowSize={windowSize}>
      <Contents>
        <Title>요소수 요기서</Title>는 요소수 판매처 위치와 재고량 등의 정보를
        제공합니다.
      </Contents>

      <Guide>
        * 요소수 요기서에 모든 정보는 환경부의 공공 데이터를 활용하였습니다:){" "}
        <br />* 실제 재고 현황과 일부 차이가 있을 수 있으니 확인 후,
        방문바랍니다. <br />
      </Guide>
      <SearchWrapper>
        <CustomSelect changeLocation={changeLocation} />
      </SearchWrapper>
      <SearchList
        result={result}
        setClickItem={setClickItem}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Search;
