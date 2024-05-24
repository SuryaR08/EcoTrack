import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../Home.css';
import GreenerPlanet from '../img/green-planet.jpg';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const wasteData = {
  labels: ['USA', 'India', 'China', 'Brazil', 'Russia'],
  datasets: [
    {
      label: 'Daily Waste Generation (tons)',
      data: [600000, 500000, 700000, 300000, 200000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

const Home = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Cleanup function to destroy the chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1>Welcome to EcoTrack</h1>
          <p>Your Partner in Sustainable Waste Management</p>
        </div>
      </header>

      {/* About Section */}
      <section className="section about">
        <div className="container card">
          <h2>About EcoTrack</h2>
          <p>
            EcoTrack is an innovative web-based platform dedicated to revolutionizing the way waste management is approached in communities and businesses. Our goal is to provide an efficient, user-friendly solution for tracking and managing waste, promoting sustainable practices, and minimizing environmental impact. By leveraging cutting-edge technology, EcoTrack enables users to monitor their waste generation, set up recycling and composting schedules, and gain valuable insights through comprehensive analytics. We believe in empowering individuals and organizations to make informed decisions that contribute to a healthier planet.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section mission">
        <div className="container card">
          <h2>Our Mission</h2>
          <p>At EcoTrack, our mission is to empower individuals, businesses, and communities to adopt sustainable waste management practices. We strive to:</p>
          <ul>
            <li>Reduce waste generation</li>
            <li>Encourage recycling and composting</li>
            <li>Minimize environmental pollution</li>
            <li>Promote a cleaner and healthier planet</li>
          </ul>
        </div>
      </section>

      {/* Importance of Waste Management Section */}
      <section className="section importance">
        <div className="container card">
          <h2>Importance of Waste Management</h2>
          <p>Proper waste management is essential for preserving our environment and protecting public health. Here are some key reasons why waste management is important:</p>
          <ul>
            <li>Prevents pollution of land, air, and water</li>
            <li>Conserves natural resources</li>
            <li>Reduces greenhouse gas emissions</li>
            <li>Prevents the spread of diseases</li>
            <li>Promotes sustainable development</li>
          </ul>
        </div>
      </section>

      {/* Environmental Facts Section */}
      <section className="section facts">
        <div className="container card">
          <h2>Environmental Facts</h2>
          <p>Did you know...</p>
          <ul>
            <li>Each person generates an average of 4.4 pounds of waste per day.</li>
            <li>Plastic waste takes hundreds of years to decompose in landfills.</li>
            <li>Recycling one aluminum can saves enough energy to power a TV for three hours.</li>
            <li>Landfills produce methane, a potent greenhouse gas that contributes to climate change.</li>
          </ul>
        </div>
      </section>

      {/* Analytics Section */}
      {/* <section className="section analytics"> */}
        <div className="container card">
          <h2>Waste Analytics</h2>
          {/* <div className="chart-container"> */}
            <Bar data={wasteData} ref={chartRef} />
          {/* </div> */}
          <p>Explore the impact of waste generation worldwide and in India. Discover how effective waste management practices can reduce environmental pollution and promote sustainability.</p>
        </div>
      {/* </section> */}

      {/* Educational Content Section */}
      <section className="section education">
        <div className="container card">
          <h2>Educational Content</h2>
          <p>Explore our educational resources to learn more about waste management, recycling, composting, and sustainability:</p>
          <ul>
            <li>Informative articles</li>
            <li>Interactive quizzes</li>
            <li>How-to guides</li>
            <li>Video tutorials</li>
          </ul>
        </div>
      </section>

      {/* Greener Future Section */}
      <section className="section greener-future">
        <div className="container card">
          <h2>Together Towards a Greener Future</h2>
          <img src={GreenerPlanet} alt="Greener Planet" className="greener-planet-image" />
          <p>Join us in our mission to create a greener planet. Through collective efforts, we can significantly reduce waste and promote a healthier environment for future generations. Take the first step towards sustainable waste management with EcoTrack.</p>
          <Link to="/register" className="btn-primary">Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
