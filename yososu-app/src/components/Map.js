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

    // map controller
    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);
  return <Container id="map" />;
};

export default MapComponent;
