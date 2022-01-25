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
  width: ${(props) =>
    props.windowSize <= 740 ? "100vw" : "calc(100vw - 40%)"};
  margin: 20px;
  border-radius: 12px;
`;

const { kakao } = window;

const MapComponent = ({ isClickedItem, result, windowSize }) => {
  const mapRef = useRef();
  const [kakaoMap, setKakaoMap] = useState(null);
  let clusterer = new kakao.maps.MarkerClusterer({
    map: kakaoMap,
    averageCenter: true,
    minLevel: 8,
  });
  const initializeColorMap = useCallback((colorMarkerMap) => {
    colorMarkerMap.set("GREEN", GreenMarker);
    colorMarkerMap.set("YELLOW", YellowMarker);
    colorMarkerMap.set("RED", RedMarker);
    colorMarkerMap.set("GRAY", GrayMarker);
  }, []);

  const handleSetLocInfo = useCallback(
    (isClickedItem) => {
      const { lat, lng, name, addr, tel, openTime, inventory, price, regDt } =
        isClickedItem;

      let message =
        '<div style="display: flex; flex-direction: column;' +
        'padding:12px; font-size: 12px; border-radius: 12px; border: 1px solid #d4d4d4; background-color : #ffffff;">' +
        '<h2 style="font-family: S-CoreDream-6Bold; padding-bottom: 4px; border-bottom : 1px solid #dcdcdc;">' +
        name +
        "</h2>" +
        '<span style="margin-top: 8px; color: #979797;" font-weight: 700;> 가격 ' +
        '<span style="color : #1A39ED; font-family: S-CoreDream-6Bold; ">' +
        price +
        "</span>" +
        "   재고량 " +
        '<span style="color : #1A39ED; font-family: S-CoreDream-6Bold; ">' +
        inventory +
        "</span>" +
        "</span>" +
        '<span style="margin-top: 6px;"> ⛽️ ' +
        addr +
        "</span>" +
        '<span style="margin-top: 6px;"> 📞 ' +
        tel +
        "</span>" +
        '<span style="margin-top: 6px;"> 🕒 ' +
        openTime +
        "</span>" +
        '<span style="margin-top: 6px;" >' +
        regDt +
        " 업데이트 </span>" +
        "</div>";

      let content = message;

      let customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lng),
        content: content,
        xAnchor: 0.5,
        yAnchor: 1.3,
        zIndex: 3,
      });

      customOverlay.setMap(kakaoMap);

      kakao.maps.event.addListener(kakaoMap, "zoom_changed", function () {
        customOverlay.setMap(null);
      });
    },
    [kakaoMap]
  );

  // 클릭한 아이템 위치로 카메라 이동
  const handleMoveLocation = useCallback(() => {
    let clickedLocation;
    if (isClickedItem.lat !== null && isClickedItem.lng !== null) {
      if (isClickedItem.lat !== "0E-8") {
        clickedLocation = new kakao.maps.LatLng(
          isClickedItem.lat,
          isClickedItem.lng
        );
        kakaoMap.setLevel(3);
        kakaoMap.setCenter(clickedLocation);
        handleSetLocInfo(isClickedItem);
      } else {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(isClickedItem.addr, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            kakaoMap.setLevel(3);
            kakaoMap.setCenter(coords);

            handleSetLocInfo({
              lat: result[0].y,
              lng: result[0].x,
              name: isClickedItem.name,
              addr: isClickedItem.addr,
              tel: isClickedItem.tel,
              openTime: isClickedItem.openTime,
              inventory: isClickedItem.inventory,
              price: isClickedItem.price,
              regDt: isClickedItem.regDt,
            });

            let colorMarkerMap = new Map();
            colorMarkerMap.set("GREEN", GreenMarker);
            colorMarkerMap.set("YELLOW", YellowMarker);
            colorMarkerMap.set("RED", RedMarker);
            colorMarkerMap.set("GRAY", GrayMarker);

            let marker = new kakao.maps.Marker({
              map: kakaoMap,
              position: new kakao.maps.LatLng(
                parseFloat(result[0].y),
                parseFloat(result[0].x)
              ),
              title: isClickedItem.name,
              image: new kakao.maps.MarkerImage(
                colorMarkerMap.get(isClickedItem.color),
                new kakao.maps.Size(35, 35)
              ),
            });

            kakao.maps.event.addListener(marker, "click", function () {
              handleSetLocInfo({
                lat: result[0].y,
                lng: result[0].x,
                name: isClickedItem.name,
                addr: isClickedItem.addr,
                tel: isClickedItem.tel,
                openTime: isClickedItem.openTime,
                inventory: isClickedItem.inventory,
                price: isClickedItem.price,
                regDt: isClickedItem.regDt,
              });
            });
          }
        });
      }
    }
  }, [isClickedItem, kakaoMap, handleSetLocInfo]);

  // 마커 설정 및 클러스터
  const handleClusterMarker = useCallback(
    (markers) => {
      clusterer.addMarkers(markers);
      clusterer.setAverageCenter(true);

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
      clusterer.clear();
      if (result && result.length > 0) {
        const markers = result.map((item) => {
          if (!isNaN(item.lat)) {
            let marker = new kakao.maps.Marker({
              map: kakaoMap,
              position: new kakao.maps.LatLng(
                parseFloat(item.lat),
                parseFloat(item.lng)
              ),
              title: item.name,
              image: new kakao.maps.MarkerImage(
                colorMarkerMap.get(item.color),
                new kakao.maps.Size(35, 35)
              ),
            });
            // 마커 클릭 이벤트 추가
            kakao.maps.event.addListener(marker, "click", function () {
              handleSetLocInfo(item);
            });
            return marker;
          }
        });

        handleClusterMarker(markers);
      }
    },
    [kakaoMap, handleClusterMarker, handleSetLocInfo]
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

  useEffect(() => {
    if (kakaoMap !== null) {
      kakaoMap.setCenter(
        new kakao.maps.LatLng(35.845968406219406, 127.134250293995)
      );
      kakaoMap.setLevel(13);
    }
  }, [kakaoMap, result]);

  return <Container id="map" ref={mapRef} windowSize={windowSize} />;
};

export default MapComponent;
