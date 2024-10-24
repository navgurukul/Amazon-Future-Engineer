import axios from 'axios';


const api = axios.create({
  baseURL: 'https://dev-afe.samyarth.org/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function to get the user token
const getToken = (): string | null => {
  const userDataString = localStorage.getItem('loginData');
  const userData = JSON.parse(userDataString || '{}');
  return userData?.data?.token || null;
};


// Utility function to get the  admin token
const getAdminToken = (): string | null => {
  const userDataString = localStorage.getItem('adminLoginData');
  const userData = JSON.parse(userDataString || '{}');
  return userData?.data?.token || null;
};


// Function to fetch slots
export const getSlots = async (venueId: number = 1) => {
  const token = getAdminToken()  ||  getToken() ;

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
  } catch (error:any) {
    throw error;
  }
};

// Function to book a slot
export const bookSlot = async (bookingData: {
  slot_id: number;
  program_id: number;
  venue_id: number;
  booking_batch_size: number;
  // students_grade: string;
}) => {
  const token = getAdminToken()  ||  getToken() 

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await api.post('/bookings', bookingData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error:any) {
    // console.error('Error booking slot:', error);
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

// User Dashboard 
export const getUserData = async () => {
  const token = getAdminToken()  ||  getToken() ;

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
    return upcomingEvents;
  } catch (error) {
    // console.error('Error fetching user data:', error);
    throw error;
  }
};

// Waiting List API
interface WaitingListData {
  name: string;
  email: string;
  venue_id: number;
  program_id: number;
  city: string;
  pin_code: string;
  school_name: string;
}

export const createWaitingList = async (waitingListData: WaitingListData) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJwaG9uZSI6Iis5MTk5NTcyNzk4NjEiLCJwcm9maWxlX2NvbXBsZXRlIjpmYWxzZSwiaWF0IjoxNzI5NTk1ODkzLCJleHAiOjE3Mjk2ODIyOTN9.hju1nBs5M88FXljpQWN4RrxkQX8iyusIaWJf-cX_v_s";

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
  } catch (error: any) {
    // alert(error.response.data.details);
    // throw error;
    throw new Error(error.response?.data?.details || 'An error occurred');
  }
};

// Get program details 
export const getProgramData = async (venue_id: number) => {
  const token =getAdminToken()  ||  getToken() ;
  
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
  } catch (error:any) {
    // return [];
    // throw error;
    throw new Error(error.response?.data?.details || 'An error occurred');
  }
};

// Function to call the booking query API
export const callBookingQuery = async (bookingData: {
  // name: string;
  // phone: string;
  program_id: number;
  venue_id: number;
  // query_type: string;
}) => {
  try {
    const token = getToken(); // Retrieve the token
    if (!token) {
      console.error("Authorization token is missing.");
      throw new Error("Authorization token is missing.");
    }

    // Log token to make sure it's retrieved correctly
    console.log("Authorization token:", token);

    const response = await api.post('/queries/call-booking-query', bookingData,
       {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Bearer token
        },
      }
    );
    console.log("Response from booking query:", response.data);
    return response.data;
    
  } catch (error: any) {
    console.error('Error calling booking query:', error);
    throw error.response?.data || error;
  }
};


// Function to resend OTP
export const resendOtp = async (phone: string) => {
  try {
    const response = await api.post('/auth/send-otp', { phone });
    return response.data;
  } catch (error) {
    throw error;
  }
};



// Get slot by slotId

export const getSlotDetails = async (slotId: number) => {
  try {
    const token = getAdminToken()  ||  getToken() ;
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`https://dev-afe.samyarth.org/api/v1/slotmanagement/slot/${slotId}`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.data[0].available_capacity;
  } catch (error) {
    // console.error("Error fetching slot details:", error);
    return 0;
  }
};



// Admin login

