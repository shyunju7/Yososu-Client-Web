import React, { useEffect, useState } from "react";
import Guide from "../../components/Guide";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";
import { Container, ListButton } from "./styles";
const MainPresenter = ({ result, isLoading, searchLocation }) => {
  const [showSearch, setShowSearch] = useState(true);
  const [isClickedItem, setClickItem] = useState("");
  const [windowSize, setResizewindow] = useState(window.innerWidth);

  const handleResize = () => {
    setResizewindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickListButton = () => {
    console.log(`목록보기`);
  };
  return (
    <Container>
      {windowSize <= 740 ? (
        <ListButton onClick={onClickListButton}>목록보기</ListButton>
      ) : (
        <Search
          showSearch={showSearch}
          setClickItem={setClickItem}
          result={result}
          isLoading={isLoading}
          searchLocation={searchLocation}
        />
      )}
      <MapComponent
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        isClickedItem={isClickedItem}
        result={result}
      />

      <Guide />
    </Container>
  );
};

export default MainPresenter;
