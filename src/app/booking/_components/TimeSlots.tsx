import React, { useState, useEffect } from 'react';
import { useAllBookings } from "./allBookings";
import { bookSlot, getSlotDetails } from "@/utils/api";
import { Button } from "@/components/ui/button";

interface TimeSlotsProps {
  selectedDate: Date | null;
  handleBookingPopUp: any;
}

interface Slot {
  time: string;
  available: boolean;
  status: string;
  event?: any;
  id?: number;
  capacity?: number;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  handleBookingPopUp,
}) => {
  const { events, error, closePopup } = useAllBookings();
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [studentsError, setStudentsError] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setPhoneError(null);
    setStudentsError(null);

    const studentCount = parseInt(students);
    const minStudents = selectedSlot?.capacity === 40 ? 12 : 1;
    const maxStudents = selectedSlot?.capacity || 40;
    
    if (studentCount < minStudents || studentCount > maxStudents) {
      setStudentsError(`Please enter a number between ${minStudents} and ${maxStudents}.`);
      return;
    }

    if (!selectedSlot || !selectedSlot.event) return;

    try {
      const [programId, venueId] = selectedSlot.event.title
        .split(" - ")
        .map((part: string) => parseInt(part.split(" ")[1]));

      const bookingData = {
        slot_id: Number(selectedSlot.event.id),
        program_id: programId,
        venue_id: venueId,
        booking_batch_size: studentCount,
      };

      const response = await bookSlot(bookingData);

      setBookingStatus("Booking successful!");
      handleBookingPopUp({
        name: name,
        date: selectedDate ? selectedDate.toDateString() : 'Date not selected',
        time: selectedSlot.time || 'Time not selected',
        students: studentCount,
      });

      setName("");
      setPhone("");
      setStudents("");
      setSelectedSlot(null);
    } catch (error) {
      setBookingStatus("Booking failed. Please try again.");
    }
  };

  const displayDate = selectedDate || new Date();

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
      </div>

      {selectedSlot && (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start justify-start gap-4 text-sm"
        >
          <div className="self-stretch relative text-lg leading-[170%] font-extrabold">
            Almost Done!
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              <span>Name</span>
              <span className="text-incandescent-main">*</span>
            </div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Eg. Prakash"
              required
              className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg w-full"
            />
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              <span>Phone Number</span>
              <span className="text-incandescent-main">*</span>
            </div>
            <div className="relative flex items-center w-full bg-[#dedede] rounded-full">
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="xxxxxxxxxx"
                required
                disabled
                className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg w-full"
              />
            </div>
            {phoneError && (
              <div className="text-red-500 text-sm">{phoneError}</div>
            )}
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              <span>
                Number of Students
                {selectedSlot.capacity === 40 
                  ? " (min 12, max 40)" 
                  : ` (max ${selectedSlot.capacity})`}
              </span>
              <span className="text-incandescent-main">*</span>
            </div>
            <input
              type="number"
              name="students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              placeholder={`Enter students`}
              min={selectedSlot.capacity === 40 ? 12 : 1}
              max={selectedSlot.capacity}
              required
              className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg w-full"
            />
            {studentsError && (
              <div className="text-red-500 text-sm">{studentsError}</div>
            )}
          </div>

          <div className="w-full">
            <Button
              type="submit"
              className="w-full h-14 rounded-full bg-incandescent-main text-web-light-background-default font-button1-bold text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default whitespace-nowrap overflow-hidden text-ellipsis"
            >
              Book Now
            </Button>
          </div>
        </form>
      )}

      {bookingStatus && (
        <div className="self-stretch text-red-500 text-sm">{bookingStatus}</div>
      )}
    </div>
  );
};

export default TimeSlots;