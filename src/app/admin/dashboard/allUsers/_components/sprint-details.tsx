import Booking from "../../../_components/booking/page";
import SubmitPopup from "../../upcomingBookings/_components/SubmitPopup";
import Footer from "./Footer";
import SmartImage from "@/components/SmartImage";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchBookings, getSlotDetailsSlotId } from "@/utils/api";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import React from "react";

interface BookingDetails {
  name: string;
  email: string;
  phoneNumber: string;
  dateofRequest: string;
  programName: string;
  schoolName: string;
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: number;
  slot: string;
}
interface Booking {
  students_grade: string;
  udise: string;
  program: any;
  school_name: string | any;
  pin_code: number;
  school: string;
  user_id(user_id: any): unknown;
  slot_id(slot_id: any): unknown;
  id: number;
  user: {
    name: string;
    id: string;
    email: string;
    phone: string;
    school_id?: string;
  };
  slot: {
    venue: {
      pin_code: any;
      city: string;
    };
    program: {
      title: string;
    };
  };
  booking_for: string;
  start_time: string;
  end_time: string;
  booking_batch_size: number;
  created_at: string;
  status: string;
}
// Map for proper label display
const labelMapping = {
  name: "Name",
  email: "Email",
  phoneNumber: "Phone Number",
  dateofRequest: "Date of Request",
  programName: "Program Name",
  schoolName: "School Name",
  udiseCode: "UDISE Code",
  city: "City",
  pincode: "Pincode",
  grade: "Grade",
  numberOfStudents: "No. of Students",
};
interface BookingSlot {
  slot_id: number;
  booking_for: string;
  start_time: string;
  end_time: string;
}
export const SprintDetailsComponent: React.FC<{ booking: Booking }> = ({
  booking: bookingProp,
}) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | any>(
    null
  );
  const [popupValue, setPopupValue] = useState(true);
  const [bookingSingle, setBookings] = useState<Booking | any>(null);
  const [isCalendar, setIsCalendar] = useState<boolean>();
  const [calendarDataUser, setCalendarDataUser] = useState(0);
  const [slotData, setSlotData] = useState<any | null>(null); // Store slot details

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (
      bookingProp.status == "profileCreated" ||
      bookingProp.status == "CallRequested" ||
      bookingProp.status == "NotInterested"
    ) {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };

      // Use 'en-GB' to avoid commas and format day-month-year naturally
      const formattedDate = date.toLocaleDateString("en-GB", options);

      // Return the formatted date as "24 Oct 2024"
      return formattedDate.replace(/,/g, "");
    }
    return format(date, "dd MMM yyyy");
  };

  // Logic for disabling/enabling buttons based on status
  const status = bookingProp.status;
  // const disableAllButtons = status === "BookingRequested"  || status === "CallRequested"  || status === "ProfileCreated" || status === "BookingConfirmed" || status === "RequestedReschedule"  ;
  const disableAllButtons =
    status === "Completed" ||
    status === "Cancelled" ||
    status === "NotInterested";

  useEffect(() => {
    if (bookingProp.status !== "BookingConfirmed") {
      const dateCondition = !bookingProp.booking_for;
      // console.log("data-show",bookingProp)
      setBookingDetails({
        name: bookingProp?.user?.name || "-",
        email: bookingProp?.user?.email || "",
        phoneNumber: bookingProp?.user?.phone || "-",
        dateofRequest: formatDate(bookingProp.created_at) || "-",
        programName: "-",
        schoolName:
          bookingProp?.school_name ||
          bookingProp?.user?.school_id ||
          bookingProp?.school ||
          "-",
        udiseCode: bookingProp?.udise || "-",
        city: "Bengaluru",
        pincode: bookingProp?.pin_code || 0,
        grade: bookingProp?.students_grade || "-",
        numberOfStudents: bookingProp?.booking_batch_size || "-",
        slot: !dateCondition
          ? `${formatDate(bookingProp?.booking_for)} | ${
              bookingProp.start_time
            } to ${bookingProp.end_time}`
          : "",
      });
    }
    const loadBookingDetails = async () => {
      if (bookingProp.id) {
        // console.log("data-show",bookingProp)
        const bookings = await fetchBookings();
        const finalBooking = bookings.find(
          (b: Booking) => b.id === bookingProp.id
        );

        const foundBooking = finalBooking || { ...bookingProp };
        const dateCondition = !bookingProp.booking_for;
        setBookings(foundBooking);
        if (foundBooking) {
          setBookingDetails({
            name: foundBooking.user.name || "-",
            email: bookingProp.user.email || foundBooking.user.email,
            phoneNumber: foundBooking.user.phone,
            dateofRequest: formatDate(foundBooking.created_at),
            programName: "-",
            schoolName:
              bookingProp?.school_name ||
              bookingProp?.user?.school_id ||
              bookingProp?.school ||
              "-",
            udiseCode: bookingProp?.udise || "-",
            city:
              foundBooking?.slot?.venue?.city ||
              foundBooking?.venue?.city ||
              "Bengaluru",
            pincode:
              bookingProp?.pin_code ||
              foundBooking?.slot?.venue?.pin_code ||
              foundBooking?.venue?.pin_code ||
              "",
            grade: bookingProp?.students_grade || "-",
            numberOfStudents: foundBooking.booking_batch_size,
            slot: !dateCondition
            ? `${formatDate(bookingProp?.booking_for)} | ${
                bookingProp.start_time
              } to ${bookingProp.end_time}`
            : "",
          });
        }
      }
    };
    loadBookingDetails();
  }, [bookingProp.id]);

  if (!bookingDetails) {
    return <div className="text-center py-8">Loading...</div>;
  }
  const handleInputChange = (key: string, value: string | number) => {
    setBookingDetails((prevDetails: any) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const onSubmitClick = (id: string) => {
    if (id === "true") {
      setPopupValue(false);
    } else {
      setPopupValue(true);
    }
  };

  const handleCalendar = (): void => {
    setIsCalendar(true);
  };

  const closeCalendar = (): void => {
    setIsCalendar(false);
  };

  const calendarData = (slot_id: number) => {
    setCalendarDataUser(slot_id);
    fetchSlot(slot_id);
  };

  const handleCalendarClick = () => {
    handleCalendar();
  };

  const fetchSlot = async (slotId: number) => {
    try {
      const slotData = await getSlotDetailsSlotId(slotId);
      setSlotData(slotData.data[0]); // Assuming data is an array, get the first element
    } catch (error) {
      console.error("Failed to fetch slot details:", error);
    }
  };

  const formatSlotDetails = (slot: any) => {
    const formattedDate = format(new Date(slot.date), "dd MMM yyyy");
    const timeRange = `${slot.start_time} to ${slot.end_time}`;
    return `${formattedDate} | ${timeRange}`;
  };

  const enableAllButtons =
    bookingProp?.status === "RequestedReschedule" ||
    bookingProp?.status === "BookingConfirmed";

  const disableslotInput =
    bookingProp?.status === "Completed" ||
    bookingProp?.status === "Cancelled" ||
    bookingProp?.status === "NotInterested";

  const handlePreviousScreen = () => {
    window.location.reload();
  };

  return (
    <>
      {isCalendar ? (
        <Booking
          handleCalendar={closeCalendar}
          bookingDetails={bookingDetails}
          calendarData={calendarData}
        />
      ) : (
        <div>
          <div className={`${!popupValue && "mt-[48px]"}`}>
            {popupValue && (
              <div className="w-[592px] max-w-4xl mx-auto px-4 mt-[48px] mb-[152px] space-y-6">
                <div className="space-y-8">
                  <div
                    className="flex gap-2 cursor-pointer"
                    onClick={handlePreviousScreen}
                  >
                    <SmartImage
                      src="/login/chevron_left.svg"
                      alt="back"
                      className="cursor-pointer overflow-hidden"
                      width={24}
                      height={24}
                    />
                    <div className="leading-[170%] font-extrabold">Back</div>
                  </div>
                  <h1 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">
                    Booking Details
                  </h1>
                  <Card className="shadow-none border-none">
                    <CardContent className="pt-6 space-y-6 p-0">
                      {Object.entries(bookingDetails).map(([key, value]) => {
                        if (key === "slot") return null;
                        return (
                          <div
                            key={key}
                            className="flex flex-row justify-between items-center space-x-4"
                          >
                            <Label className="font-subTitle1-bold text-subTitle1 font-extrabold text-text-primary leading-[170%]">
                              {labelMapping[key as keyof typeof labelMapping]}
                             { key!=="udiseCode" && <span className="text-red-500">*</span> }
                            </Label>
                            {key === "programName" || key === "grade" ? (
                              <div className="relative w-64 md:w-80">
                                <select
                                  className="w-full rounded-81xl bg-white border border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 px-4 py-2 h-14 appearance-none"
                                  value={value as string}
                                  onChange={(e) =>
                                    handleInputChange(key, e.target.value)
                                  }
                                >
                                  <option value="" disabled>
                                    Select {labelMapping[key]}
                                  </option>
                                  {key === "programName" && (
                                    <>
                                      <option value="Nano Sprint">
                                        Nano Sprint
                                      </option>
                                      <option value="Mini Sprint">
                                        Mini Sprint
                                      </option>
                                      <option value="Mega Sprint">
                                        Mega Sprint
                                      </option>
                                    </>
                                  )}
                                  {key === "grade" && (
                                    <>
                                      <option value="">Select Class</option>
                                      <option value="Class 6th">
                                        Class 6th
                                      </option>
                                      <option value="Class 7th">
                                        Class 7th
                                      </option>
                                      <option value="Class 8th">
                                        Class 8th
                                      </option>
                                      <option value="Class 9th">
                                        Class 9th
                                      </option>
                                      <option value="Class 10th">
                                        Class 10th
                                      </option>
                                      <option value="Class 11th">
                                        Class 11th
                                      </option>
                                      <option value="Class 12th">
                                        Class 12th
                                      </option>
                                    </>
                                  )}
                                </select>
                                <div className="absolute inset-y-0 right-1 flex items-center pr-3 pointer-events-none">
                                  <svg
                                    className="w-5 h-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ) : (
                              <Input
                                value={value as string}
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) => handleInputChange(key, e.target.value)}
                                readOnly={
                                  key === "phoneNumber" ||
                                  key === "dateofRequest" ||
                                  key === "city"
                                }
                                className={`w-50 md:w-80 rounded-81xl border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 ${
                                  key === "phoneNumber" ||
                                  key === "dateofRequest" ||
                                  key === "city"
                                    ? "bg-grey-300"
                                    : "bg-white"
                                } px-4 py-2`}
                                style={{
                                  backgroundColor:
                                    key === "name" ? "white" : "",
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                      {/* Conditionally render the slot input based on the selected program */}
                      {(bookingDetails.programName === "Nano Sprint" ||
                        bookingDetails.programName === "-") && (
                        <div className=" relative w-full flex flex-row justify-between items-center space-x-4">
                          <Label className="font-subTitle1-bold text-subTitle1 font-extrabold text-text-primary leading-[170%]">
                            Slot
                          </Label>
                          <Input
                            value={
                              slotData
                                ? formatSlotDetails(slotData)
                                : bookingDetails.slot || "-"
                            }
                            onChange={(e) =>
                              handleInputChange("slot", e.target.value)
                            }
                            disabled={disableslotInput}
                            className={`w-80 rounded-[100px] border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-left text-lg text-text-primary font-webtypestyles-body1 ${
                              disableAllButtons ? "bg-grey-300" : ""
                            }`}
                          />
                          <SmartImage
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            src="/admin/calendar_today (1).svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            onClick={handleCalendarClick}
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            {/* Pass programName to Footer */}
            <Footer
              programName={bookingDetails?.programName}
              bookingId={bookingProp?.id}
              onSubmitClick={onSubmitClick}
              bookings={bookingDetails}
              bookingSingle={bookingSingle}
              handleCalendar={handleCalendar}
              status={bookingProp?.status}
              slotId={enableAllButtons ? calendarDataUser : 0}
              bookingProp={bookingProp}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default SprintDetailsComponent;
