import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { ContextValue } from '../App';

  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  
const LineChart = () => {

    const [value] = useContext(ContextValue)

    let labelValues= Object.keys(value)
    let dataValues= Object.values(value)
    console.log(labelValues, dataValues)
    return (
        <div>
            <Line data={{
    labels: labelValues,
    datasets: [
      {
        label: 'Votes',
        data: dataValues,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }} options={options} />
        </div>
    )
}

export default LineChart
