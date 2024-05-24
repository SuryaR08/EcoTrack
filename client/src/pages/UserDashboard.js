import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import '../UserDashboard.css';

const UserDashboard = ({ userId }) => {
  const [selectedData, setSelectedData] = useState('daily');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Generate random data for the user based on userID
    const generateChartData = () => {
      const dailyData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Garbage Generation (kg)',
            data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
        ],
      };

      const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Garbage Generation (kg)',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 30) + 20),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
        ],
      };

      const yearlyData = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Garbage Generation (kg)',
            data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 200) + 200),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
        ],
      };

      switch (selectedData) {
        case 'daily':
          return dailyData;
        case 'monthly':
          return monthlyData;
        case 'yearly':
          return yearlyData;
        default:
          return null;
      }
    };

    // Update chart data
    setChartData(generateChartData());
  }, [selectedData, userId]);

  const handleDataChange = (dataType) => {
    setSelectedData(dataType);
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div className="dashboard-options">
        <button onClick={() => handleDataChange('daily')} className="dashboard-option">Daily</button>
        <button onClick={() => handleDataChange('monthly')} className="dashboard-option">Monthly</button>
        <button onClick={() => handleDataChange('yearly')} className="dashboard-option">Yearly</button>
      </div>
      <div className="analytics">
        <h3>{selectedData.charAt(0).toUpperCase() + selectedData.slice(1)} Analytics</h3>
        {chartData && <Chart type="bar" data={chartData} />}
      </div>
      <div className="additional-content">
        <h3>Additional Content</h3>
        <p>
          Welcome to your User Dashboard! Here, you can track your household waste generation
          and manage your environmental impact. Analyze your daily, monthly, and yearly waste
          generation patterns to make informed decisions.
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;
