import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState("stock");

  const searchLocation = useCallback(
    (searchTerm) => {
      setLoading(true);
      if (radioValue === "stock") {
        yososuApi
          .getInventoriesInStockOrder(searchTerm)
          .then((value) => {
            setResult(value.data.data);
            console.log(`result`, value.data.data);
          })
          .catch(function () {
            console.log(`관리자에게 문의해주세요..`);
          })
          .finally(
            setTimeout(() => {
              setLoading(false);
            }, 500)
          );
      } else {
        yososuApi
          .getInventoriesInPriceOrder(searchTerm)
          .then((value) => {
            setResult(value.data.data);
            console.log(`result`, value.data.data);
          })
          .catch(function () {
            console.log(`관리자에게 문의해주세요..`);
          })
          .finally(
            setTimeout(() => {
              setLoading(false);
            }, 500)
          );
      }
    },
    [radioValue]
  );

  useEffect(() => {
    setResult([]);
    searchLocation("");
  }, [radioValue, searchLocation]);

  return (
    <MainPresenter
      result={result}
      isLoading={isLoading}
      searchLocation={searchLocation}
      setRadioValue={setRadioValue}
      radioValue={radioValue}
    />
  );
};

export default MainContainer;
