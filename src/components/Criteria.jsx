import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import StockDetails from "./stock-details";
import Loader from "./loader/Loader";
import Error from "./error/Error";
const Criteria = () => {
  const [currentStockValues, setCurrentStockValues] = useState({});
  const { isLoading, stockData, error } = useFetch();
  

  let { stockId } = useParams();
  console.log("stockId", stockId);

  useEffect(() => {
    const currentStockEleData = stockData.find(
      (ele) => ele.id == stockId
    );
    setCurrentStockValues(currentStockEleData);
  }, [stockData.length]);

  useEffect(() => {
    console.log("currentStockValues", currentStockValues);
  }, [currentStockValues]);

  console.log("stockData", stockData);
  return (
    <main className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
     
    {currentStockValues && Object.values(currentStockValues).length>0 && <StockDetails currentStockValues={currentStockValues}/> }
    {isLoading && <Loader/>}
    {error && <Error/>}
    </main>
  );
};
export default Criteria;
