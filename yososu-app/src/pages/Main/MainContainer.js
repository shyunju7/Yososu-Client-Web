import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const testData = [
  {
    addr: "경기 김포시 월곶면 김포대로 2759 (월곶면)",
    code: "A0011946",
    inventory: "6221",
    lat: "37.71199190",
    lng: "126.54752030",
    name: "삼미상사(주) 유명셀프주유소",
    openTime: "정보없음",
    price: "2200",
    regDt: "57분 전",
    tel: "031-984-8880",
    color: "GREEN",
  },
  {
    addr: "경기 용인시 처인구 원삼면 죽양대로 2287",
    code: "A0007334",
    inventory: "5900",
    lat: "37.23202430",
    lng: "127.29791890",
    name: "슈퍼맨주유소(주)",
    openTime: "정보없음",
    price: "1800",
    regDt: "5시간 전",
    tel: "031-323-5145",
    color: "GREEN",
  },
  {
    addr: "광주 북구 빛고을대로 825 (지야동)",
    code: "A0033064",
    inventory: "5570",
    lat: "35.23416680",
    lng: "126.87558010",
    name: "광주주유소",
    openTime: "정보없음",
    price: "1500",
    regDt: "1일 전",
    tel: "062-575-5116",
    color: "GREEN",
  },
  {
    addr: "경북 영천시 북안면 임포역길 37",
    code: "A0024308",
    inventory: "5170",
    lat: "35.92453550",
    lng: "129.01403870",
    name: "(주)HC대하에너지 북안주유소",
    openTime: "정보없음",
    price: "1300",
    regDt: "2시간 전",
    tel: "054-338-5182",
    color: "GREEN",
  },
  {
    addr: "경기 화성시 정남면 발안로 1059",
    code: "A0002009",
    inventory: "4830",
    lat: "37.13072160",
    lng: "127.01826700",
    name: "(주)서진주유소 화성지점 공단주유소",
    openTime: "정보없음",
    price: "2500",
    regDt: "1일 전",
    tel: "031-377-5150",
    color: "GREEN",
  },
  {
    addr: "강원 원주시 문막읍 원문로 2075",
    code: "A0033519",
    inventory: "4790",
    lat: "37.30079940",
    lng: "127.80216360",
    name: "문막농협공단클린주유소",
    openTime: "정보없음",
    price: "2300",
    regDt: "3일 전",
    tel: "033-734-5182",
    color: "GREEN",
  },
  {
    addr: "경남 함안군 군북면 현포로 205",
    code: "A0031971",
    inventory: "4600",
    lat: "35.29346680",
    lng: "128.34806450",
    name: "함안(부산방향)",
    openTime: "매일 24시간",
    price: "1200",
    regDt: "2시간 전",
    tel: "055-583-9341",
    color: "GREEN",
  },
  {
    addr: "충북 옥천군 옥천읍 중앙로 137",
    code: "A0012719",
    inventory: "4350",
    lat: "36.30904598",
    lng: "127.57117970",
    name: "옥천만남의광장",
    openTime: "매일 24시간",
    price: "1300",
    regDt: "3시간 전",
    tel: "043-732-0081",
    color: "GREEN",
  },
  {
    addr: "경기 평택시 진위면 경기대로 1905",
    code: "A0005961",
    inventory: "4329",
    lat: "37.11455730",
    lng: "127.06321270",
    name: "(주)스마트오일주유소",
    openTime: "정보없음",
    price: "2200",
    regDt: "14시간 전",
    tel: "031-668-6161",
    color: "GREEN",
  },
  {
    addr: "전남 목포시 영산로 811",
    code: "A0021075",
    inventory: "4260",
    lat: "34.83612800",
    lng: "126.41994700",
    name: "목포나들목주유소",
    openTime: "정보없음",
    price: "1800",
    regDt: "11시간 전",
    tel: "061-285-5189",
    color: "GREEN",
  },
  {
    addr: "인천광역시 연수구 아암대로 801",
    code: "A0033231",
    inventory: "4068",
    lat: "37.39765100",
    lng: "126.66055630",
    name: "로드801 주식회사",
    openTime: "정보없음",
    price: "1600",
    regDt: "12시간 전",
    tel: "032-813-2000",
    color: "GREEN",
  },
];

const MainContainer = ({ windowSize }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchLocation = useCallback(
    (searchTerm) => {
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
      result={testData}
      isLoading={isLoading}
      searchLocation={searchLocation}
      error={error}
      windowSize={windowSize}
    />
  );
};

export default MainContainer;
