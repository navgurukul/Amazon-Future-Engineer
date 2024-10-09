import { useAllBookings } from "./allBookings";
import { bookSlot,getSlotDetails} from "@/utils/api";
import React, { useState } from "react";
import ErrorBookingPopup from "./ErrorBookingPopup";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface TimeSlotsProps {
  selectedDate: Date | null;
  handleBookingPopUp: any;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  handleBookingPopUp,
}) => {
  // const allEvents = useAllBookings();
  const { events, error, closePopup } = useAllBookings();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [studentsError, setStudentsError] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [availableCapacity, setAvailableCapacity] = useState<number>(0);

  interface Slot {
    time: string;
    available: boolean;
    status: string;
    event?: any;
    id?: number;
  }



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
      };
    });
  };

  const slots = getAvailableSlots();

  const handleSlotSelection = async (slot: Slot) => {
    if (slot.id) {
      const capacity = await getSlotDetails(slot.id);
      console.log("Tamanna",capacity)
      setAvailableCapacity(capacity);
    }
    setSelectedSlot(slot.time === selectedSlot ? null : slot.time);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setPhoneError(null);
    setStudentsError(null);

    const phonePattern = /^[6-9]\d{9}$/;
    if (phone.length !== 10) {
      setPhoneError("Please enter a 10-digit phone number.");
      return;
    }
    if (!phonePattern.test(phone)) {
      setPhoneError("Please enter a phone number starting with 6 or above.");
      return;
    }

    const studentCount = parseInt(students);
    
    // Logic to check the number of students based on available capacity
    if ((availableCapacity === 40 && studentCount >=12  )) {
      setStudentsError("Please enter a number between 12 and 40.");
      return;
    } else if (availableCapacity < 40 && (studentCount < 1 || studentCount > availableCapacity)) {
      setStudentsError(`Please enter a number between 1 and ${availableCapacity}.`);
      return;
    }

    const selectedSlotData = slots.find((slot) => slot.time === selectedSlot);
    if (!selectedSlotData || !selectedSlotData.event) return;

    try {
      const [programId, venueId] = selectedSlotData.event.title
        .split(" - ")
        .map((part: string) => parseInt(part.split(" ")[1]));

      const bookingData = {
        slot_id: Number(selectedSlotData.event.id),
        program_id: programId,
        venue_id: venueId,
        booking_batch_size: studentCount,
      };

      const response = await bookSlot(bookingData);

      setBookingStatus("Booking successful!");
      handleBookingPopUp({
        name: name,
        date: selectedDate ? selectedDate.toDateString() : 'Date not selected',
        time: selectedSlot || 'Time not selected',
        students: studentCount,
      });

      setName("");
      setPhone("");
      setStudents("");
      setSelectedSlot(null);
    } catch (error) {
      console.error("Error booking slot:", error);
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
                    : selectedSlot === slot.time
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
            <div className="relative flex items-center w-full">
              <span className="absolute left-4 text-[#3a3a3a] text-lg font-medium">+91</span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="xxxxxxxxxx"
                required
                className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg w-full pl-12"
              />
            </div>
            {phoneError && (
              <div className="text-red-500 text-sm">{phoneError}</div>
            )}
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              <span>Number of Students (max {availableCapacity})</span>
              <span className="text-incandescent-main">*</span>
            </div>
            <input
              type="number"
              name="students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              placeholder={`Enter students`}
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
            className="w-full h-14 rounded-full bg-incandescent-main text-web-light-background-default font-button1-bold text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default"
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
