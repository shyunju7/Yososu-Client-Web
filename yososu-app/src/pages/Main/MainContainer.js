import React, { useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    yososuApi
      .getInventoriesInStockOrder()
      .then((value) => {
        console.log(`value `, value);
        setResult(value);
      })
      .catch(function () {
        console.log(`error...`);
      });
  }, []);

  // const result = [
  //   {
  //     id: 1,
  //     title: "안성(서울방향)",
  //     address: "경기도 안성시 원곡면 경부고속도로 372",
  //     operatingTime: "매일 24시간",
  //     phoneNum: "031-664-4096",
  //     stock: "1300",
  //     price: "1200",
  //     lat: "37.0767728142858",
  //     long: "127.132497850726",
  //     color: "GREEN",
  //   },
  //   {
  //     id: 2,
  //     title: "울주(함양방향)",
  //     address: "울산 울주군 삼동면 보은리 산192-3",
  //     operatingTime: "매일 24시간",
  //     phoneNum: "052-977-3243",
  //     stock: "387",
  //     price: "2100",
  //     lat: "35.5132648703594",
  //     long: "129.128189636083",
  //     color: "RED",
  //   },

  //   {
  //     id: 3,
  //     title: "현풍(마산방향)",
  //     address: "대구 달성군 현풍읍 성하길 48",
  //     operatingTime: "매일 24시간",
  //     phoneNum: "053-614-2437",
  //     stock: "1360",
  //     price: "1200",
  //     lat: "35.7016358",
  //     long: "128.4349783",
  //     color: "YELLOW",
  //   },

  //   {
  //     id: 4,
  //     title: "언양(서울방향)",
  //     address: "울산 울주군 언양읍 경부고속도로 44",
  //     operatingTime: "매일 24시간",
  //     phoneNum: "052-263-6146",
  //     stock: "0",
  //     price: "1320",
  //     lat: "35.5987674397808",
  //     long: "129.141538944443",
  //     color: "GRAY",
  //   },
  // ];

  return <MainPresenter result={result} />;
};

export default MainContainer;
