import React from 'react';

interface EditTimeSlotsPopupProps {
    selectedDate: string; // e.g., "18 October 2024, Thursday"
    onClose: () => void; // Function to handle closing the popup
}

const EditTimeSlotsPopup: React.FC<EditTimeSlotsPopupProps> = ({
    selectedDate,
    onClose,
}) => {
    return (
        <div className="flex flex-col items-end gap-8 p-8 bg-white rounded-lg shadow-lg w-[592px]">
            <div className="flex justify-between items-center w-full">
                <div className="text-xl font-bold">Edit Slots</div>
                <button onClick={onClose} className="text-2xl">
                    &times; {/* Close icon */}
                </button>
            </div>

            <div className="w-full">
                <div className="font-semibold">Foundation Track</div>
                <div className="flex items-center mt-2">
                    <img src="/courseicon.svg" alt="Course Icon" className="mr-2" />
                    <div>Python</div>
                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <input type="radio" name="track" id="webDev" className="mr-2" />
                        <label htmlFor="webDev">Web Dev</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="track" id="softSkills" className="mr-2" />
                        <label htmlFor="softSkills">Soft Skills</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="track" id="miscellaneous" className="mr-2" />
                        <label htmlFor="miscellaneous">Miscellaneous</label>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="font-semibold">Description</div>
                <div className="mt-2 text-gray-600">
                    Learn about different datatypes that govern how values are stored in Python. We will talk about how to identify variables, naming schemes, and usage in programs.
                </div>
            </div>

            <div className="w-full">
                <div className="font-semibold">On Days</div>
                <div className="flex gap-4 mt-2">
                    {['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
                        <div key={day} className="border rounded-full px-4 py-1">
                            {day}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <div className="font-semibold">Choose the time slots for {selectedDate}</div>
                <div className="flex flex-col gap-2 mt-4">
                    {[
                        { start: '10 AM', end: '1 PM' },
                        { start: '1 PM', end: '5 PM' },
                    ].map(({ start, end }, index) => (
                        <div key={index} className="flex items-center">
                            <div className="flex items-center">
                                <span className="mr-2">{start}</span>
                                <img src="/access_time.svg" alt="Access Time Icon" />
                            </div>
                            <span className="mx-2">-</span>
                            <div className="flex items-center">
                                <span className="mr-2">{end}</span>
                                <img src="/access_time.svg" alt="Access Time Icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                    Update Slots
                </button>
            </div>
        </div>
    );
};

export default EditTimeSlotsPopup;
