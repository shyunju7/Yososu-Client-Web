import React, { useEffect, useState } from "react";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";
import { Container, ListButton } from "./styles";
const MainPresenter = ({ result }) => {
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
  return (
    <Container>
      {windowSize <= 740 ? (
        <ListButton>목록보기</ListButton>
      ) : (
        <Search
          showSearch={showSearch}
          setClickItem={setClickItem}
          result={result}
        />
      )}
      <MapComponent
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        isClickedItem={isClickedItem}
        result={result}
      />

      {/* <Guide /> */}
    </Container>
  );
};

export default MainPresenter;
