import React, { useState, useEffect } from 'react';
import { useAllBookings } from "./allBookings";
import { bookSlot, getSlotDetails } from "@/utils/api";
import { Button } from "@/components/ui/button";
import ReschedulePopup from './ReschedulePopup';
import { useToast } from "@/hooks/use-toast";

interface TimeSlotsProps {
  selectedDate: Date | null;
  handleBookingPopUp: any;
  handleCalendar :()=>void;
  bookingDetails: BookingDetails;
  calendarData: number; 
}

interface Slot {
  time: string;
  available: boolean;
  status: string;
  event?: any;
  id?: number;
  capacity?: number;
}
interface BookingDetails {
  name: string;
  email: string;
  phoneNumber: string;
  dateofRequest: string;
  programName: string;
  schoolName: string;
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: string;
  slot: string;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  handleBookingPopUp,
  handleCalendar,
  bookingDetails,
  calendarData
}) => {
  const { toast } = useToast()
  const { events, error, closePopup } = useAllBookings();
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState("");
  const [nameError, setNameError] = useState<string | null>(null); 
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [studentsError, setStudentsError] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [isOpen,setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (selectedDate) {
      const availableSlots = getAvailableSlots();
      setSlots(availableSlots);
      setSelectedSlot(null);
      setStudents("");
    }
  }, [selectedDate, events]);

  useEffect(()=>{
    const phoneNumber = localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData") || "{}").data.phone
    : "";
    setPhone(phoneNumber)
  },[])

  const formatTimeRange = (start: Date, end: Date) => {
    const formatTime = (date: Date) => {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    };
    return `${formatTime(start)} to ${formatTime(end)}`;
  };

  const getAvailableSlots = (): Slot[] => {
    if (!selectedDate || !events.length) return [];

    const eventsForDate = events.filter(
      (event) => new Date(event.start).toDateString() === selectedDate.toDateString()
    );

    return eventsForDate.map((event) => ({
      time: formatTimeRange(new Date(event.start), new Date(event.end)),
      available: event.extendedProps.availableCapacity > 0,
      status: event.extendedProps.status,
      event: event,
      id: Number(event.id),
      capacity: event.extendedProps.availableCapacity,
    }));
  };

  const handleSlotSelection = async (slot: Slot) => {
    setSelectedSlot(slot);
    setStudents("");
  };

  const handleIsopen = async () => {
    
    const studentCount = parseInt(bookingDetails.numberOfStudents);
    const minStudents = selectedSlot?.capacity === 40 ? 12 : 1;
    const maxStudents = selectedSlot?.capacity || 40;
    
    if (studentCount < minStudents || studentCount > maxStudents) {
      toast({
        title: `Please enter a number between ${minStudents} and ${maxStudents}.`,
        description: "",
        duration: 5000,
        variant: "error"
      })
      return;
    }

    if (!selectedSlot || !selectedSlot.event) return;

    try {
      const [programId, venueId] = selectedSlot.event.title
        .split(" - ")
        .map((part: string) => parseInt(part.split(" ")[1]));

        const bookingData = {
          slot_id: Number(selectedSlot.event.id),
          program_id:programId,
          venue_id: venueId,
          booking_batch_size:Number(bookingDetails.numberOfStudents),
        };

      // const response = await bookSlot(bookingData);
      calendarData( Number(selectedSlot.event.id));

      setBookingStatus("Booking successful!");
      handleBookingPopUp({
        name: bookingDetails.name,
        date: selectedDate ? selectedDate.toDateString() : 'Date not selected',
        time: selectedSlot.time || 'Time not selected',
        students: bookingDetails.numberOfStudents,
      });
    } catch (error) {
      setBookingStatus("Booking failed. Please try again.");
    }
    handleCalendar()
  };

  const displayDate = selectedDate || new Date();
  function closeCancelPopup(): void {
    setIsOpen(false)
  }

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        {displayDate && (
          <div className="self-stretch relative leading-[170%] font-extrabold text-lg text-midnight-blue-main">
            Booking for {displayDate.toDateString()}
          </div>
        )}
        <div className="self-stretch relative leading-[170%] font-extrabold text-lg">
          Choose a Time Slot
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center">
          <div className="self-stretch flex flex-col lg:flex-row items-start justify-start flex-wrap content-start gap-4">
            {slots.map((slot, index) => (
              <div key={index} className="w-full sm:flex-1">
                <button
                  className={`w-full rounded-lg h-14 flex flex-row items-center justify-center py-2 px-8 ${
                    slot.status === "Booked"
                      ? "bg-grey-300 text-[#6d6d6d]"
                      : selectedSlot?.time === slot.time
                      ? "bg-[#fdded7] text-incandescent-main border-[1px] border-incandescent-main border-solid box-border"
                      : slot.available
                      ? "border-text-primary1 border-[1px] border-solid text-text-primary1 cursor-pointer"
                      : "bg-red-100 border-[#fdded7] border-[1px] border-solid text-incandescent-main cursor-not-allowed"
                  }`}
                  onClick={() => slot.available && handleSlotSelection(slot)}
                  disabled={!slot.available}
                >
                  <div className="relative leading-[170%] font-medium">
                    {slot.time}
                  </div>
                </button>
                {/* Conditionally show the capacity if this slot is selected */}
                {selectedSlot?.time === slot.time && (
                  <div className="mt-2 text-sm text-incandescent-main">
                    Capacity: {slot.capacity} students
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      <Button variant="proceed" onClick={handleIsopen}>Reschedule</Button>
      {isOpen && <ReschedulePopup isOpen = {isOpen} onClose={closeCancelPopup}/>}
      </div>    
    </div>
  );
};

export default TimeSlots;
