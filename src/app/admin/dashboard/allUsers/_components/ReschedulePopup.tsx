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
  schoolName: string | number; // Adjust based on your data
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
  const [data,setData] = useState();
  const [showError, setShowError] = useState(false);
  const router = useRouter();


  useEffect(()=>{
    if (slotId>0){

    const fetchSlot = async (slotId: number) => {
      try {
        const slotData = await getSlotDetailsSlotId(slotId);
        console.log("Tamanna",slotData.data)
        setData(slotData.data)
      } catch (error) {
        console.error('Failed to fetch slot details:', error);
      }
    };
    fetchSlot(slotId);
  }
    
  },[slotId])

  const handleCalendarClick = () => {
    if (reason.trim()) {
      handleCalendar();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const hadnleReschedule = async () => {
    try {
      // Create the reschedule data based on `bookings` prop
      const rescheduleData = {
        user_id: 1,
        name: bookings.name,
        slot_id: slotId,
        booking_batch_size: bookings.numberOfStudents,
        students_grade: bookings.grade || "Grade 10",
        visiting_time: "2024-11-30T13:30:00.000Z",
        status: "BookingConfirmed",
        query_id: 1,
        school_name: bookings.schoolName,
        udise: bookings.udiseCode,
        email: bookings.email,
        address: bookings.city,
        village: bookings.city,
        state: "Karnataka",
        district: bookings.city,
        pin_code: bookings.pincode ? parseInt(bookings.pincode) : null,
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-text-primary">
            Reschedule Sprint
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">Slot</div>
            <div className="relative w-full">
              <Input
                className="w-full rounded-81xl border-text-primary1 border-[1px] border-solid h-14 px-4 text-lg font-medium pr-12"
                placeholder="Choose Slot"
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
              disabled={!reason.trim()}
              onClick={hadnleReschedule}
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
