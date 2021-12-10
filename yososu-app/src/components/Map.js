import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GreenMarker from "../../src/assets/green_marker.png";
import YellowMarker from "../../src/assets/yellow_marker.png";
import RedMarker from "../../src/assets/red_marker.png";
import GrayMarker from "../../src/assets/gray_marker.png";
const Container = styled.div`
  width: 740px;
  margin: 20px;
  border-radius: 12px;
`;
const { kakao } = window;

const MapComponent = ({ showSearch, isClickedItem, result }) => {
  const mapRef = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);

  let colorMarkerMap = new Map();

  useEffect(() => {
    initializeColorMap();
    const mapOptions = {
      center: new kakao.maps.LatLng(37.0767728142858, 127.132497850726),
      level: 13,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOptions);
    setKakaoMap(map);
    setMarkers(map);
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

  const initializeColorMap = () => {
    colorMarkerMap.set("GREEN", GreenMarker);
    colorMarkerMap.set("YELLOW", YellowMarker);
    colorMarkerMap.set("RED", RedMarker);
    colorMarkerMap.set("GRAY", GrayMarker);
  };

  const setMapControl = () => {
    let mapTypeControl = new kakao.maps.MapTypeControl();
    let zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  };

  const setMarkers = (map) => {
    const imageSize = new kakao.maps.Size(24, 35);
    for (let i = 0; i < result.length; i++) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(result[i].lat, result[i].long),
        title: result[i].title,
        image: new kakao.maps.MarkerImage(
          colorMarkerMap.get(result[i].color),
          imageSize
        ),
      });
      kakao.maps.event.addListener(marker, "click", openInfoWindow);
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
      }
    });
  };

  const openInfoWindow = () => {
    console.log("click");
  };

  return <Container id="map" show={showSearch} ref={mapRef} />;
};

export default MapComponent;
