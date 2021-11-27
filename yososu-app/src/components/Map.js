import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  height: 100%;
`;
const { kakao } = window;

const MapComponent = ({ currentPosition }) => {
  useEffect(() => {
    console.log(`position,`, currentPosition);
    const container = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, mapOptions);
  }, []);
  return <Container id="map" />;
};

export default MapComponent;
