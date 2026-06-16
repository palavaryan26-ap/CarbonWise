import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

export default function TrendLineChart({ trends = [] }) {
  const data = {
    labels: trends.map(t => t.date),
    datasets: [
      {
        fill: true,
        label: 'Total Emissions (kg CO2e)',
        data: trends.map(t => t.total),
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-[22rem]">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Emissions Trend</h3>
      <div className="h-64 pb-8">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
