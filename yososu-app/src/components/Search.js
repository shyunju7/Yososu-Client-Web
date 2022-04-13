import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomSelect from "./CustomSelect";
import SearchList from "./SearchList";
import { RiSortDesc } from "react-icons/ri";

const Search = ({
  setClickItem,
  result,
  isLoading,
  searchLocation,
  windowSize,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [sortingValue, setSortingValue] = useState("재고량순");

  useEffect(() => {
    const info = document.querySelector("#info");
    info.addEventListener("mouseover", function () {
      setVisible(true);
    });

    info.addEventListener("mouseout", function () {
      setVisible(false);
    });
  }, []);

  const onChangeSortingValue = (e) => {
    setSortingValue(e.target.value);
  };

  return (
    <Container windowSize={windowSize}>
      <Contents>
        <Title>요소수 요기서</Title>는 요소수 판매처 위치와 재고량 등의 정보를
        제공합니다.
        <InfoButton id="info">i</InfoButton>
      </Contents>
      {isVisible ? (
        <InfoWindow>
          <Guide>
            * 요소수 요기서 서비스는 환경부의 공공 데이터를 활용하였습니다 :)
          </Guide>
          <Guide>
            * 실제 재고 현황과 일부 차이가 있을 수 있으니 확인 후에
            방문바랍니다.
          </Guide>
          <Guide>
            * 요소수 요기서 페이지에는 S-Core에서 제공한 에스코어 드림 폰트가
            적용되어 있습니다.
          </Guide>
          <Guide>* 요소수 요기서는 KakaoMap API를 활용하였습니다.</Guide>
        </InfoWindow>
      ) : null}
      <SearchWrapper>
        <CustomSelect
          sortingValue={sortingValue}
          searchLocation={searchLocation}
          windowSize={windowSize}
        />
      </SearchWrapper>

      <SortingWrapper>
        <RiSortDesc size="16px" color="#3e4958" />
        <SortingSelect value={sortingValue} onChange={onChangeSortingValue}>
          재고량순
          <option defaultChecked value="재고량순">
            재고량순
          </option>
          <option value="가격순">가격순</option>
        </SortingSelect>
      </SortingWrapper>
      <SearchList
        result={result}
        setClickItem={setClickItem}
        isLoading={isLoading}
        windowSize={windowSize}
      />
    </Container>
  );
};

export default Search;

// style
const Container = styled.div`
  width: ${(props) => (props.windowSize <= 740 ? "" : "50%")};
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #f5f5f5;
  display: flex;
  position: relative;
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
  width: 80%;
  margin-top: 24px;
  margin-right: 28px;
  margin-left: 24px;
  color: #979797;
  align-self: flex-start;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  margin-bottom: 12px;
`;

const Title = styled.span`
  font-size: 16px;
  font-family: S-CoreDream-6Bold;
  color: #667bf3;
  margin-top: 12px;
  margin-left: 12px;
`;

const Guide = styled.div`
  color: #dddddd;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 6px;
`;

const InfoButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: bold;
  background-color: #0023eb;
  border: 2px solid #0023eb;
  height: 18px;
  width: 18px;
  font-size: 16px;
  padding-top: 1px;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  margin-left: 8px;
  cursor: default;
  box-shadow: 1px 1px 3px 1px #d4d4d4;
`;

const InfoWindow = styled.div`
  background-color: #414350;
  border-radius: 12px;
  padding: 20px;
  z-index: 1002;
  color: #ffffff;
  width: 300px;
  line-height: 18px;
  font-size: 12px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

const SortingWrapper = styled.span`
  align-self: flex-end;
  margin-right: 24px;
`;

const SortingSelect = styled.select`
  appearance: none;
  border: none;
  outline: none;
  font-size: 16px;
  color: #3e4958;
  font-family: S-CoreDream-4Regular;
  margin-left: 1px;
`;
