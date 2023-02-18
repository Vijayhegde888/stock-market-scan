import React from "react";
import { Link } from "react-router-dom";

const StockList = ({ stockData }) => {
  return (
    <>
      {stockData.map((ele, index, arr) => {
        return (
          <li>
            <Link className="block hover:bg-gray-50" to={`/details/${index+1}`}>
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex">
                      <p className="truncate font-medium text-indigo-600">
                        {ele.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-16 flex flex-shrink-0">
                  <p className={`bg-${ele.color}-100 text-${ele.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`}>
                    {ele.tag}
                  </p>
                  {/* <p class="bg-green-100 text-green-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bullish</p> */}
                  {/* <p class="bg-red-100 text-red-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bearish</p> */}
                </div>
                <div className="ml-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default StockList;
