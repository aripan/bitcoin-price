import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import React, { useContext, useEffect, useState } from "react";
import { ContextValue } from "../App";
import { formatDate } from "./FormatDate";
import styles from "./Style.module.css";

const FetchToRenderData = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [date, setDate] = useState([new Date(), new Date()]);
  const [updateValue, setUpdatedValue] = useContext(ContextValue);
  const [value, setValue] = useContext(ContextValue);

  useEffect(() => {
    const startDate = formatDate(date[0]);
    const endDate = formatDate(date[1]);
    let URL;
   
    if (startDate === endDate) {
      URL = `https://api.coindesk.com/v1/bpi/historical/close.json`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setValue(data.bpi));
    } else {
      URL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
    }
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setFetchedData(data.bpi));
  }, [date, setValue]);

  const handleRender = () => {
    if (fetchedData) {
      setUpdatedValue(fetchedData);
    }
  };
  
//   console.log(value, updateValue);

  return (
    <div className={styles.date}>
      <DateRangePicker onChange={setDate} value={date} />
      <button className={styles.btn} onClick={handleRender}>
        Render
      </button>
    </div>
  );
};

export default FetchToRenderData;
