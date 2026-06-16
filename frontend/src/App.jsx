import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Challenges from './pages/Challenges';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="challenges" element={<Challenges />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
