import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 710px;
  margin: 20px;
  border-radius: 12px;
`;
const { kakao } = window;

const MapComponent = ({ showSearch, isClickedItem }) => {
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

  useEffect(() => {
    if (kakaoMap === null) return;

    if (isClickedItem.length > 0) moveToLocation(isClickedItem);
  }, [isClickedItem]);

  const setMapControl = () => {
    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  };

  const moveToLocation = (address) => {
    console.log(`address :`, address);
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log("ok");
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log(coords);
        const marker = new kakao.maps.Marker({
          map: kakaoMap,
          position: coords,
        });
        kakaoMap.setCenter(coords);
      }
    });
  };

  return <Container id="map" show={showSearch} ref={mapRef} />;
};

export default MapComponent;
