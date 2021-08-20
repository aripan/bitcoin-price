import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import React, { useEffect, useState } from "react";

const FetchToRenderData = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [date, setDate] = useState([new Date(), new Date()]);

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

    console.log(URL)
  }, [date]);

  console.log(fetchedData)
  return (
    <div>
      <DateRangePicker onChange={setDate} value={date} />
      <button>Render</button>
    </div>
  );
};

export default FetchToRenderData;
