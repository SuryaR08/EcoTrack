import axios from "axios";

const API_URL = "https://ecotrack-backend-70es.onrender.com/users/profile";

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
