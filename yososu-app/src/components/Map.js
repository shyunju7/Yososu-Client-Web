import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 740px;
  margin: 20px;
  border-radius: 12px;
`;
const { kakao } = window;

const MapComponent = ({ showSearch, isClickedItem, result }) => {
  const mapRef = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);

  const [selectedMarker, setSelectMarker] = useState(null);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(37.0767728142858, 127.132497850726),
      level: 13,
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

    if (isClickedItem.length > 0) {
      moveToLocation(isClickedItem);
    }
  }, [isClickedItem]);

  const setMapControl = () => {
    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);

      new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(result[i].lat, result[i].long),
        title: result[i].title,
      });
    }
  };

  const moveToLocation = (address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        const marker = new kakao.maps.Marker({
          map: kakaoMap,
          position: coords,
        });
        kakaoMap.setCenter(coords);
        kakaoMap.setLevel(4);
        kakao.maps.event.addListener(marker, "click", function () {
          if (!selectedMarker || selectedMarker !== marker) {
            !!selectedMarker &&
              selectedMarker.setImage(selectedMarker.normalImage);
          }
        });
      }
    });
  };

  return <Container id="map" show={showSearch} ref={mapRef} />;
};

export default MapComponent;
