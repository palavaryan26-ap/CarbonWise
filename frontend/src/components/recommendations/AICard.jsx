import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

export default function AICard({ recommendation, onComplete }) {
  const getDifficultyColor = (diff) => {
    switch(diff) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles className="w-24 h-24 text-eco-500" />
      </div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recommendation.difficulty)}`}>
            {recommendation.difficulty}
          </span>
          <span className="text-sm font-semibold text-eco-600 bg-eco-50 px-3 py-1 rounded-full">
            -{recommendation.impact_kg} kg CO₂
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{recommendation.title}</h3>
        <p className="text-gray-600 mb-6">{recommendation.description}</p>
        <button 
          onClick={() => onComplete(recommendation.id)}
          className="flex items-center gap-2 w-full justify-center py-2 px-4 border border-eco-500 text-eco-600 hover:bg-eco-50 rounded-xl transition-colors font-medium cursor-pointer"
        >
          <CheckCircle className="w-5 h-5" />
          Mark as Complete
        </button>
      </div>
    </div>
  );
}
