import React, { useEffect, useState } from "react";
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
  width: 100%;
  margin-top: 24px;
  margin-left: 24px;
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

const InfoButton = styled.span`
  position: absolute;
  top: 56px;
  font-family: S-CoreDream-6Bold;
  left: 550px;
  background-color: #ffffff;
  border: 2px solid #0023eb;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  text-align: center;
  color: #0023eb;
`;

const InfoWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 20px;
  z-index: 1002;
  color: #ffffff;
  width: 300px;
  line-height: 18px;
  font-size: 12px;
  position: absolute;
  top: 24px;
  left: 580px;
`;

const Search = ({
  setClickItem,
  result,
  isLoading,
  searchLocation,
  windowSize,
}) => {
  const [isVisible, setVisible] = useState(false);
  const changeLocation = (optionItem) => {
    console.log(optionItem);
    searchLocation(optionItem);
  };

  useEffect(() => {
    const info = document.querySelector("#info");
    info.addEventListener("mouseover", function () {
      setVisible(true);
    });

    info.addEventListener("mouseout", function () {
      setVisible(false);
    });
  }, []);
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
        <InfoButton id="info">
          <span role="img" aria-label="info">
            i
          </span>
        </InfoButton>
      </Guide>
      {isVisible ? (
        <InfoWindow>
          공개되는 요소수 가격은 기본적으로 벌크 요소수 가격이며, 페트 요소수
          가격은 표시된 가격과 다를 수 있습니다. 벌크 요소수가 매진 되었을 경우,
          페트 요소수 가격으로 업데이트 됩니다.{" "}
        </InfoWindow>
      ) : null}
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
