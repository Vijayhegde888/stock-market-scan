import React , { useState } from "react";
import StockContext from "./StockContext";

const StockState = props => {

    const [globalStockData , setGlobalStockData] = useState([]);
    const updateGlobslStockData = (data) => {
        setGlobalStockData(data)
    }

  
    return(
        <StockContext.Provider value={{ globalStockData,updateGlobslStockData}}>
            {props.children}
        </StockContext.Provider>
    );
}

export default StockState;