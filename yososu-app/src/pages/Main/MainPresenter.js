import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import Guide from "../../components/Guide";
import MapComponent from "../../components/Map";
import MobileSearchList from "../../components/MobileSearchList";
import Search from "../../components/Search";
import Loading from "../../Loading";
import { Container, ListButton } from "./styles";
const MainPresenter = ({
  result,
  isLoading,
  searchLocation,
  windowSize,
  isClickedItem,
  setClickItem,
  isClickedListButton,
  setClickListButton,
}) => {
  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      {windowSize <= 740 ? (
        <>
          <CustomSelect
            searchLocation={searchLocation}
            windowSize={windowSize}
          />
          <ListButton
            onClick={() => {
              setClickListButton((prev) => !prev);
            }}
          >
            목록보기
          </ListButton>
        </>
      ) : (
        <Search
          setClickItem={setClickItem}
          result={result}
          isLoading={isLoading}
          searchLocation={searchLocation}
          windowSize={windowSize}
        />
      )}

      {windowSize <= 740 && isClickedListButton && (
        <MobileSearchList
          result={result}
          setClickItem={setClickItem}
          searchLocation={searchLocation}
          setClickListButton={setClickListButton}
          isClickedListButton={isClickedListButton}
        />
      )}

      <MapComponent
        isClickedItem={isClickedItem}
        result={result}
        searchLocation={searchLocation}
        windowSize={windowSize}
      />
      <Guide />
    </Container>
  );
};

export default MainPresenter;
