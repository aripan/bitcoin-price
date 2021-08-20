import React from 'react';
import { Line } from 'react-chartjs-2';
import { data, options } from "./DataOfChart";



  
const LineChart = () => {
    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
