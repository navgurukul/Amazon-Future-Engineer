// EditTimeSlotsPopup.tsx

import { Button } from "@/components/ui/button";
import { addNewSlots, deleteSlot, updateSlotTime } from "@/utils/api";
import React, { useState } from "react";

interface EventSlot {
  id: number;
  start: string;
  end: string;
  program_id: number;
  venue_id: number;
  date: string;
  available_capacity: number;
  status: string;
  booking_id?: number;
}

interface EditTimeSlotsPopupProps {
  selectedDate: string;
  onClose: () => void;
  slots: EventSlot[];
  style?: React.CSSProperties;
  onUpdateSlots: (updatedSlots: EventSlot[]) => void;
}

const EditTimeSlotsPopup: React.FC<EditTimeSlotsPopupProps> = ({
  selectedDate,
  onClose,
  slots,
  style,
  onUpdateSlots,
}) => {
  const [editableSlots, setEditableSlots] = useState<EventSlot[]>(slots);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    index: number,
    field: "start" | "end",
    value: string
  ) => {
    const updatedSlots = [...editableSlots];
    updatedSlots[index][field] = value;
    setEditableSlots(updatedSlots);
  };

  // const handleUpdate = async () => {
  //   setError(null); // Clear any previous errors

  //   try {
  //     const existingSlotIds = editableSlots.map((slot) => slot.id);

  //     // Filter slots that were removed (not in editableSlots anymore)
  //     const slotsToDelete = slots.filter(
  //       (slot) => !existingSlotIds.includes(slot.id)
  //     );

  //     console.log("Slots to be deleted:", slotsToDelete);

  //     // ** Delete Slots **
  //     if (slotsToDelete.length > 0) {
  //       const deletePromises = slotsToDelete.map((slot) => {
  //         if (slot.booking_id) {
  //           throw new Error(
  //             `Slot cannot be deleted as it is associated with bookings`
  //           );
  //         }
  //         return deleteSlot(slot.id);
  //       });

  //       await Promise.all(deletePromises); // Ensure all deletions happen concurrently
  //       console.log("Deleted slots:", slotsToDelete);
  //     }

  //     // ** Add New Slots **
  //     const newSlots = editableSlots.filter((slot) => slot.id === 0);
  //     console.log("New slots to be added:", newSlots);

  //     if (newSlots.length > 0) {
  //       const formattedNewSlots = newSlots.map((slot) => {
  //         const dateParts = new Date(slot.date);
  //         const isoDate = dateParts.toISOString().split("T")[0];

  //         const startDate = new Date(`${isoDate}T${slot.start}:00`);
  //         const endDate = new Date(`${isoDate}T${slot.end}:00`);

  //         if (isNaN(startDate.getTime())) {
  //           throw new Error(
  //             `Invalid start date for slot: ${JSON.stringify(slot)}`
  //           );
  //         }
  //         if (isNaN(endDate.getTime())) {
  //           throw new Error(`Invalid end date for slot: ${JSON.stringify(slot)}`);
  //         }

  //         return {
  //           program_id: slot.program_id,
  //           venue_id: slot.venue_id,
  //           date: isoDate,
  //           start_time: startDate.toISOString(),
  //           end_time: endDate.toISOString(),
  //           available_capacity: slot.available_capacity,
  //           status: slot.status,
  //         };
  //       });

  //       console.log("Formatted new slots:", formattedNewSlots);

  //       // Change from sending an array to an object with a "slots" key
  //       const payload = {
  //         slots: formattedNewSlots,
  //       };

  //       console.log("Payload being sent:", payload);
  //       await addNewSlots(payload); // Pass the object instead of array directly
  //       console.log("Added new slots");
  //     }
  //   } catch (err: any) {
  //     console.error("Error updating slots:", err);
  //     setError(err.message || "Failed to update slots. Please try again.");
  //   }
  // };

  const handleUpdate = async () => {
    setError(null); // Clear any previous errors

    try {
      const existingSlotIds = editableSlots.map((slot) => slot.id);

      // ** Filter out slots that were removed (not in editableSlots anymore) **
      const slotsToDelete = slots.filter(
        (slot) => !existingSlotIds.includes(slot.id)
      );

      console.log("Slots to be deleted:", slotsToDelete);

      // ** Delete Slots **
      if (slotsToDelete.length > 0) {
        const deletePromises = slotsToDelete.map((slot) => {
          // Check if slot is associated with a booking
          if (slot.booking_id) {
            throw new Error(
              `Slot with ID ${slot.id} cannot be deleted as it is associated with a booking.`
            );
          }
          return deleteSlot(slot.id); // Call the deleteSlot function
        });

        // Wait for all deletion requests to finish
        await Promise.all(deletePromises);
        console.log("Deleted slots:", slotsToDelete);
      }

      // ** Add New Slots **
      const newSlots = editableSlots.filter((slot) => slot.id === 0);
      console.log("New slots to be added:", newSlots);

      if (newSlots.length > 0) {
        // Format new slots to match API requirements
        const formattedNewSlots = newSlots.map((slot) => {
          const isoDate = new Date(slot.date).toISOString().split("T")[0];

          const startDate = new Date(`${isoDate}T${slot.start}:00`);
          const endDate = new Date(`${isoDate}T${slot.end}:00`);

          // Handle invalid dates
          if (isNaN(startDate.getTime())) {
            throw new Error(
              `Invalid start date for slot: ${JSON.stringify(slot)}`
            );
          }
          if (isNaN(endDate.getTime())) {
            throw new Error(
              `Invalid end date for slot: ${JSON.stringify(slot)}`
            );
          }

          return {
            program_id: Number(slot.program_id), // Ensure program_id is a number
            venue_id: Number(slot.venue_id), // Ensure venue_id is a number
            date: isoDate, // ISO formatted date
            start_time: startDate.toISOString(), // Start time as ISO string
            end_time: endDate.toISOString(), // End time as ISO string
            available_capacity: Number(slot.available_capacity), // Ensure capacity is a number
            status: slot.status, // Status of the slot
          };
        });

        console.log("Formatted new slots:", formattedNewSlots);

        // ** Send each slot individually **
        for (const slot of formattedNewSlots) {
          try {
            console.log("Payload being sent:", slot);
            await addNewSlots(slot); // Pass each slot individually, not the array
            console.log("Added new slot:", slot);
          } catch (error) {
            console.error("Error adding slot:", slot, error);
          }
        }
      }
    } catch (err: any) {
      // Catch any errors and log them
      console.error("Error updating slots:", err);

      // Set the error state with a user-friendly message
      setError(err.message || "Failed to update slots. Please try again.");
    }
  };

  const handleDeleteSlot = (index: number) => {
    const updatedSlots = editableSlots.filter((_, i) => i !== index);
    setEditableSlots(updatedSlots);
  };

  //   const handleNewSlots = () => {
  //     setEditableSlots([
  //       ...editableSlots,
  //       {
  //         id: 0,
  //         start: '00:00',
  //         end: '00:00',
  //         program_id: 11,
  //         venue_id: 2,
  //         date: selectedDate,
  //         available_capacity: 15,
  //         status: 'Available',
  //         booking_id: 0,
  //       },
  //     ]);
  //   };

  const handleNewSlots = () => {
    setEditableSlots([
      ...editableSlots,
      {
        id: 0,
        start: "00:00",
        end: "00:00",
        // program_id: slots[0].program_id,
        program_id: 1,
        venue_id: 2,
        date: selectedDate,
        available_capacity: 15,
        status: "Available",
        booking_id: 0,
      },
    ]);
  };

  return (
    <div
      style={style}
      className="flex flex-col items-end gap-8 p-8 bg-white rounded-lg shadow-lg w-[592px]"
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[24px] leading-[150%] font-extrabold font-sans text-[#3a3a3a]">
          Edit Slots
        </h2>
        <Button
          className="h-8 w-8 text-[#3a3a3a] font-extrabold bg-[#fff] hover:bg-[#fff] shadow-none"
          onClick={onClose}
        >
          x
        </Button>
      </div>

      <div className="w-full">
        <div className="font-bold text-[#3a3a3a] text-[18px]">
          Time slots for {selectedDate}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {editableSlots.map((slot, index) => (
            <div key={slot.id} className="flex items-center gap-2">
              {isEditing ? (
                <>
                  <input
                    type="time"
                    value={slot.start}
                    onChange={(e) =>
                      handleInputChange(index, "start", e.target.value)
                    }
                    className="flex border border-[#3a3a3a] px-4 py-2 rounded-full"
                  />
                  <span>-</span>
                  <input
                    type="time"
                    value={slot.end}
                    onChange={(e) =>
                      handleInputChange(index, "end", e.target.value)
                    }
                    className="flex border border-[#3a3a3a] px-4 py-2 rounded-full"
                  />
                  <Button
                    className="text-gray-400 hover:bg-white p-4"
                    variant="proceedWhite"
                    onClick={() => handleDeleteSlot(index)}
                  >
                    x
                  </Button>
                </>
              ) : (
                <>
                  <span className="flex border border-[#3a3a3a] px-4 py-2 rounded-full">
                    <span className="mr-2">{slot.start}</span>
                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                  </span>
                  <span>-</span>
                  <span className="flex border border-[#3a3a3a] px-4 py-2 rounded-full">
                    <span className="mr-2">{slot.end}</span>
                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                  </span>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <Button
              className="font-bold hover:bg-white p-0 flex items-start justify-start"
              variant="proceedWhite"
              onClick={handleNewSlots}
            >
              + &nbsp;Add New Slots
            </Button>
          )}
        </div>
      </div>

      {error && <div className="text-red-500 mt-2">{error}</div>}

      <div className="w-full flex justify-end gap-4">
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} variant="proceed">
            Edit Slots
          </Button>
        ) : (
          <>
            <Button onClick={() => setIsEditing(false)} variant="proceed">
              Cancel
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600"
              variant="proceed"
            >
              Update
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditTimeSlotsPopup;