import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

// const testData = [
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
//   {
//     addr: "경기 가평군 청평면 경춘로 113",
//     code: "A0006712",
//     inventory: "2000",
//     lat: "37.68621310",
//     lng: "127.37913190",
//     name: "화랑포주유소",
//     openTime: "정보없음",
//     price: "2500",
//     regDt: "6시간 전",
//     tel: "031-584-1818",
//     color: "GREEN",
//   },
// ];

const MainContainer = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchLocation = useCallback(
    (searchTerm) => {
      console.log("tt");
      yososuApi
        .getInventoriesInStockOrder(searchTerm)
        .then((value) => {
          setResult(value.data.data);
        })
        .catch(function () {
          setError("API 통신 오류 - 관리자에게 문의해주세요:)");
        })
        .finally(
          setTimeout(() => {
            setLoading(false);
          }, 500)
        );
    },
    [setResult]
  );

  useEffect(() => {
    setResult([]);
    searchLocation("강원");
  }, [searchLocation]);

  return (
    <MainPresenter
      result={result}
      isLoading={isLoading}
      searchLocation={searchLocation}
      error={error}
    />
  );
};

export default MainContainer;
