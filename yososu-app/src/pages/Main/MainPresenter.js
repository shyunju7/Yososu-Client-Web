import React from "react";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";
import { Container } from "./styles";

const MainPresenter = ({ currentPosition }) => {
  return (
    <Container>
      <Search />
      <MapComponent currentPosition={currentPosition} />
    </Container>
  );
};

export default MainPresenter;
