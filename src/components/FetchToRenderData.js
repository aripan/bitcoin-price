import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import React, { useContext, useEffect, useState } from "react";
import { ContextValue } from "../App";


const FetchToRenderData = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [date, setDate] = useState([new Date(), new Date()]);
  const [setUpdatedValue] = useContext(ContextValue)
  const [value, setValue] = useContext(ContextValue)

  const formatDate = (dateInput) => {
    const newDate = new Date(dateInput);
    const monthValue =
      newDate.getMonth() < 10
        ? "0" + (newDate.getMonth() + 1).toString()
        : (newDate.getMonth() + 1).toString;

    const dateValue = newDate.getDate() < 10
    ? "0" + (newDate.getDate()).toString()
    : (newDate.getDate());
    return `${newDate.getFullYear()}-${monthValue}-${dateValue}`;
  };

  
  useEffect(() => {
    const startDate = formatDate(date[0]);
    const endDate = formatDate(date[1]);
    let URL;
if(startDate === endDate){
    URL =`https://api.coindesk.com/v1/bpi/historical/close.json`
    fetch(URL)
        .then((res) => res.json())
        .then((data) => setValue(data.bpi))
} else{
    URL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}
    try {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setFetchedData(data.bpi))
      
    } catch (error) {
      console.log("Please select a date range");
    }

    
  }, [date, setValue]);

  const handleRender=()=>{
      if(fetchedData){
        setUpdatedValue(fetchedData)
      }
    }
  console.log(value)
 
  return (
    <div>
      <DateRangePicker onChange={setDate} value={date} />
      <button onClick={handleRender}>Render</button>
    </div>
  );
};

export default FetchToRenderData;
