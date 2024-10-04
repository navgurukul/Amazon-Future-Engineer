import { useAllBookings } from "./allBookings";
import { bookSlot } from "@/utils/api";
import React, { useState } from "react";

interface TimeSlotsProps {
  selectedDate: Date | null;
  handleBookingPopUp: any;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  handleBookingPopUp,
}) => {
  const allEvents = useAllBookings();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [students, setStudents] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [studentsError, setStudentsError] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  interface Slot {
    time: string;
    available: boolean;
    status: string;
    event?: any;
  }

  const getAvailableSlots = (): Slot[] => {
    const fixedSlots = [
      { time: "10 AM to 1 PM", apiTime: "10:00" },
      { time: "1:30 to 4:30 PM", apiTime: "13:30" },
    ];

    if (!selectedDate) {
      return fixedSlots.map((fixedSlot) => ({
        time: fixedSlot.time,
        available: true,
        status: "",
      }));
    }

    const eventsForDate = allEvents.filter(
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
      };
    });
  };

  const slots = getAvailableSlots();

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
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
    if (studentCount < 12 || studentCount > 40) {
      setStudentsError("Please enter a number between 12 and 40.");
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
        // students_grade: "Grad 10",
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
                onClick={() => slot.available && handleSlotSelection(slot.time)}
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
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{10}"
              placeholder="+91 xxxxxxxxxx"
              required
              className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg w-full"
            />
            {phoneError && (
              <span className="text-red-500 text-sm">{phoneError}</span>
            )}
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              <span>No. of Students (Min: 12 and Max: 40)</span>
              <span className="text-incandescent-main">*</span>
            </div>
            <input
              type="number"
              name="students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              placeholder="Please enter a number between 12 and 40"
              // min={12}
              // max={40}

              required
              className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 py-2 px-4 "
            />
            {studentsError && (
              <span className="text-red-500 text-sm">{studentsError}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full md:w-auto rounded-81xl bg-incandescent-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border text-center text-midnight-blue-contrasttext"
          >
            <div className="relative leading-[170%] font-medium">
              Request Booking
            </div>
          </button>
        </form>
      )}
    </div>
  );
};

export default TimeSlots;
