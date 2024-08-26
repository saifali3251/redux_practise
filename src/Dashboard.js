import React from 'react';
import './Dashboard.css';
import Counter from './components/Counters';
import Timer from './components/Timer';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="counter-section">
        <Counter />
      </div>
      <div className="timer-section">
        <Timer />
      </div>
    </div>
  );
};

export default Dashboard;
