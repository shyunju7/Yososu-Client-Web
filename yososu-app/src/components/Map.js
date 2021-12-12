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

const InfoContainer = styled.div`
  width: 200px;
  height: 150px;
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
`;

const { kakao } = window;

const content =
  `<InfoContainer>` +
  "            카카오 스페이스닷원" +
  '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
  '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
  `</InfoContainer>`;

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

      let infoWindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px;">인포윈도우 :D</div>', // 인포윈도우에 표시할 내용
      });

      infoWindow.open(kakaoMap, marker);
      kakao.maps.event.addListener(marker, "click", function () {
        console.log(`clicked! marker:: `, marker);
      });
    }
  };

  const moveToLocation = (address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        kakaoMap.setCenter(coords);
        kakaoMap.setLevel(3);
      }
    });
  };

  return <Container id="map" show={showSearch} ref={mapRef} />;
};

export default MapComponent;
