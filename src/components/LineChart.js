import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ContextValue } from "../App";

const options = {
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        color: "black",
        font: {
          size: 14,
          weight: 600,
        },
      },
    },
    x: {
      ticks: {
        color: "black",
        font: {
          size: 14,
          weight: 600,
        },
      },
    },
  },
};

const LineChart = () => {
  const [value] = useContext(ContextValue);

  let labelValues = Object.keys(value);
  let dataValues = Object.values(value);
//   console.log(labelValues, dataValues);
  return (
    <div>
      <Line
        data={{
          labels: labelValues,
          datasets: [
            {
              label: "Price",
              data: dataValues,
              fill: false,
              backgroundColor: "#ffebcd",
              borderColor: "#008b8b",
              pointBorderColor: "#aaa",
              pointBorderWidth: 3,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default LineChart;
