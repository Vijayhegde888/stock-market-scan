import { useState, useEffect } from 'react';

function useFetch(url) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [stockData, setStockData] = useState([]);

  useEffect(() => {
     
    fetchStockScansData();
      
      
  }, [url])


  const fetchStockScansData = async () => {
   setIsLoading(true);
        setError("")
        
   try {
      const response = await fetch(
        "https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6"
      );
      const responseData = await response.json();
      setStockData(responseData.data);
      console.log("data", responseData.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("error occured");
    }
  };



  return { isLoading,stockData,error }
}
export default useFetch;