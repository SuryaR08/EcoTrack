import axios from "axios";

const API_URL = "http://localhost:3001/schedule-allocations";


export const createSchedule = async (scheduleData) => {
  try {
    const response = await axios.post(API_URL, scheduleData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteSchedule = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
