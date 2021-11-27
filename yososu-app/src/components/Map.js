import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.show ? "70%" : "100%")};
  height: 100%;
`;
const { kakao } = window;

const MapComponent = ({ currentPosition, showSearch }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, mapOptions);

    // map controller
    // let mapTypeControl = new kakao.maps.MapTypeControl();
    // let zoomControl = new kakao.maps.ZoomControl();
    // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    map.relayout();
  }, [showSearch]);

  return <Container id="map" show={showSearch} />;
};

export default MapComponent;
