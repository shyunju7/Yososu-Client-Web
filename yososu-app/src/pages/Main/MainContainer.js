import React, { useCallback, useEffect, useState } from "react";
import { yososuApi } from "../../api";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    searchLocation("");
  }, []);

  const searchLocation = useCallback((searchTerm) => {
    yososuApi
      .getInventoriesInStockOrder(searchTerm)
      .then((value) => {
        console.log(`value `, value.data.data);
        setResult(value.data.data);
      })
      .catch(function () {
        console.log(`error...`);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <MainPresenter
      result={result}
      isLoading={isLoading}
      searchLocation={searchLocation}
    />
  );
};

export default MainContainer;
