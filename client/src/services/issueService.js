import axios from 'axios';

const API_URL = 'http://localhost:3001/issues';

export const createIssue = async (description) => {
  const response = await axios.post(API_URL, { description }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const getIssues = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};


export const deleteIssue = async (issueId) => {
  const response = await axios.delete(`${API_URL}/${issueId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};