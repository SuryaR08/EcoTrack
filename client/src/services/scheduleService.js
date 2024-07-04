import axios from "axios";

const API_URL = "https://ecotrack-backend-70es.onrender.com/schedules";

export const getSchedules = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
