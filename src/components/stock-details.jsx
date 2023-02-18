import React from 'react'
import { Link } from "react-router-dom";
 const StockDetails = ({currentStockValues}) => {
  return (
    <div id="__next">
        <Link className="inline-flex gap-2 items-center my-3" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Go back
        </Link>
        <div className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw] px-4 py-5 sm:px-4 w-4ull">
          <h3 className="text-2xl font-medium leading-6 text-gray-900">
            {currentStockValues.name}
          </h3>
          <div className="mt-3 flex flex-shrink-0">
            <p className={`bg-${currentStockValues.color}-100 text-${currentStockValues.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5`} >
              {currentStockValues.tag}
            </p>
              {/* <p class="bg-green-100 text-green-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5">Bearish</p> */}
          </div>
          <hr className="w-full border-[0.1px] border-gray-200 mt-5" />
          <ul role="list" className="divide-y divide-gray-200">
            {currentStockValues.criteria &&  currentStockValues.criteria.length >0 && currentStockValues.criteria.map((ele,index) =>{
                return (
                    <li className="flex py-4" key={index}>
                    <p className="font-medium text-gray-900">
                     {ele.text}
                    </p>
                  </li>
                )
            })

            }
           
          </ul>
        </div>
      </div>
  )
}
export default StockDetails;
