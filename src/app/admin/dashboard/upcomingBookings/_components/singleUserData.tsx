'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchBookings } from "@/utils/api";
import SprintDetailsComponent from './sprint-details';
import { format } from 'date-fns';

interface BookingDetails {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfRequest: string;
  programName: string;
  schoolName: string;
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: number;
  actualNumberOfStudents: number | null;
  slot: string;
  userId: string; 
}

interface Booking {
  id: number;
  user: {
    name: string;
    id: string; 
    email: string;
    phone: string;
    school_id?: string;
  };
  created_at: string;
  slot: {
    program: {
      title: string;
    };
    venue: {
      city: string;
      pin_code: string;
    };
  };
  booking_batch_size: number;
  visited_batch_size: number | null;
  booking_for: string;
  start_time: string;
  end_time: string;
}

export default function BookingDetailsPage({ booking: bookingProp }: { booking: Booking }) {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [showSprintDetails, setShowSprintDetails] = useState(false); 
  const router = useRouter(); 


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'd MMM yyyy');
  };

  useEffect(() => {
    const loadBookingDetails = async () => {
      if (bookingProp.id) {
        const bookings = await fetchBookings();
        const foundBooking = bookings.find((b: Booking) => b.id === bookingProp.id);
        if (foundBooking) {
          setBookingDetails({
            name: foundBooking.user.name,
            email: foundBooking.user.email,
            phoneNumber: foundBooking.user.phone,
            dateOfRequest: new Date(foundBooking.created_at).toLocaleDateString(),
            programName: foundBooking.slot.program.title,
            schoolName: foundBooking.user.school_id || 'N/A',
            udiseCode: 'N/A',
            city: foundBooking.slot.venue.city,
            pincode: foundBooking.slot.venue.pin_code,
            grade: 'N/A',
            numberOfStudents: foundBooking.booking_batch_size,
            actualNumberOfStudents: foundBooking.visited_batch_size,
            slot: `${formatDate(foundBooking.booking_for)} | ${foundBooking.start_time} to ${foundBooking.end_time}`,
          });
        }
      }
    };
    loadBookingDetails();
  }, [bookingProp.id]);

  const handleStartSprint = () => {
    setShowSprintDetails(true);
  };

  const handleGoBack = () => {
    router.back(); 
  };

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  if (showSprintDetails) {
    return <SprintDetailsComponent bookingProp = {bookingProp} bookingDetails={bookingDetails} />; 
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-16">
      <div className="flex items-center mb-4">
        <button onClick={handleGoBack} className="mr-4">
          <img src="/path/to/back-arrow.png" alt="Back" className="w-6 h-6" />
        </button>
        <h1 className="text-4xl font-extrabold text-midnight-blue-main">Booking Details</h1>
      </div>
      <Card>
        <CardContent className="pt-6 space-y-6">
          {Object.entries(bookingDetails).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="font-extrabold text-text-primary">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="font-medium text-text-primary">
                {value !== null ? value.toString() : '-'}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Button variant="proceed" onClick={handleStartSprint}>
          Start Sprint
        </Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-midnight-blue-main">Sprint Feedback</h2>
        <p className="text-lg font-medium text-text-primary">
          Feedback from teachers and students can be gathered after the sprint has completed and added here once the sprint is marked as completed.
        </p>
      </div>
    </div>
  );
}








// 'use client';

// import { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// interface BookingDetails {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   dateOfRequest: string;
//   programName: string;
//   schoolName: string;
//   udiseCode: string;
//   city: string;
//   pincode: string;
//   grade: string;
//   numberOfStudents: number;
//   actualNumberOfStudents: number | null;
//   slot: string;
// }

// export default function  SingleUserData() {
//   const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBookingDetails = async () => {
//       try {
//         // Replace with your actual API endpoint
//         const response = await fetch('/api/booking-details');
//         if (!response.ok) {
//           throw new Error('Failed to fetch booking details');
//         }
//         const data = await response.json();
//         setBookingDetails(data);
//       } catch (err) {
//         setError('Error fetching booking details. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBookingDetails();
//   }, []);

//   const handleStartSprint = () => {
//     // Implement your start sprint logic here
//     console.log('Starting sprint...');
//   };

//   if (isLoading) return <div className="text-center py-8">Loading...</div>;
//   if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
//   if (!bookingDetails) return <div className="text-center py-8">No booking details found.</div>;

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-16">
//       <div className="space-y-8">
//         <h1 className="text-4xl font-extrabold text-midnight-blue-main">Booking Details</h1>
//         <Card>
//           <CardContent className="pt-6 space-y-6">
//             {Object.entries(bookingDetails).map(([key, value]) => (
//               <div key={key} className="flex justify-between items-center">
//                 <span className="font-extrabold text-text-primary">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
//                 <span className="font-medium text-text-primary">
//                   {value !== null ? value.toString() : '-'}
//                 </span>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//         <div className="flex justify-center">
//           <Button onClick={handleStartSprint} className="bg-incandescent-main text-incandescent-contrasttext">
//             Start Sprint
//           </Button>
//         </div>
//       </div>
//       <div className="space-y-4">
//         <h2 className="text-4xl font-extrabold text-midnight-blue-main">Sprint Feedback</h2>
//         <p className="text-lg font-medium text-text-primary">
//           Feedback from teachers and students can be gathered after the sprint has completed and added here once the sprint is marked as completed.
//         </p>
//       </div>
//     </div>
//   );
// }









// 'use client';

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// interface BookingDetails {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   dateOfRequest: string;
//   programName: string;
//   schoolName: string;
//   udiseCode: string;
//   city: string;
//   pincode: string;
//   grade: string;
//   numberOfStudents: number;
//   actualNumberOfStudents: number | null;
//   slot: string;
// }

// const staticBookingDetails: BookingDetails = {
//   name: "Rahul Prakash",
//   email: "rahul@gmail.com",
//   phoneNumber: "+917685745746",
//   dateOfRequest: "12 Oct 2024",
//   programName: "Nano Sprint",
//   schoolName: "Rahul Memorial School",
//   udiseCode: "U-213012894",
//   city: "Bengaluru",
//   pincode: "465789",
//   grade: "Grade 6",
//   numberOfStudents: 40,
//   actualNumberOfStudents: null,
//   slot: "24 Oct 2024 | 4 PM to 6 PM"
// };

// export default function BookingDetailsPage({ onStartSprint }) {
//   const handleStartSprint = () => {
//     console.log('Starting sprint...');
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-16">
//       <div className="space-y-8">
//         <h1 className="text-4xl font-extrabold text-midnight-blue-main">Booking Details</h1>
//         <Card>
//           <CardContent className="pt-6 space-y-6">
//             {Object.entries(staticBookingDetails).map(([key, value]) => (
//               <div key={key} className="flex justify-between items-center">
//                 <span className="font-extrabold text-text-primary">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
//                 <span className="font-medium text-text-primary">
//                   {value !== null ? value.toString() : '-'}
//                 </span>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//         <div className="flex justify-center">
//           <Button variant = "proceed"  onclick={onStartSprint}>
//             Start Sprint
//           </Button>
//         </div>
//       </div>
//       <div className="space-y-4">
//         <h2 className="text-4xl font-extrabold text-midnight-blue-main">Sprint Feedback</h2>
//         <p className="text-lg font-medium text-text-primary">
//           Feedback from teachers and students can be gathered after the sprint has completed and added here once the sprint is marked as completed.
//         </p>
//       </div>
//     </div>
//   );
// }