import SmartImage from "@/components/SmartImage";
import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/hooks/use-toast";
import { addNewSlots, deleteSlot, updateSlot } from "@/utils/api";
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
  const { toast } = useToast();
  const handleInputChange = (
    index: number,
    field: "start" | "end",
    value: string
  ) => {
    const updatedSlots = [...editableSlots];
    updatedSlots[index][field] = value;
    setEditableSlots(updatedSlots);
  };
  const handleUpdate = async () => {
    setError(null);
    try {
      const existingSlotIds = editableSlots.map((slot) => slot.id);
      const slotsToDelete = slots.filter(
        (slot) => !existingSlotIds.includes(slot.id)
      );
      // if (slotsToDelete.length > 0) {
      //   console.log("Tamanna Jiiii",slotsToDelete)
      //   const deletePromises = slotsToDelete.map((slot) => {
      //     if (slot.booking_id) {
      //       throw new Error(
      //         `Slot cannot be deleted as it is associated with a booking.`
      //       );
      //     }
      //     return deleteSlot(slot.id);
      //   });

      if (slotsToDelete.length > 0) {
        const deletePromises = slotsToDelete.map(async (slot) => {
          try {
            if (slot.booking_id) {
              throw new Error(
                `Slot with ID ${slot.id} cannot be deleted as it is associated with a booking.`
              );
            }
            await deleteSlot(slot.id); // Call the deleteSlot function
            toast({
              title: "Deleted",
              description: "Slot has been removed successfully!",
              variant: "success",
              duration: 3000,
            });
          } catch (error: any) {
            console.error("Error deleting slot:", slot, error);
            toast({
              title: "Deletion Error",
              description: "Failed to delete slot. Please try again.",
              variant: "destructive",
              duration: 3000,
            });
          }
        });

        await Promise.all(deletePromises);
        const updatedEditableSlots = editableSlots.filter((slot) =>
          existingSlotIds.includes(slot.id)
        );
        setEditableSlots(updatedEditableSlots);
        onUpdateSlots(updatedEditableSlots);
      }
      const newSlots = editableSlots.filter((slot) => slot.id === 0);
      if (newSlots.length > 0) {
        const formattedNewSlots = newSlots.map((slot) => {
          const parsedDate = new Date(slot.date);
          if (isNaN(parsedDate.getTime())) {
            throw new Error(`Invalid date format: ${slot.date}`);
          }
          const year = parsedDate.getFullYear();
          const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
          const day = String(parsedDate.getDate()).padStart(2, "0");
          const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
          const formatTime = (time: string) => {
            const [hours, minutes] = time.split(":");
            const date = new Date();
            date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
            return date.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: false,
            });
          };
          return {
            program_id: Number(slot.program_id),
            venue_id: Number(slot.venue_id),
            date: formattedDate,
            start_time: formatTime(slot.start),
            end_time: formatTime(slot.end),
            available_capacity: Number(slot.available_capacity),
            status: slot.status,
          };
        });
        for (const slot of formattedNewSlots) {
          try {
            await addNewSlots(slot);
            
          } catch (error) {
            console.error("Error adding slot:", slot, error);
            setError("Failed to add new slot. Please try again.");
          }
        }
      }
      const slotsToUpdate = editableSlots.filter((slot) => slot.id !== 0);
      if (slotsToUpdate.length > 0) {
        const updatePromises = slotsToUpdate.map((slot) => {
          const parsedDate = new Date(slot.date);
          if (isNaN(parsedDate.getTime())) {
            throw new Error(`Invalid date format: ${slot.date}`);
          }
          const year = parsedDate.getFullYear();
          const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
          const day = String(parsedDate.getDate() + 1).padStart(2, "0");
          const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
          const formatTime = (time: string) => {
            const [hours, minutes] = time.split(":");
            const date = new Date();
            date.setHours(parseInt(hours, 10), parseInt(minutes, 10));
            return date.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: false,
            });
          };
          const updatedSlot = {
            program_id: Number(slot.program_id),
            venue_id: Number(slot.venue_id),
            date: formattedDate,
            start_time: formatTime(slot.start),
            end_time: formatTime(slot.end),
            available_capacity: Number(slot.available_capacity),
            status: slot.status,
          };
          return updateSlot(slot.id, updatedSlot).catch((err) => {
            console.error("Error updating slot:", slot, err);
            throw new Error(
              "Slot cannot be updated as it is associated with a booking."
            );
          });
        });
        await Promise.all(updatePromises);
      }
      onUpdateSlots(editableSlots);
    } catch (err: any) {
      console.error("Error updating slots:", err);
      setError("Failed to update slots. Please try again.");
    }
  };
  const handleDeleteSlot = (index: number) => {
    const updatedSlots = editableSlots.filter((_, i) => i !== index);
    setEditableSlots(updatedSlots);
  };
  const handleNewSlots = () => {
    setEditableSlots([
      ...editableSlots,
      {
        id: 0,
        start: "00:00",
        end: "00:00",
        program_id: 1,
        venue_id: 2,
        date: selectedDate,
        available_capacity: 40,
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
                  <span className="flex border border-[#3A3A3A] px-4 py-2 rounded-full">
                    <span className="mr-2">{slot.start}</span>
                    <SmartImage
                      src="/admin/access_time.svg"
                      alt="Access Time Icon"
                      width={24} height={24}
                    />
                  </span>
                  <span>-</span>
                  <span className="flex border border-[#3A3A3A] px-4 py-2 rounded-full">
                    <span className="mr-2">{slot.end}</span>
                    <SmartImage
                      src="/admin/access_time.svg"
                      alt="Access Time Icon"
                      width={24} height={24}
                    />
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