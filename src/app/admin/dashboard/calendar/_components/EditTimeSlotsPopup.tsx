// EditTimeSlotsPopup Component

// Adjust this import based on your project structure
import { Button } from '@/components/ui/button';
import { updateSlotTime } from '@/utils/api';
import React, { useState } from 'react';


// Adjust this import based on your project structure

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

    const handleDeleteSlot = (index: number) => {
      const updatedSlots = editableSlots.filter((_, i) => i !== index);
      setEditableSlots(updatedSlots);
    };

    const handleNewSlots = () => {
        setEditableSlots([
            ...editableSlots,
            {
                id: 0,
                start: '00:00',
                end: '00:00',
                program_id: 0,
                venue_id: 0,
                date: selectedDate,
                available_capacity: 0,
                status: '',
                booking_id: 0,
            },
        ]);
    };

    return (
        <div style={style} className="flex flex-col items-end gap-8 p-8 bg-white rounded-lg shadow-lg w-[592px]">
             <div className="flex justify-between items-center w-full">

        <h2 className="text-[24px] leading-[150%] font-extrabold font-sans text-[#3a3a3a]">Edit Slots</h2>
        <Button className="h-8 w-8 text-[#3a3a3a] font-extrabold bg-[#fff] hover:bg-[#fff] shadow-none" 
                onClick={onClose}
                >
                x
            </Button>
              </div>

            <div className="w-full">
                <div className="font-bold text-[#3a3a3a] text-[18px]">Time slots for {selectedDate}</div>
                <div className="flex flex-col gap-4 mt-4">
                    {editableSlots.map((slot, index) => (
                        <div key={slot.id} className="flex items-center gap-2">
                            {isEditing ? (
                                <>
                                
                                    <input
                                        type="time"
                                        value={slot.start}
                                        onChange={(e) => handleInputChange(index, 'start', e.target.value)}
                                        className="flex border border-[#3a3a3a] px-4 py-2 rounded-full"
                                    />
                                    <span>-</span>
                                    <input
                                        type="time"
                                        value={slot.end}
                                        onChange={(e) => handleInputChange(index, 'end', e.target.value)}
                                        className="flex border border-[#3a3a3a] px-4 py-2 rounded-full"
                                    />
                                    <Button className='text-gray-400 hover:bg-white p-4' variant="proceedWhite"
                                        onClick={() => handleDeleteSlot(index)}
>x</Button>
                                </>
                            ) : (
                                <>
                                <span className='flex border border-[#3a3a3a] px-4 py-2 rounded-full'>
                                    <span className="mr-2">{slot.start}</span>
                                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                                </span>
                                    <span>-</span>
                                    <span className='flex border border-[#3a3a3a] px-4 py-2 rounded-full'>
                                    <span className="mr-2">{slot.end}</span>
                                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                                    </span>
                                </>
                            )}
                        </div>
                    ))}
                    {isEditing && (
                        
                    <Button className='font-bold hover:bg-white p-0 flex items-start justify-start' variant="proceedWhite" onClick={handleNewSlots}>+ &nbsp;Add New Slots</Button>
                    )}
                    </div>
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}

            <div className="w-full flex justify-end gap-4">
                {!isEditing ? (
                    <Button
                        onClick={() => setIsEditing(true)}
                        // className="bg-[#f55c38] text-white rounded-full px-8 py-2 text-[18px] leading-[170%]"
                        variant="proceed"
                    >
                        Edit Slots
                    </Button>
                ) : (
                    <>
                        <Button
                            onClick={() => setIsEditing(false)}
                            // className="bg-[#f55c38] text-white rounded-full px-8 py-2 hover:bg-red-600 text-[18px] leading-[170%]"
                            variant="proceed"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleUpdate}
                            // className="bg-green-500 text-white rounded-full px-8 py-2 hover:bg-green-600 text-[18px] leading-[170%]"
                            className='bg-green-500 hover:bg-green-600'
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