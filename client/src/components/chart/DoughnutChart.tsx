import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;

const data: ChartData<'doughnut'> = {
  labels: ['Red', 'White', '기타'],
  datasets: [
    {
      data: [54, 32, 14],
      backgroundColor: ['#46007bc8', '#46007b91', '#D9D9D9'],
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
    tooltip: {
      // 툴팁 스타일링
      bodySpacing: 5, // 툴팁 내부 항목들 간 간격
      bodyFont: {
        family: 'Pretendard',
      },
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';

          if (context.parsed !== null) {
            label += context.parsed + '%';
          }
          return label;
        },
      },
    },
  },

  cutout: 50,
};
