import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.show ? "70%" : "100%")};
  height: 100%;
`;
const { kakao } = window;

const MapComponent = ({ showSearch }) => {
  const mapRef = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOptions);
    setKakaoMap(map);
  }, [mapRef]);

  useEffect(() => {
    if (kakaoMap === null) return;
    setMapControl();
    kakaoMap.relayout();
  }, [kakaoMap]);

  useEffect(() => {
    if (kakaoMap === null) return;
    kakaoMap.relayout();
  }, [showSearch]);

  const setMapControl = () => {
    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  };

  return <Container id="map" show={showSearch} ref={mapRef} />;
};

export default MapComponent;
