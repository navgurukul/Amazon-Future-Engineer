import React, { useEffect, useState, useCallback } from 'react';
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
}

interface Booking {
  program_id: any;
  id: number;
  user: {
    name: string;
    id: string;
    email: string;
    phone: string;
    school_id?: string;
  };
  slot: {
    venue: {
      city: string;
    };
    program: {
      title: string;
    };
  };
  booking_for: string;
  start_time: string;
  end_time: string;
  booking_batch_size: number;
  created_at: string;
  status: string;
}



const BookingDetailsPage: React.FC<{ booking: Booking }> = ({ booking: bookingProp }) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [showSprintDetails, setShowSprintDetails] = useState(false);
  const router = useRouter();

  console.log("Tamanna",bookingProp)

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
            dateOfRequest: formatDate(foundBooking.created_at),
            programName: foundBooking.slot.program.title,
            schoolName: foundBooking.user.school_id || 'N/A',
            udiseCode: 'U-213012894', // Assuming this is not provided in the API response
            city: foundBooking.slot.venue.city,
            pincode: foundBooking.slot.venue.pin_code,
            grade: 'Grade 6', // Assuming this is not provided in the API response
            numberOfStudents: foundBooking.booking_batch_size,
            actualNumberOfStudents: foundBooking.visited_batch_size,
            slot: `${formatDate(foundBooking.booking_for)} | ${foundBooking.start_time} to ${foundBooking.end_time}`,

          });
        }
      }
    };
    loadBookingDetails();
  }, [bookingProp.id]);

  const handleStartSprint = useCallback(() => {
    setShowSprintDetails(true);
  }, []);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  if (!bookingDetails) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (showSprintDetails) {
    return <SprintDetailsComponent bookingProp={bookingProp} bookingDetails={bookingDetails} />;
  }

  return (
    <div className="w-[592px] max-w-4xl mx-auto px-4 mt-[10px] space-y-6">
      <div className="flex items-center pb-8">
        <h1 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">Booking Details</h1>
      </div>
      <Card className="rounded-lg border-none shadow-none ml-[-20px] pb-8">
        <CardContent className="pt-6 space-y-6">
          {Object.entries(bookingDetails).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-lg font-subTitle1-bold text-subTitle1 font-extrabold text-text-primary leading-[170%]">
              {key
                .replace(/([A-Z])/g, ' $1')
                .trim()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
              </span>
              <span className="text-lg font-body1-regular text-body1 font-medium text-text-primary leading-[170%]">
                {value !== null ? value.toString() : '-'}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex justify-center pb-16">
        <Button 
        variant="proceed"
          onClick={handleStartSprint}
        >
          Start Sprint
        </Button>
      </div>
      <div className="space-y-4">
        <h2 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">Sprint Feedback</h2>
        <p className="text-lg font-body1-regular text-body1 font-medium text-text-primary leading-[170%]">
          Feedback from teachers and students can be gathered after the sprint has completed and added here once the sprint is marked as completed.
        </p>
      </div>
    </div>
  );
};

export default BookingDetailsPage;








