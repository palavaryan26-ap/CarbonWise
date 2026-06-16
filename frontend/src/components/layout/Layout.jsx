import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Leaf, LayoutDashboard, Calculator, Trophy, LogOut } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-eco-50 text-eco-600' : 'text-gray-600 hover:bg-gray-50';

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col relative">
        <div className="flex items-center gap-2 p-6">
          <Leaf className="w-8 h-8 text-eco-500" />
          <span className="text-xl font-bold text-gray-900">CarbonWise</span>
        </div>
        <nav className="p-4 space-y-2 flex-1">
          <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive('/dashboard')}`}>
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link to="/calculator" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive('/calculator')}`}>
            <Calculator className="w-5 h-5" />
            <span className="font-medium">Calculator</span>
          </Link>
          <Link to="/challenges" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive('/challenges')}`}>
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Challenges</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 mt-auto">
          <Link to="/auth" className="flex items-center gap-3 px-4 py-3 text-gray-600 transition-colors rounded-xl hover:bg-gray-50 hover:text-red-600">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log out</span>
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
