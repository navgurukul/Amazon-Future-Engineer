import React, { useState } from 'react';

interface EventSlot {
    start: string;
    end: string;
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
    const [isEditing, setIsEditing] = useState(false); // Track if we're in edit mode

    const handleInputChange = (index: number, field: 'start' | 'end', value: string) => {
        const updatedSlots = [...editableSlots];
        updatedSlots[index][field] = value;
        setEditableSlots(updatedSlots);
    };

    const handleUpdate = () => {
        onUpdateSlots(editableSlots); // Pass the updated slots
        setIsEditing(false); // Exit edit mode
    };

    return (
        <div style={style} className="flex flex-col items-end gap-8 p-8 bg-white rounded-lg shadow-lg w-[592px]">
            <div className="flex justify-between items-center w-full">
                <div className="text-xl font-bold">Edit Slots</div>
                <button onClick={onClose} className="text-2xl">
                    &times;
                </button>
            </div>

            <div className="w-full">
                <div className="font-semibold">
                    Time slots for {selectedDate}
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {editableSlots.map(({ start, end }, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {isEditing ? (
                                <>
                                    <input
                                        type="time"
                                        value={start}
                                        onChange={(e) =>
                                            handleInputChange(index, 'start', e.target.value)
                                        }
                                        className="border p-1 rounded"
                                    />
                                    {/* <img src="/admin/access_time.svg" alt="Access Time Icon" /> */}
                                    <span>-</span>
                                    <input
                                        type="time"
                                        value={end}
                                        onChange={(e) =>
                                            handleInputChange(index, 'end', e.target.value)
                                        }
                                        className="border p-1 rounded"
                                    />
                                    {/* <img src="/admin/access_time.svg" alt="Access Time Icon" /> */}
                                </>
                            ) : (
                                <>
                                    <span className="mr-2">{start}</span>
                                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                                    <span>-</span>
                                    <span className="mr-2">{end}</span>
                                    <img src="/admin/access_time.svg" alt="Access Time Icon" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

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
