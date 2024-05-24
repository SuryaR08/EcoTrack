import axios from "axios";

const API_URL = "http://localhost:3001/schedules";

export const getSchedules = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
