 'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughtChart = ({accounts}: DoughnutChartProps) => {
  const data = {
    datasets:[
        {
            label:'Banks',
            data: [1250,2500, 3750],
            backgroundColor: ['#0747b6', '#2265d8', '#2265d8']
        }
    ],
    labels: ['bank 1', 'bank2', 'Bank3']
  }
    return (
    <div>
        <Doughnut
         data={data}
         options={{
                cutout: '60%',
                plugins:{
                    legend: {
                        display: false
                    }
                }
            }}
         />
    </div>
  )
}

export default DoughtChart
