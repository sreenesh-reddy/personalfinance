import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );

import useFetch from '../../hooks/useFetch';

export default function PieChart(){
    const {totalAmount} = useFetch();

    const options = {
      plugins: {
          legend: {
              display: true,  // Set to false to disable legends
              position: 'right',  // You can set 'top', 'left', 'bottom', 'right'
          },
      },
  };

    const data = {
        labels: ['Expense', 'Income'],
        datasets: [
          {
            label: ['Amount'],
            data: [totalAmount.expense, totalAmount.income],
            backgroundColor: ['#FA3E39', '#92FA6E'],
             borderColor: 'transparent',
            hoverBackgroundColor: ['#FA282E', '#62FA39'],
          },
        ],
      };

return(<div className="pie-chart-container">
<Pie data={data} options={options}/>
</div>)
}   