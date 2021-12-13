import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import GreenMarker from "../../src/assets/green_marker.png";
import YellowMarker from "../../src/assets/yellow_marker.png";
import RedMarker from "../../src/assets/red_marker.png";
import GrayMarker from "../../src/assets/gray_marker.png";
import BlueMarker from "../../src/assets/blue_marker.png";
const Container = styled.div`
  width: 740px;
  margin: 20px;
  border-radius: 12px;
`;

const { kakao } = window;

const MapComponent = ({ isClickedItem, result }) => {
  const mapRef = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);
  const initializeColorMap = useCallback((colorMarkerMap) => {
    colorMarkerMap.set("GREEN", GreenMarker);
    colorMarkerMap.set("YELLOW", YellowMarker);
    colorMarkerMap.set("RED", RedMarker);
    colorMarkerMap.set("GRAY", GrayMarker);
  }, []);

  // 클릭한 아이템 위치로 카메라 이동
  const handleMoveLocation = useCallback(() => {
    if (isClickedItem.lat !== null && isClickedItem.long !== null) {
      let clickedLocation = new kakao.maps.LatLng(
        isClickedItem.lat,
        isClickedItem.long
      );

      kakaoMap.setCenter(clickedLocation);
      kakaoMap.setLevel(3);
    }
  }, [isClickedItem, kakaoMap]);

  // 마커 설정 및 클러스터
  const handleClusterMarker = useCallback(
    (markers) => {
      let clusterer = new kakao.maps.MarkerClusterer({
        map: kakaoMap,
        averageCenter: true,
        minLevel: 8,
      });
      clusterer.addMarkers(markers);
      kakao.maps.event.addListener(
        clusterer,
        "clusterclick",
        function (cluster) {
          let level = kakaoMap.getLevel() - 1;
          kakaoMap.setLevel(level, { anchor: cluster.getCenter() });
        }
      );
    },
    [kakaoMap]
  );

  const handleSetMarker = useCallback(
    (colorMarkerMap, result) => {
      const imageSize = new kakao.maps.Size(35, 35);

      if (result && result.length > 0) {
        const markers = result.map((item) => {
          return new kakao.maps.Marker({
            map: kakaoMap,
            position: new kakao.maps.LatLng(
              parseFloat(item.lat),
              parseFloat(item.lng)
            ),
            title: item.name,
            image: new kakao.maps.MarkerImage(
              colorMarkerMap.get(item.color),
              imageSize
            ),
          });
        });
        handleClusterMarker(markers);
      }
    },
    [kakaoMap, handleClusterMarker]
  );

  const handleGetCurrentLocation = (map) => {
    const imageSize = new kakao.maps.Size(45, 45);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude,
          lon = position.coords.longitude;

        let locPosition = new kakao.maps.LatLng(lat, lon);

        let marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
          image: new kakao.maps.MarkerImage(BlueMarker, imageSize),
        });
        let message =
          '<div style="padding:12px; font-size: 12px; border-radius: 12px; border: 1px solid #d4d4d4; background-color : #ffffff;">지금 여기에 있어요!</div>'; // 인포윈도우에 표시될 내용입니다

        let iwContent = message; // 인포윈도우에 표시할 내용

        let customOverlay = new kakao.maps.CustomOverlay({
          position: locPosition,
          content: iwContent,
          xAnchor: 0.3,
          yAnchor: 0,
          zIndex: 3,
        });

        customOverlay.setMap(map);

        map.setCenter(locPosition);
        map.setLevel(5);
      });
    }
  };

  useMemo(() => {
    let colorMarkerMap = new Map();
    initializeColorMap(colorMarkerMap);
    handleSetMarker(colorMarkerMap, result);
  }, [initializeColorMap, handleSetMarker, result]);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(37.0767728142858, 127.132497850726),
      level: 13,
    };
    const map = new kakao.maps.Map(mapRef.current, mapOptions);
    setKakaoMap(map);
    handleGetCurrentLocation(map);
  }, [mapRef]);

  useEffect(() => {
    handleMoveLocation(isClickedItem);
  }, [handleMoveLocation, isClickedItem]);

  return <Container id="map" ref={mapRef} />;
};

export default MapComponent;
