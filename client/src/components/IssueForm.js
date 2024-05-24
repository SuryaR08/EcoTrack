import React, { useState } from 'react';
// import './IssueForm.css';
import { createIssue } from '../services/issueService';

const IssueForm = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createIssue({ description });
      alert('Issue reported successfully');
      setDescription('');
    } catch (error) {
      alert('Failed to report issue');
    }
  };

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <h2>Report an Issue</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the issue..."
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IssueForm;
