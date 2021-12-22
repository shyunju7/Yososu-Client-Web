import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomSelect from "./CustomSelect";
import SearchList from "./SearchList";
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
            * 공개되는 요소수 가격은 기본적으로 벌크 요소수 가격이며, 페트
            요소수 가격은 표시된 가격과 다를 수 있습니다.
          </Guide>
          <Guide>
            * 벌크 요소수가 매진 되었을 경우, 페트 요소수 가격으로 업데이트
            됩니다.
          </Guide>
        </InfoWindow>
      ) : null}
      <SearchWrapper>
        <CustomSelect changeLocation={changeLocation} />
      </SearchWrapper>
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
