
'use client';


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchBookings } from "@/utils/api";

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
}

export default function BookingDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  useEffect(() => {
    const loadBookingDetails = async () => {
      if (id) {
        const bookings = await fetchBookings();
        const booking = bookings.find((b: { id: number; }) => b.id === Number(id));
        if (booking) {
          setBookingDetails({
            name: booking.user.name,
            email: booking.user.email,
            phoneNumber: booking.user.phone,
            dateOfRequest: new Date(booking.created_at).toLocaleDateString(),
            programName: booking.slot.program.title,
            schoolName: booking.user.school_id || 'N/A',
            udiseCode: 'N/A', // This information is not available in the API response
            city: booking.slot.venue.city,
            pincode: booking.slot.venue.pin_code,
            grade: 'N/A', // This information is not available in the API response
            numberOfStudents: booking.booking_batch_size,
            actualNumberOfStudents: booking.visited_batch_size,
            slot: `${booking.booking_for} | ${booking.start_time} to ${booking.end_time}`,
          });
        }
      }
    };
    loadBookingDetails();
  }, [id]);

  const handleStartSprint = () => {
    console.log('Starting sprint...');
  };

  if (!bookingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-16">
      <div className="space-y-8">
        <h1 className="text-4xl font-extrabold text-midnight-blue-main">Booking Details</h1>
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