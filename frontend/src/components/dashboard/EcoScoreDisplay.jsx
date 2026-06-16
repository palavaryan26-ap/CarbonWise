import React from 'react';

export default function EcoScoreDisplay({ score }) {
  const getScoreColor = () => {
    if (score >= 80) return 'text-eco-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Eco Score</h3>
      <div className="relative flex items-center justify-center w-32 h-32">
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle className="text-gray-100 stroke-current" strokeWidth="8" cx="64" cy="64" r="56" fill="transparent"></circle>
          <circle 
            className={`${getScoreColor()} stroke-current transition-all duration-1000 ease-out`} 
            strokeWidth="8" 
            strokeLinecap="round" 
            cx="64" 
            cy="64" 
            r="56" 
            fill="transparent" 
            strokeDasharray="351.8" 
            strokeDashoffset={351.8 - (351.8 * score) / 100}
          ></circle>
        </svg>
        <span className={`text-4xl font-bold ${getScoreColor()}`}>{score}</span>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center">Keep completing challenges to improve your score!</p>
    </div>
  );
}
