import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const MainContainer = ({ windowSize }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isClickedItem, setClickItem] = useState({ lat: null, long: null });
  const [isClickedListButton, setClickListButton] = useState(false);

  const searchLocation = useCallback(
    async (searchTerm, sortingValue = "재고량순") => {
      setResult([]);
      if (sortingValue === "재고량순") {
        await yososuApi
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
      } else {
        await yososuApi
          .getInventoriesInPriceOrder(searchTerm)
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
      }
    },
    [setResult]
  );

  useEffect(() => {
    setResult([]);
    searchLocation("강원도");
  }, [searchLocation]);

  return (
    <MainPresenter
      result={result}
      isLoading={isLoading}
      isClickedItem={isClickedItem}
      setClickItem={setClickItem}
      isClickedListButton={isClickedListButton}
      setClickListButton={setClickListButton}
      searchLocation={searchLocation}
      error={error}
      windowSize={windowSize}
    />
  );
};

export default MainContainer;
