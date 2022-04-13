import React, { useEffect, useRef } from "react";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-content: center;
  bottom: 0px;
  animation: fadeUp 0.4s ease-out;
  @keyframes fadeUp {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
`;

const MobileList = styled.div`
  width: 100%;
  background-color: #ffffff;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12px;
  overflow-x: hidden;
  align-items: center;
`;

const MapButton = styled.button`
  width: 80px;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 16px;
  background-color: #99a7f7;
  color: #ffffff;
  font-size: 14px;
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

const Guide = styled.div`
  color: #c4c4c4;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 6px;
  text-align: center;
  margin-top: 12px;
`;

const MobileSearchList = ({
  result,
  setClickItem,
  setClickListButton,
  isClickedListButton,
}) => {
  const listRef = useRef();
  useEffect(() => {
    if (listRef && listRef.current && isClickedListButton) {
      listRef.current.isClose = false;
    }
  });

  return (
    <Container ref={listRef}>
      <Guide> 판매 주요소 정보는 재고량 순으로 정렬되었습니다 :) </Guide>
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
            <NoData> 조회된 정보가 없습니다.</NoData>
          </div>
        )}
      </MobileList>
      <MapButton
        onClick={() => {
          if (listRef && listRef.current && !isClickedListButton) {
            listRef.current.style =
              "transition: transform 0.4s ease-out; transform: translate3d(0, 100%, 0);";
            listRef.current.isClose = true;
            console.log(listRef.current.isClose);
          }

          if (listRef && listRef.current.isClose) {
            setClickListButton((prev) => !prev);
            listRef.current.isClose = false;
          }
        }}
      >
        지도보기
      </MapButton>
    </Container>
  );
};

export default MobileSearchList;
