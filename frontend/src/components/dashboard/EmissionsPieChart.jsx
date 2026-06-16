import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmissionsPieChart({ data }) {
  const chartData = {
    labels: ['Transport', 'Electricity', 'Food', 'Waste'],
    datasets: [
      {
        data: [data?.transport || 0, data?.electricity || 0, data?.food || 0, data?.waste || 0],
        backgroundColor: [
          '#3b82f6', // blue
          '#eab308', // yellow
          '#22c55e', // green
          '#ef4444', // red
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
        }
      }
    },
    cutout: '70%'
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Emissions Breakdown</h3>
      <div className="h-64 flex justify-center">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}
