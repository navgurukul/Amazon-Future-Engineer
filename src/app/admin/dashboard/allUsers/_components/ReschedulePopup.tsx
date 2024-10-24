import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateBookingStatus, rescheduleBookingUpdate, getSlotDetailsSlotId } from "@/utils/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { format } from "date-fns"; // Add date-fns for formatting

interface CancelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  handleCalendar: () => void;
  slotId: number;
  bookingId: number;
  bookings: BookingDetails;
}

interface BookingDetails {
  name: string;
  email: string | null;
  phoneNumber: string;
  dateofRequest: string;
  programName: string;
  schoolName: string | number;
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: number;
  slot: string;
}

const ReschedulePopup: React.FC<CancelPopupProps> = ({
  isOpen,
  onClose,
  handleCalendar,
  slotId,
  bookingId,
  bookings,
}) => {
  const [reason, setReason] = useState("");
  const [slotData, setSlotData] = useState<any | null>(null); // Store slot details
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  // Format the date to '24 Oct 2024' and time to '10:00 to 13:00'
  const formatSlotDetails = (slot: any) => {
    const formattedDate = format(new Date(slot.date), "dd MMM yyyy");
    const timeRange = `${slot.start_time} to ${slot.end_time}`;
    return `${formattedDate} | ${timeRange}`;
  };

  useEffect(() => {
    if (slotId > 0) {
      const fetchSlot = async (slotId: number) => {
        try {
          const slotData = await getSlotDetailsSlotId(slotId);
          setSlotData(slotData.data[0]); // Assuming data is an array, get the first element
        } catch (error) {
          console.error('Failed to fetch slot details:', error);
        }
      };
      fetchSlot(slotId);
    }
  }, [slotId]);

  const handleCalendarClick = () => {
    handleCalendar();
  };

  const handleReschedule = async () => {
    try {
      const rescheduleData = {
        user_id: 1,
        name: bookings.name,
        slot_id: slotId,
        booking_batch_size: bookings.numberOfStudents,
        students_grade: bookings.grade,
        visiting_time: "2024-11-30T13:30:00.000Z",
        status: "BookingConfirmed",
        query_id: 1,
        school_name: String(bookings.schoolName) ,
        udise: bookings.udiseCode,
        email: bookings.email,
        address: bookings.city ,
        village: bookings.city,
        state: "Karnataka",
        district: bookings.city,
        pin_code: bookings.pincode ? parseInt(bookings.pincode) : 461228,
      };
      await rescheduleBookingUpdate(bookingId, rescheduleData);
      await updateBookingStatus(
        Number(bookingId),
        "BookingConfirmed",
        "BookingConfirmed",
        reason
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Disable the Reschedule button if slot or reason is empty
  const isRescheduleDisabled = !reason.trim() || !slotData;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-text-primary">
            Reschedule Sprint
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Slot selection */}
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">Slot</div>
            <div className="relative w-full">
              <Input
                className="w-full rounded-81xl border-text-primary1 border-[1px] border-solid h-14 px-4 text-lg font-medium pr-12"
                placeholder="Choose Slot"
                value={slotData ? formatSlotDetails(slotData) : ""}
                readOnly // Make the input field read-only
              />
              <Image
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                src="/admin/calendar_today (1).svg"
                alt="calendar"
                width={24}
                height={24}
                onClick={handleCalendarClick}
              />
            </div>
          </div>

          {/* Reason for rescheduling */}
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              Reason for Rescheduling
            </div>
            <Textarea
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                if (e.target.value.trim()) {
                  setShowError(false);
                }
              }}
              className="w-full rounded-lg border-text-primary1 border-[1px] border-solid py-2 px-4 text-lg font-medium min-h-[100px]"
              placeholder="Enter your reason here..."
            />
            {showError && (
              <p className="text-red-500 text-sm">
                Please provide a reason before selecting a slot
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-row items-start justify-end gap-4">
            <Button
              variant="proceedWhite"
              onClick={onClose}
              className="border-text-primary border-[1px] border-solid box-border text-text-primary"
            >
              Cancel
            </Button>
            <Button
              variant="proceed"
              className="bg-[#f091b2] hover:bg-[#c06e8d]"
              disabled={isRescheduleDisabled} // Disable if necessary fields are empty
              onClick={handleReschedule}
            >
              Reschedule
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReschedulePopup;