export const adminLogin = async (email: string, password: string) => {
  try {
    const response = await api.post('/admin/admin/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};



//upcoming booking dashboard data

export const fetchBookings = async () => {
  const token = getAdminToken();

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await api.get('/bookings/admin', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; 
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    throw new Error(error.response?.data?.details || 'An error occurred while fetching bookings');
  }
};



// New feedback functions

//Feedback api for teacher

export const addTeacherFeedback = async (feedbackData: {
  // name: string,
  user_id: number;
  slot_id: number;
  program_id: number;
  feedback: string;
  rating: number;
  is_teacher: boolean;
}) => {
  const token = getAdminToken();
  if (!token) throw new Error('No admin token found');
  try {
    const response = await api.post('/feedbacks/admin/add', feedbackData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.details || 'An error occurred while adding teacher feedback');
  }
};


// Feedback api for students

export const addStudentFeedback = async (feedbackData: {
  name: string,
  slot_id: number;
  program_id: number;
  feedback: string;
  rating: number;
  is_teacher: boolean;
}) => {
  const token = getAdminToken();
  if (!token) throw new Error('No token found');
  try {
    const response = await api.post('/feedbacks/teacher/add', feedbackData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.details || 'An error occurred while adding student feedback');
  }
};

// get all feedback
export const getFeedback = async (user_id: number, slot_id: number) => {
  const token =  getAdminToken();
  if (!token) throw new Error('No token found');
  try {
    const response = await api.get(`/feedbacks/get?user_id=${user_id}&slot_id=${slot_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.details || 'An error occurred while fetching feedback');
  }
};


//Admin edit api Function to update booking details
export const updateBookingDetails = async (bookingId: number, bookingData: {
  user_id: number;
  slot_id: number;
  program_id: number;
  booking_batch_size: number;
  visited_batch_size: number;
  students_grade: string;
  visiting_time: string;
  school_name: string;
  udise: string;
  email: string;
  address: string;
  village: string;
  state: string;
  district: string;
  pin_code: number;
}) => {
  const token = getAdminToken(); 
  if (!token) {
    throw new Error('No admin token found');
  }

  try {
    const response = await api.put(`/bookings/${bookingId}`, bookingData, {
      headers: {
        Authorization: `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
    });
    return response.data;  
  } catch (error: any) {
    console.error('Error updating booking details:', error);
    throw new Error(error.response?.data?.details || 'An error occurred while updating booking details');
  }
};


// Update slot details by slotId

export const updateSlotDetails = async (id: number) => {
  const token = getAdminToken();
  if (!token) {
    throw new Error('No token found');
  }
  try {
    const response = await axios.get(`https://dev-afe.samyarth.org/api/v1/slotmanagement/${id}`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.data[0];
  } catch (error) {
    return 0;
  }
};

// Get slot by slotId
export const getAdminSlotDetails = async (slotId: number) => {
  try {
    const token = getAdminToken()  ||  getToken() ;
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`https://dev-afe.samyarth.org/api/v1/slotmanagement/slot/${slotId}`, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.data[0];
  } catch (error) {
    // console.error("Error fetching slot details:", error);
    return 0;
  }
};



// api to update status

export const updateBookingStatus = async (bookingId: number, status: string,cancel_reason:string) => {
  try {
    const response = await api.put(`/bookings/${bookingId}/status`, {
      status: status,
      cancel_reason:cancel_reason
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("responseeee", response);
    return response.data;
  } catch (error: any) {
    console.error('Error updating booking status:', error);
    throw error;
  }
};

export const rescheduleBooking = async (booking_id: number) => {
  try {
    const response = await api.put(
      `/bookings/${booking_id}/status`,
      { status: "RequestedReschedule" },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Error rescheduling booking:", error);
    throw error;
  }
};


// api to update booking query on all users for not intersted and reschadule

export const quesryBookingStatus = async (program_id: number,venue_id:number, status: string) => {
  const token = getAdminToken()  ||  getToken() ;
  if (!token) {
    throw new Error('No token found');
  }
  try {
    const response = await api.post(`/queries/call-booking-query`, {
      program_id: program_id,
      venue_id:venue_id,
      status:status
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`

      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error updating booking status:', error);
    throw error;
  }
};




// Add this new function to update slot details
export const updateSlotTime = async (
  slotId: number,
  updatedData: {
    program_id: number;
    venue_id: number;
    date: string;
    start_time: string;
    end_time: string;
    available_capacity: number;
    status: string;
  }
) => {
  const token = getAdminToken();
  
  if (!token) {
    throw new Error('No admin token found');
  }
  try {
    const response = await api.put(`/slotmanagement/${slotId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.details || 'An error occurred while updating slot');
  }
}

// Update details of existing booking

export const updateBookingStatusAllUsers = async (
  bookingId: string,
  status: "Confirmed" | "Waiting" | "Cancelled" | "Disinterested" | "Completed"
) => {
  const token = getAdminToken(); // Fetch the admin token
  console.log("Token:", token);

  if (!token) {
    throw new Error("No token found");
  }

  const requestData: any = {
    status,
  };

  // Only include cancellationReason if the status is Cancelled or Disinterested, and the API allows it
  // if (status === "Cancelled" || status === "Disinterested") {
  //   requestData.cancellationReason = cancellationReason;
  // }

  try {
    const response = await api.put(
      `https://dev-afe.samyarth.org/api/v1/bookings/${bookingId}/status`,
      requestData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Return the response data if successful
  } catch (error: any) {
    console.error("Error updating booking status:", error);
    throw new Error(
      error.response?.data?.message || "Error updating booking status"
    );
  }
};



// Function to fetch all users and bookings
export const getAllUsersAndBookings = async (program: string, page: number = 1, limit: number = 10) => {
  const token = getAdminToken();

  if (!token) {
    throw new Error('No token found');
  }

  try {
    const params: any = {
      page,
      limit,
    };

    // Only include 'program' if it's not empty
    if (program) {
      params.program = program;
    }

    const response = await api.get(`/bookings/admin/getAllUsersAndBookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params, // Pass the params object directly
    });

    return response.data;
  } catch (error: any) {
    return error
    // throw error;
  }
};
