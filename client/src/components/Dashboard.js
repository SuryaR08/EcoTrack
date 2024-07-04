import React, { useEffect, useState } from 'react';
// import './Dashboard.css';
import { getIssues } from '../services/issueService';

const Dashboard = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const data = await getIssues();
      setIssues(data);
    };
    fetchIssues();
  }, []);

  return (
    <div className="dashboard">
      <h2>Reported Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <p>{issue.description}</p>
            <p>Status: {issue.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
