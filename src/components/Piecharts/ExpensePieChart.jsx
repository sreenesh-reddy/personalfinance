import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Pie } from 'react-chartjs-2';

export default function ExpensePieChart(){
    const {tran} = useFetch();
    console.log(tran);
    const expenses=tran.filter((x)=>x.type==='0')
    const generateRandomColors = (numColors) => {
      const colors = [];
      for (let i = 0; i < numColors; i++) {
          const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          colors.push(color);
      }
      return colors;
  };
  const options = {
    plugins: {
        legend: {
            display: true,  // Set to false to disable legends
            position: 'right',  // You can set 'top', 'left', 'bottom', 'right'
        },
    },
};
    const data = {
        labels: expenses.map(x=>x.name),
        datasets: [
          {
            label: ['Amount'],
            data: expenses.map(x=>x.amount),
            backgroundColor: generateRandomColors(expenses.length),
            hoverBackgroundColor: ['white', 'black'],
            borderColor: 'transparent',
          },
        ],
      };

return(<div className="pie-chart-container">
<Pie data={data} options={options}/>
</div>)
}   