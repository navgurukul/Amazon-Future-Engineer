import React, { useState, useEffect } from 'react';
import { useAllBookings } from './allBookings';
import { bookSlot } from '@/utils/api';
import { useRouter } from "next/navigation";

interface TimeSlotsProps {
  selectedDate: Date | null;
}

interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
  extendedProps: {
    availableCapacity: number;
    status: string;
  };
}

const TimeSlots: React.FC<TimeSlotsProps> = ({ selectedDate,handleBookingPopUp }) => {
  const router = useRouter();
  const allEvents = useAllBookings();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [dateStatus, setDateStatus] = useState<'valid' | 'past' | 'future' | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [students, setStudents] = useState('');
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const threeMonthsLater = new Date(today.getFullYear(), today.getMonth() + 3, 0);
      
      if (selectedDate < today) {
        setDateStatus('past');
      } else if (selectedDate >= currentMonth && selectedDate <= threeMonthsLater) {
        setDateStatus('valid');
      } else {
        setDateStatus('future');
      }
    } else {
      setDateStatus(null);
    }
  }, [selectedDate]);

  const getAvailableSlots = () => {
    if (!selectedDate || dateStatus !== 'valid') return [];

    const eventsForDate = allEvents.filter(event => 
      new Date(event.start).toDateString() === selectedDate.toDateString()
    );

    const fixedSlots = [
      { time: '10 AM to 1 PM', apiTime: '10:00' },
      { time: '1:30 to 4:30 PM', apiTime: '13:30' }
    ];

    return fixedSlots.map(fixedSlot => {
      const matchingEvent = eventsForDate.find(event => 
        new Date(event.start).toTimeString().startsWith(fixedSlot.apiTime)
      );

      return {
        time: fixedSlot.time,
        available: matchingEvent ? matchingEvent.extendedProps.availableCapacity > 0 : false,
        status: matchingEvent ? matchingEvent.extendedProps.status : 'Not Available',
        event: matchingEvent
      };
    });
  };

  const slots = getAvailableSlots();

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
  };

  if (!selectedDate) {
    return <div>Please select a date to view available time slots.</div>;
  }

  if (dateStatus === 'past') {
    return <div>Bookings are not available for past dates.</div>;
  }

  if (dateStatus === 'future') {
    return <div>Bookings are only available for the current month and the next two months.</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    const selectedSlotData = slots.find(slot => slot.time === selectedSlot);
    if (!selectedSlotData || !selectedSlotData.event) return;

    try {
      const [programId, venueId] = selectedSlotData.event.title.split(' - ').map(part => parseInt(part.split(' ')[1]));
      
      const bookingData = {
        slot_id: selectedSlotData.event.id,
        program_id: programId,
        venue_id: venueId,
        booking_batch_size: parseInt(students),
        students_grade: "Grade 10" // You may need to get this from somewhere else
      };

      const response = await bookSlot(bookingData);
      handleBookingPopUp({name:name,status:bookingStatus})

      setBookingStatus('Booking successful!');
      // Reset form
      setName('');
      setPhone('');
      setStudents('');
      setSelectedSlot(null);
    } catch (error) {
      console.error('Error booking slot:', error);
      setBookingStatus('Booking failed. Please try again.');
    }
  };

  return (
    <div className="w-[400px] flex flex-col items-start justify-start gap-8">
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="self-stretch relative leading-[170%] font-extrabold text-lg">
          {selectedDate.toDateString()}
        </div>
        <div className="self-stretch relative leading-[170%] font-extrabold text-lg">
          Choose a Time Slot
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4">
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`flex-1 rounded-lg h-14 flex flex-row items-center justify-center py-2 px-8 ${
                  selectedSlot === slot.time
                    ? "bg-mistyrose border-incandescent-main border-[1px] border-solid text-incandescent-main"
                    : slot.available
                    ? "border-text-primary1 border-[1px] border-solid text-text-primary1 cursor-pointer"
                    : "bg-red-100 border-red-300 border-[1px] border-solid text-red-500 cursor-not-allowed"
                }`}
                onClick={() => slot.available && handleSlotSelection(slot.time)}
                disabled={!slot.available}
              >
                <div className="relative leading-[170%] font-medium">
                  {slot.time}
                  <br />
                  <span className="text-sm">{slot.status}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedSlot && (
        <form onSubmit={handleSubmit} className="w-[400px] flex flex-col items-start justify-start gap-4 text-sm">
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
              className="self-stretch rounded-81xl border-text-primary1 border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg"
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
              placeholder="Eg. xxxxxxxxxx"
              required
              className="self-stretch rounded-81xl border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              <span>No. of Students</span>
              <span className="text-incandescent-main">*</span>
            </div>
            <input
              type="number"
              name="students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              placeholder="Eg. 4"
              min={1}
              max={slots.find(slot => slot.time === selectedSlot)?.event?.extendedProps.availableCapacity || 1}
              required
              className="self-stretch rounded-81xl border-text-primary1 border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-lg"
            />
          </div>
          <button
            type="submit"
            className="rounded-81xl bg-incandescent-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border text-center text-midnight-blue-contrasttext w-full"
          >
            <div className="relative leading-[170%] font-medium">
              Request Booking
            </div>
          </button>

          {bookingStatus && (
            <div className={`text-center w-full ${bookingStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
              {bookingStatus}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default TimeSlots;




