import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  position: absolute;
  width: 80%;
  height: 90%;
  top: 50px;
  left: 10%;
  background-color: #ffffff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border: 2px solid #f5f5f5;
  overflow-y: scroll;
  display: grid;
  gap: 2px 12px;
  grid-template-columns: 1fr;
  margin: 24px 0px;
  z-index: 1001;
`;

const NoData = styled.span`
  display: flex;
  align-content: center;
  color: #c4c4c4;
  padding: 12px;
  text-align: center;
`;

const MobileSearchList = ({ result, setClickItem, showSearch }) => {
  return (
    <Container>
      {result && result.length > 0 ? (
        result.map((item) => (
          <SearchListItem
            key={item.code}
            title={item.name}
            operatingTime={item.openTime === null ? "정보 없음" : item.openTime}
            address={item.addr}
            stock={item.inventory}
            phoneNum={item.tel}
            price={item.price}
            setClickItem={setClickItem}
            lat={item.lat}
            long={item.lng}
            color={item.color}
          />
        ))
      ) : (
        <div>
          <NoData> 조회 데이터가 없습니다.</NoData>
        </div>
      )}
    </Container>
  );
};

export default MobileSearchList;
