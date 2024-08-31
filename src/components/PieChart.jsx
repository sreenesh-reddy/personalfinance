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

import useFetch from '../hooks/useFetch';

export default function PieChart(){
    const {totalAmount} = useFetch();
    const data = {
        labels: ['Expense', 'Income'],
        datasets: [
          {
            label: ['Amount'],
            data: [totalAmount.expense, totalAmount.income],
            backgroundColor: ['#FA3E39', '#92FA6E'],
            hoverBackgroundColor: ['#FA282E', '#62FA39'],
          },
        ],
      };

return(<div className="pie-chart-container">
<Pie data={data}/>
</div>)
}   