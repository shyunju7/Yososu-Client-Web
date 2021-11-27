import React from "react";
import MapComponent from "../../components/Map";
import Search from "../../components/Search";
import { Container } from "./styles";

const MainPresenter = () => {
  return (
    <Container>
      <Search />
      <MapComponent />
    </Container>
  );
};

export default MainPresenter;
