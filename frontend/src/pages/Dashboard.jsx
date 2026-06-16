import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EcoScoreDisplay from '../components/dashboard/EcoScoreDisplay';
import EmissionsPieChart from '../components/dashboard/EmissionsPieChart';
import TrendLineChart from '../components/dashboard/TrendLineChart';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
          setData(null);
          setLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/dashboard/${userId}`);
        setData(response.data);
      } catch (err) {
        console.error("Failed to load dashboard:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboard();
  }, []);

  if (loading) return <div className="p-8">Loading dashboard...</div>;
  if (!data) return <div className="p-8">Please log in to view your dashboard.</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Here is your carbon footprint overview.</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm">
          <span className="text-sm text-gray-500 uppercase tracking-wider block font-medium">Total Emissions</span>
          <span className="text-2xl font-bold text-gray-900">{data.totals.current_month} kg</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1 h-full">
          <EcoScoreDisplay score={data.eco_score} />
        </div>
        <div className="md:col-span-2">
          <EmissionsPieChart data={data.breakdown} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <TrendLineChart trends={data.trends} />
      </div>
    </div>
  );
}
