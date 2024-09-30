import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.127.216.196/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch slots
export const getSlots = async (venueId: number = 1) => {
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

// Function to book a slot
export const bookSlot = async (bookingData: {
  slot_id: number;
  program_id: number;
  venue_id: number;
  booking_batch_size: number;
  students_grade: string;
}) => {
  // Retrieve token from localStorage
  const userDataString = localStorage.getItem('loginData');
  const userData = JSON.parse(userDataString || '{}');
  const token = userData?.data?.token;

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await api.post('/bookings/', bookingData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error booking slot:', error);
    throw error;
  }
};

// Other existing functions
export const verifyOtp = async (phone: string, otp: string) => {
  try {
    const response = await api.post('/auth/verify-otp', { phone, otp });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//UserDashboard 
export const getUserData = async () => {
  const userDataString = localStorage.getItem('loginData');
  const userData = JSON.parse(userDataString || '{}');
  const token = userData?.data?.token;

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const upcomingEvents = response.data?.data.upcomingEvents || [];
    return upcomingEvents ;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};



//minipage waititngList api
export const createWaitingList = async (waitingListData) => {
  const userDataString = localStorage.getItem('loginData');
  const userData = JSON.parse(userDataString || '{}');
  const token = userData?.data?.token;

  if (!token) {
    throw new Error('No token found');
  }
  try {
    const response = await api.post('/waitinglist', waitingListData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating waiting list:', error);
    throw error;
  }
};


// get program details 
export const getProgramData = async (venue_id: number) => {
  const userDataString = localStorage.getItem('loginData');
  const userData = JSON.parse(userDataString || '{}');
  const token = userData?.data?.token;
  if (!token) {
    return [];
  }

  try {
    const response = await api.get(`/programs/${venue_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    return [];
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