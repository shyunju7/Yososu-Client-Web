import React, { useState } from "react";
import Guide from "../../components/Guide";
import MapComponent from "../../components/Map";
import MobileSearchList from "../../components/MobileSearchList";
import Search from "../../components/Search";
import Loading from "../../Loading";
import { Container, ListButton } from "./styles";
const MainPresenter = ({ result, isLoading, searchLocation, windowSize }) => {
  const [isClickedItem, setClickItem] = useState({ lat: null, long: null });
  const [isClickedListButton, setClickListButton] = useState(false);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      {windowSize <= 740 ? (
        <ListButton
          onClick={() => {
            setClickListButton((prev) => !prev);
          }}
        >
          목록보기
        </ListButton>
      ) : (
        <Search
          setClickItem={setClickItem}
          result={result}
          isLoading={isLoading}
          searchLocation={searchLocation}
          windowSize={windowSize}
        />
      )}

      {isClickedListButton ? (
        <MobileSearchList
          result={result}
          setClickItem={setClickItem}
          searchLocation={searchLocation}
          setClickListButton={setClickListButton}
          isClickedListButton={isClickedListButton}
        />
      ) : null}

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
