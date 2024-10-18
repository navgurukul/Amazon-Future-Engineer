import React, { useEffect, useState } from "react";
import { getAdminSlotDetails } from "@/utils/api";
import { Button } from "@/components/ui/button";

interface EventPopupProps {
  eventId: number;
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ eventId, onClose }) => {
  const [eventDetails, setEventDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const details = await getAdminSlotDetails(eventId);
        setEventDetails(details);
      } catch (error) {
        console.error("Failed to fetch event details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  if (loading) return <div>Loading...</div>;
  if (!eventDetails) return <div>No event details found.</div>;

  const {
    date,
    start_time,
    end_time,
    available_capacity,
    status,
    program_id
  } = eventDetails; 

  
  const formattedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const dayOptions: Intl.DateTimeFormatOptions = { weekday: 'long' };

  const displayDate = formattedDate.toLocaleDateString("en-US", options);
  const dayName = formattedDate.toLocaleDateString("en-US", dayOptions);
  
  
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const formattedHour = parseInt(hour, 10) % 12 || 12; 
    const ampm = parseInt(hour, 10) >= 12 ? 'PM' : 'AM';
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const formattedStartTime = formatTime(start_time);
  const formattedEndTime = formatTime(end_time);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">{program_id === 1 ? 'Nano Sprint' : 'Slot Details'}</h2>
        <p><strong>Date:</strong> {displayDate}</p>
        <p><strong>Day:</strong> {dayName}</p>
        <p><strong>Time:</strong> {`${formattedStartTime} - ${formattedEndTime}`}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Capacity:</strong> {available_capacity} seats available</p>

        <div className="popup-actions">
          <Button onClick={onClose} className="popup-button">
            Close
          </Button>
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup-content {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 400px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .popup-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .popup-actions {
          margin-top: 20px;
        }

        .popup-button {
          width: 100%;
          background-color: #1a73e8;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default EventPopup;
