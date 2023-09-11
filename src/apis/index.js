// http://3.109.151.193:8000

import axios from "axios";

export const BASE_URL = "https://ab35-106-214-162-252.ngrok-free.app"; // Replace with your API base URL
export const imageUrl = "https://ab35-106-214-162-252.ngrok-free.app/uploads/";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Set a timeout for requests (optional)
});

export const getRequest = async (endpoint) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(endpoint, {
      headers: {
        Authorization: token,
      },
    });
    return response.data; // Assuming the server returns the token in the response
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (endpoint, values, options = {}) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.post(endpoint, values, {
      ...options,
      headers: {
        Authorization: token,
        ...options.headers,
      },
    });
    return response.data; // Assuming the server returns the token in the response
  } catch (error) {
    throw error;
  }
};

export const putRequest = async (endpoint, values, options = {}) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.put(endpoint, values, {
      ...options,
      headers: {
        Authorization: token,
        ...options.headers,
      },
    });
    return response.data; // Assuming the server returns the token in the response
  } catch (error) {
    throw error;
  }
};
