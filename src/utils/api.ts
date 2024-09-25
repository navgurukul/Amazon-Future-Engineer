// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.127.216.196/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const verifyOtp = async (phone: string, otp: string) => {
  try {
    const response = await api.post('/auth/verify-otp', { phone, otp });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resendOtp = async (phone: string) => {
  try {
    const response = await api.post('/auth/send-otp', { phone });
    return response.data;
  } catch (error) {
    throw error;
  }
};
