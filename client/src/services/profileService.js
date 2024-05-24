import axios from "axios";

const API_URL = "http://localhost:3001/users/profile";

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};