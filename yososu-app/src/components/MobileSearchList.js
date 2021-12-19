import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border: 2px solid #f5f5f5;
  z-index: 1001;
`;

const MobileList = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border: 2px solid #f5f5f5;
  overflow-y: scroll;
  display: grid;
  gap: 2px 12px;
  grid-template-columns: 1fr;
`;

const MapButton = styled.button`
  width: 80px;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 16px;
  background-color: #99a7f7;
  color: #ffffff;
  font-size: 0.7rem;
  position: absolute;
  z-index: 100;
  bottom: 40px;
  left: 40%;
  box-shadow: 2px 2px 2px #c4c4c4;
`;

const NoData = styled.span`
  display: flex;
  align-content: center;
  color: #c4c4c4;
  padding: 12px;
  text-align: center;
`;

const MobileSearchList = ({ result, setClickItem, setClickListButton }) => {
  return (
    <Container>
      <MobileList>
        {result && result.length > 0 ? (
          result.map((item) => (
            <SearchListItem
              key={item.code}
              title={item.name}
              operatingTime={
                item.openTime === null ? "정보 없음" : item.openTime
              }
              address={item.addr}
              stock={item.inventory}
              phoneNum={item.tel}
              price={item.price}
              setClickItem={setClickItem}
              lat={item.lat}
              long={item.lng}
              color={item.color}
              updateTime={item.regDt}
              setClickListButton={setClickListButton}
            />
          ))
        ) : (
          <div>
            <NoData> 조회 데이터가 없습니다.</NoData>
          </div>
        )}
      </MobileList>
      <MapButton onClick={() => setClickListButton(false)}>지도보기</MapButton>
    </Container>
  );
};

export default MobileSearchList;
