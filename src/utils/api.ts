// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.127.216.196/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});


// Function to fetch slots
export const getSlots = async (venueId: number = 1) => {
    // Retrieve token from localStorage
    const userDataString = localStorage.getItem('loginData');
  
    const userData = JSON.parse(userDataString || '{}');
  
    const token = userData?.data?.token;
  
    if (!token) {
      throw new Error('No token found');
    }
  
    try {
      const response = await api.get(`/slotmanagement/${venueId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching slots:', error);
      throw error;
    }
  };

// Other existing functions (verifyOtp, resendOtp)
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
