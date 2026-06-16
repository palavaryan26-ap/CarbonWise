import React from 'react';
import CalculatorForm from '../components/calculator/CalculatorForm';

export default function Calculator() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Carbon Calculator</h1>
        <p className="text-gray-500 mt-1">Enter your activities to calculate your carbon footprint.</p>
      </div>
      <CalculatorForm />
    </div>
  );
}
