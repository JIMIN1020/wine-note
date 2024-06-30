import React from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Ratings } from '@/models/analysis.model';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const RatingChart = ({ ratings }: { ratings: Ratings }) => {
  const data: ChartData<'line'> = {
    labels: [
      '0점',
      '0.5점',
      '1점',
      '1.5점',
      '2점',
      '2.5점',
      '3점',
      '3.5점',
      '4점',
      '4.5점',
      '5점',
    ],
    datasets: [
      {
        data: [
          ratings['0'],
          ratings['0.5'],
          ratings['1'],
          ratings['1.5'],
          ratings['2'],
          ratings['2.5'],
          ratings['3'],
          ratings['3.5'],
          ratings['4'],
          ratings['4.5'],
          ratings['5'],
        ],
        backgroundColor: '#45007b',
        pointBorderWidth: 4,
        borderWidth: 3,
        borderColor: '#45007b',
        tension: 0.3,
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default RatingChart;

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      intersect: false,
      position: 'nearest',
      displayColors: false,
      bodySpacing: 5, // 툴팁 내부 항목들 간 간격
      bodyFont: {
        family: 'Pretendard',
      },
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';

          if (context.parsed.y !== null) {
            label += context.parsed.y + '개';
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
  },
};
