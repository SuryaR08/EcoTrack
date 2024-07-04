// AdminDashboard.js
import React, { useState } from "react";
import Chart from "../components/Chart";
import "../AdminDashboard.css";

const AdminDashboard = () => {
  const [view, setView] = useState("daily"); // daily, weekly, monthly, yearly

  // Dummy data for daily, weekly, monthly, yearly charts
  const dailyData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Garbage Generation (Daily)",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const weeklyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Garbage Generation (Weekly)",
        data: [300, 400, 500, 600],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const monthlyData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Garbage Generation (Monthly)",
        data: [
          1200, 1500, 1800, 2000, 2200, 1900, 1800, 1700, 1600, 1400, 1300,
          1100,
        ],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const yearlyData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Garbage Generation (Yearly)",
        data: [8000, 8500, 9000, 9500, 10000, 10500],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  // Dummy data for pie chart
  const pieData = {
    labels: ["Biodegradable", "Non-Biodegradable", "E-Waste", "Others"],
    datasets: [
      {
        data: [300, 150, 100, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Dummy data for bar chart (Segregation Efficiency)
  const barData = {
    labels: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
      "Jammu and Kashmir",
      "Ladakh",
    ],
    datasets: [
      {
        label: "Segregation Efficiency",
        data: Array.from({ length: 36 }, () => Math.floor(Math.random() * 100) + 1),
        backgroundColor: Array.from({ length: 36 }, () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`),
        borderColor: Array.from({ length: 36 }, () => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`),
        borderWidth: 1,
      },
    ],
  };
  

  // Dummy data for India map visualization
  const indiaMapData = {
    labels: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry",
      "Jammu and Kashmir",
      "Ladakh",
    ],
    datasets: [
      {
        label: "Garbage Generation",
        data: [
          300, 200, 400, 350, 500, 150, 800, 600, 250, 450, 700, 550, 750, 850,
          100, 120, 80, 90, 420, 320, 600, 70, 900, 800, 150, 1100, 400, 700,
          180, 220, 250, 300, 200, 350, 400, 250,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const heatmapData = [
    [15.9129, 79.74, 300], // Andhra Pradesh
    [27.1004, 93.6167, 200], // Arunachal Pradesh
    [26.2006, 92.9376, 400], // Assam
    [25.0961, 85.3131, 350], // Bihar
    [21.2787, 81.8661, 500], // Chhattisgarh
    [15.2993, 74.124, 150], // Goa
    [22.2587, 71.1924, 800], // Gujarat
    [29.0588, 76.0856, 600], // Haryana
    [31.1048, 77.1734, 250], // Himachal Pradesh
    [23.6102, 85.2799, 450], // Jharkhand
    [15.3173, 75.7139, 700], // Karnataka
    [10.8505, 76.2711, 550], // Kerala
    [22.9734, 78.6569, 750], // Madhya Pradesh
    [19.7515, 75.7139, 850], // Maharashtra
    [24.6637, 93.9063, 100], // Manipur
    [25.467, 91.3662, 120], // Meghalaya
    [23.1645, 92.9376, 80], // Mizoram
    [26.1584, 94.5624, 90], // Nagaland
    [20.9517, 85.0985, 420], // Odisha
    [31.1471, 75.3412, 320], // Punjab
    [27.0238, 74.2179, 600], // Rajasthan
    [27.533, 88.5122, 70], // Sikkim
    [11.1271, 78.6569, 900], // Tamil Nadu
    [17.1232, 79.2089, 800], // Telangana
    [23.9408, 91.9882, 150], // Tripura
    [26.8467, 80.9462, 1100], // Uttar Pradesh
    [30.0668, 79.0193, 400], // Uttarakhand
    [22.9868, 87.855, 700], // West Bengal
    [11.7401, 92.6586, 180], // Andaman and Nicobar Islands
    [30.7333, 76.7794, 220], // Chandigarh
    [20.1809, 73.0169, 250], // Dadra and Nagar Haveli and Daman and Diu
    [10.5667, 72.6417, 300], // Lakshadweep
    [28.7041, 77.1025, 200], // Delhi
    [11.9416, 79.8083, 350], // Puducherry
    [33.7782, 76.5762, 400], // Jammu and Kashmir
    [34.1526, 77.577, 250], // Ladakh
  ];

  return (
    <div className="admin-dashboard">
      <div className="title">Admin Dashboard</div>

      {/* Section for Daily, Weekly, Monthly, Yearly Charts */}
      <div className="menu">
        <button onClick={() => setView("daily")}>Daily</button>
        <button onClick={() => setView("weekly")}>Weekly</button>
        <button onClick={() => setView("monthly")}>Monthly</button>
        <button onClick={() => setView("yearly")}>Yearly</button>
      </div>

      <div className="chart-container">
        {view === "daily" && <Chart type="line" data={dailyData} />}
        {view === "weekly" && <Chart type="line" data={weeklyData} />}
        {view === "monthly" && <Chart type="line" data={monthlyData} />}
        {view === "yearly" && <Chart type="line" data={yearlyData} />}
      </div>

      {/* Section for Pie Chart */}
      <div className="chart-container">
        <Chart type="pie" data={pieData} />
      </div>

      {/* Section for Bar Chart (Segregation Efficiency) */}
      <div className="chart-container">
        <Chart type="bar" data={barData} />
      </div>

      {/* Section for India Map */}
      <div className="chart-container">
        <Chart type="bar" data={indiaMapData} />
      </div>
      <div className="chart-container">
        <Chart type="heatmap" heatmapData={heatmapData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
