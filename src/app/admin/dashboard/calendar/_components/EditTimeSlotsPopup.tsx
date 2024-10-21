// EditTimeSlotsPopup Component
import React, { useState } from 'react';
import { updateSlotTime } from '@/utils/api'; // Adjust this import based on your project structure

interface EventSlot {
    id: number;
    start: string;
    end: string;
    program_id: number;
    venue_id: number;
    date: string;
    available_capacity: number;
    status: string;
    booking_id: number;
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

    const handleInputChange = (index: number, field: 'start' | 'end', value: string) => {
        const updatedSlots = [...editableSlots];
        updatedSlots[index][field] = value;
        setEditableSlots(updatedSlots);
    };

    const handleUpdate = async () => {
        setError(null);
        try {
            const updatedSlots = await Promise.all(
                editableSlots.map(async (slot) => {
                    // Format the date to match the required format
                    const formattedDate = new Date(slot.date);
                    formattedDate.setUTCHours(0, 0, 0, 0);

                    // Create Date objects for start and end times
                    const startDate = new Date(`${slot.date}T${slot.start}`);
                    const endDate = new Date(`${slot.date}T${slot.end}`);

                    const updatedData = {
                        program_id: slot.program_id,
                        venue_id: slot.venue_id,
                        date: formattedDate.toISOString(),
                        start_time: startDate.toISOString(),
                        end_time: endDate.toISOString(),
                        available_capacity: slot.available_capacity,
                        status: slot.status,
                    };

                    console.log('Sending to API:', updatedData);
                    console.log("slot", slot.id);

                    const result = await updateSlotTime(slot.id, updatedData);
                    return { ...slot, ...result };
                })
            );
            onUpdateSlots(updatedSlots);
            setIsEditing(false);
        } catch (err: any) {
            setError(err.message || 'Failed to update slots. Please try again.');
            console.error('Error updating slots:', err);
        }
    };


    return (
        <div style={style} className="flex flex-col items-end gap-8 p-8 bg-white rounded-lg shadow-lg w-[592px]">
            <div className="flex justify-between items-center w-full">
                <div className="text-xl font-bold">Edit Slots</div>
                <button onClick={onClose} className="text-2xl">&times;</button>
            </div>

            <div className="w-full">
                <div className="font-semibold">Time slots for {selectedDate}</div>
                <div className="flex flex-col gap-4 mt-4">
                    {editableSlots.map((slot, index) => (
                        <div key={slot.id} className="flex items-center gap-2">
                            {isEditing ? (
                                <>
                                    <input
                                        type="time"
                                        value={slot.start}
                                        onChange={(e) => handleInputChange(index, 'start', e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                    <span>-</span>
                                    <input
                                        type="time"
                                        value={slot.end}
                                        onChange={(e) => handleInputChange(index, 'end', e.target.value)}
                                        className="border p-1 rounded"
                                    />
                                </>
                            ) : (
                                <>
                                    <span className="mr-2">{slot.start}</span>
                                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                                    <span>-</span>
                                    <span className="mr-2">{slot.end}</span>
                                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}

            <div className="w-full flex justify-center gap-4">
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                    >
                        Edit Slots
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
                        >
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default EditTimeSlotsPopup;