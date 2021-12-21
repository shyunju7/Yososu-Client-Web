import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const MainContainer = ({ windowSize }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
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
      result={result}
      isLoading={isLoading}
      searchLocation={searchLocation}
      error={error}
      windowSize={windowSize}
    />
  );
};

export default MainContainer;
