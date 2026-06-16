import React, { useState } from 'react';
import axios from 'axios';

export default function CalculatorForm() {
  const [formData, setFormData] = useState({
    car_km: '',
    bus_km: '',
    train_km: '',
    flight_km: '',
    kwh_used: '',
    diet_type: 'Mixed',
    waste_kg: '',
    recycled_kg: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const userId = localStorage.getItem('user_id');
      if (!userId) {
        alert("Please log in first!");
        setLoading(false);
        return;
      }
      
      await axios.post('http://localhost:5000/api/emissions/calculate', {
        ...formData,
        user_id: parseInt(userId, 10)
      });
      
      setSuccess(true);
      setFormData({
        car_km: '', bus_km: '', train_km: '', flight_km: '',
        kwh_used: '', diet_type: 'Mixed', waste_kg: '', recycled_kg: ''
      });
    } catch (err) {
      console.error(err);
      alert("Error calculating footprint.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-xl">
          Carbon footprint successfully calculated and saved! Check your dashboard.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Transport Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Transport (km/week)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Car</label>
              <input type="number" name="car_km" value={formData.car_km} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bus</label>
              <input type="number" name="bus_km" value={formData.bus_km} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Train</label>
              <input type="number" name="train_km" value={formData.train_km} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Flight</label>
              <input type="number" name="flight_km" value={formData.flight_km} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
            </div>
          </div>
        </section>

        {/* Energy Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Energy (Monthly)</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Electricity (kWh)</label>
            <input type="number" name="kwh_used" value={formData.kwh_used} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
          </div>
        </section>

        {/* Food & Waste Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">Food & Waste</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Diet Type</label>
              <select name="diet_type" value={formData.diet_type} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500">
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Mixed</option>
                <option>Non-Vegetarian</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Waste (kg/week)</label>
              <input type="number" name="waste_kg" value={formData.waste_kg} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recycled (kg/week)</label>
              <input type="number" name="recycled_kg" value={formData.recycled_kg} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500" placeholder="0" />
            </div>
          </div>
        </section>

        <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-eco-600 text-white font-bold rounded-xl hover:bg-eco-700 transition-colors disabled:opacity-50 cursor-pointer">
          {loading ? 'Calculating...' : 'Calculate Footprint'}
        </button>
      </form>
    </div>
  );
}
