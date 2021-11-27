import React, { useState } from "react";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";
import { ButtonWrapper, Container, HideButton } from "./styles";
import { BsArrowBarLeft } from "react-icons/bs";
const MainPresenter = ({ currentPosition }) => {
  const [showSearch, setShowSearch] = useState(true);
  const toggleSearchComponent = () => setShowSearch((prev) => !prev);
  return (
    <Container>
      <ButtonWrapper show={showSearch}>
        <HideButton onClick={toggleSearchComponent}>
          <BsArrowBarLeft />
        </HideButton>
      </ButtonWrapper>
      <Search showSearch={showSearch} />
      <MapComponent currentPosition={currentPosition} showSearch={showSearch} />
    </Container>
  );
};

export default MainPresenter;
