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

  // 마커 설정
  const handleSetMarker = useCallback(
    (colorMarkerMap, result) => {
      const imageSize = new kakao.maps.Size(35, 35);
      if (result && result.length > 0) {
        result.map((item) => {
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
      }
    },
    [kakaoMap]
  );

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
  }, [mapRef]);

  useEffect(() => {
    handleMoveLocation(isClickedItem);
  }, [handleMoveLocation, isClickedItem]);

  return <Container id="map" ref={mapRef} />;
};

export default MapComponent;
