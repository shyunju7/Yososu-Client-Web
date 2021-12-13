import React, { useEffect, useState } from "react";
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
  setRadioValue,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isClickedItem, setClickItem] = useState({ lat: null, long: null });
  const [windowSize, setResizeWindow] = useState(window.innerWidth);

  const handleResize = () => {
    setResizeWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      {windowSize <= 740 && showSearch ? (
        <MobileSearchList result={result} showSearch={showSearch} />
      ) : null}

      {windowSize <= 740 ? (
        <ListButton onClick={() => setShowSearch((prev) => !prev)}>
          목록보기
        </ListButton>
      ) : (
        <Search
          showSearch={showSearch}
          setClickItem={setClickItem}
          result={result}
          isLoading={isLoading}
          searchLocation={searchLocation}
          setRadioValue={setRadioValue}
        />
      )}
      <MapComponent isClickedItem={isClickedItem} result={result} />
      <Guide />
    </Container>
  );
};

export default MainPresenter;
