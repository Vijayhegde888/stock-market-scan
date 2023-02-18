import React, { useEffect } from "react";
import StockList from "./stock-list";
import useFetch from "../hooks/useFetch";
import Loader from "./loader/Loader";
import Error from "./error/Error";
const Home = () => {
  const { isLoading, stockData, error } = useFetch();

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("stockData", stockData);
  }, [stockData]);

  return (
    <main className="flex justify-center items-center h-screen">
      {!isLoading && stockData && stockData.length > 0 && (
        <section className="bg-white shadow-md rounded px-8 py-6 overflow-hidden sm:rounded-md md:min-w-[30vw]">
          <ul role="list" className="divide-y divide-gray-200">
            <StockList stockData={stockData} />
          </ul>
        </section>
      )}
      {isLoading && <Loader />}
      {error && <Error/>}
    </main>
  );
};

export default Home;
