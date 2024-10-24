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

  const getAvailableSlots = (): Slot[] => {
    const fixedSlots = [
      { time: "10:00 AM to 1:00 PM", apiTime: "10:00" },
      { time: "1:30 PM to 4:30 PM", apiTime: "13:30" },
    ];

    if (!selectedDate) {
      return fixedSlots.map((fixedSlot) => ({
        time: fixedSlot.time,
        available: true,
        status: "",
        capacity: 0,
      }));
    }

    const eventsForDate = events.filter(
      (event) =>
        new Date(event.start).toDateString() === selectedDate.toDateString()
    );

    return fixedSlots.map((fixedSlot) => {
      const matchingEvent = eventsForDate.find((event) =>
        new Date(event.start).toTimeString().startsWith(fixedSlot.apiTime)
      );

      return {
        time: fixedSlot.time,
        available: matchingEvent
          ? matchingEvent.extendedProps.availableCapacity > 0
          : false,
        status: matchingEvent
          ? matchingEvent.extendedProps.status
          : "Not Available",
        event: matchingEvent,
        id: matchingEvent ? Number(matchingEvent.id) : undefined,
        capacity: matchingEvent ? matchingEvent.extendedProps.availableCapacity : 0,
      };
    });
  };

  const handleSlotSelection = async (slot: Slot) => {
    setSelectedSlot(slot);
    setStudents("");
  };


  const displayDate = selectedDate || new Date();


  const handleIsopen = async ()=>{
    const studentCount = parseInt(bookingDetails.numberOfStudents);
    const minStudents = selectedSlot?.capacity === 40 ? 12 : 1;
    const maxStudents = selectedSlot?.capacity || 0;
    
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
      // const dataToSend = {
      //   slot_id:response.data.slot_id,
      //   booking_for:response.data.booking_for,
      //   start_time: response.data.start_time, 
      //   end_time: response.data.end_time,   
      // };
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
  }


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
              <button
                key={index}
                className={`w-full sm:flex-1 rounded-lg h-14 flex flex-row items-center justify-center py-2 px-8 ${
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