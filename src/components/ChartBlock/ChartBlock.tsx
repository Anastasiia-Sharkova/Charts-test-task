import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Line, Radar, Doughnut, PolarArea } from 'react-chartjs-2';
import './ChartBlock.scss';

Chart.register(...registerables);

interface Props {
  labels: string[];
  values: number[];
  typeOfChart: string;
}

const firstBackgroundColor = [
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)',
];

const secondBackgroundColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

export const ChartBlock = React.memo<Props>(({ labels, values, typeOfChart }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'content',
        data: values,
        borderColor: secondBackgroundColor,
        borderWidth: [1],
        backgroundColor: firstBackgroundColor,
        hoverBackgroundColor: secondBackgroundColor,
        hoverBorderColor: 'rgba(100, 102, 200, 1)',
        borderRadius: [5],
        maxBarThickness: 76,
        minBarLength: 2,
        circumference: 180,
        rotation: 270,
        cutout: 50,
      },
    ],
  };

  return (
    <div className="chart">
      {typeOfChart === 'bar' && <Bar data={chartData} />}

      {typeOfChart === 'line' && <Line data={chartData} />}

      {typeOfChart === 'polarArea' && <PolarArea data={chartData} />}

      {typeOfChart === 'radar' && <Radar data={chartData} />}

      {typeOfChart === 'doughnut' && <Doughnut data={chartData} />}
    </div>
  );
});
