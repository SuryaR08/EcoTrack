import axios from "axios";

const API_URL = "http://localhost:3001/auth";

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const authenticate = async () => {
  return await axios.get(`${API_URL}/auth`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};
