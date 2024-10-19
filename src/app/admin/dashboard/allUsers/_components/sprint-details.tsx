import Footer from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchBookings } from "@/utils/api";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import React from "react";


// Initial static booking details
// const initialBookingDetails = {
//   name: "Rahul Prakash",
//   email: "",
//   phoneNumber: "+917685745746",
//   dateofRequest: "12 Oct 2024",
//   programName: "",
//   schoolName: "",
//   udiseCode: "",
//   city: "Bengaluru",
//   pincode: "",
//   grade: "",
//   numberOfStudents: "",
//   slot: "", // This is for the Slot field (conditionally rendered)
// };

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
  numberOfStudents: string;
  slot: string;
}

interface Booking {
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

const SprintDetailsComponent: React.FC<{ booking: Booking }> = ({
  booking: bookingProp,
}) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d MMM yyyy");
  };

  useEffect(() => {
    const loadBookingDetails = async () => {
      if (bookingProp.id) {
        
        const bookings = await fetchBookings();
        const foundBooking = bookings.find(
          (b: Booking) => b.id === bookingProp.id
        );
        if (foundBooking) {
          setBookingDetails({
            name: foundBooking.user.name || "N/A",
            email: foundBooking.user.email,
            phoneNumber: foundBooking.user.phone,
            dateofRequest: formatDate(foundBooking.created_at),
            programName: "",
            schoolName: foundBooking.user.school_id || "N/A",
            udiseCode: "",
            city: foundBooking.slot.venue.city,
            pincode: foundBooking.slot.venue.pin_code,
            grade: "Grade 6",
            numberOfStudents: foundBooking.booking_batch_size,
            slot: `${formatDate(foundBooking.booking_for)} | ${
              foundBooking.start_time
            } to ${foundBooking.end_time}`,
          });
        }
      }
    };
    loadBookingDetails();
  }, [bookingProp.id]);

  if (!bookingDetails) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const handleInputChange = (
    key: keyof typeof bookingDetails,
    value: string | number
  ) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  return (
    <>
      {/* <div className="text-bodyM2 md:text-subTitle1 leading-[170%] cursor-pointer ml-4 md:ml-56 mb-12 mt-16">
        <span className="font-extrabold text-[#29458c]">All Users</span>
        <span className="font-medium text-[#3a3a3a]">/ Rahul Prakash - Nano Sprint</span>
      </div> */}

      {/* <div className="w-full md:max-w-3xl mx-auto pl-8 md:px-16 mt-16 mb-32 md:mb-52"> */}
      <div className="w-[592px] max-w-4xl mx-auto px-4 mt-[48px] mb-[152px] space-y-6">
        <div className="space-y-8">
          <h1 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">
            Booking Details
          </h1>

          <Card className="shadow-none border-none">
            <CardContent className="pt-6 space-y-6 p-0">
              {/* {Object.entries(bookingDetails).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-lg font-extrabold text-text-primary leading-[170%]">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-lg font-medium text-text-primary leading-[170%]">
                {value !== null ? value.toString() : '-'}
              </span>
            </div>
          ))} */}
              {Object.entries(bookingDetails).map(([key, value]) => {
                if (key === "slot") return null;

                return (
                  <div
                    key={key}
                    className="flex flex-row justify-between items-center space-x-4"
                  >
                    <Label className="font-subTitle1-bold text-subTitle1 font-extrabold text-text-primary leading-[170%]">
                      {labelMapping[key as keyof typeof labelMapping]}
                    </Label>

                    {key === "programName" || key === "grade" ? (
                      <div className="relative w-64 md:w-80">
                        <select
                          className="w-full rounded-81xl bg-white border border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 px-4 py-2 h-14 appearance-none"
                          value={value}
                          onChange={(e) =>
                            handleInputChange(key, e.target.value)
                          }
                        >
                          <option value="" disabled>
                            Select {labelMapping[key]}
                          </option>
                          {key === "programName" && (
                            <>
                              <option value="Nano Sprint">Nano Sprint</option>
                              <option value="Mini Sprint">Mini Sprint</option>
                              <option value="Mega Sprint">Mega Sprint</option>
                            </>
                          )}
                          {key === "grade" && (
                            <>
                              <option value="Class 4th">Class 4th</option>
                              <option value="Class 5th">Class 5th</option>
                              <option value="Class 6th">Class 6th</option>
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
                        value={value}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        readOnly={
                          key === "phoneNumber" || key === "dateofRequest" || key === "city"
                        }
                        className={`w-50 md:w-80 rounded-81xl border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 ${
                          key === "phoneNumber" ||
                          key === "dateofRequest" ||
                          key === "city"
                            ? "bg-grey-300"
                            : "bg-white"
                        } px-4 py-2`}
                        style={{
                          backgroundColor: key === "name" ? "white" : "",
                        }}
                      />
                    )}
                  </div>
                );
              })}

              {/* Conditionally render the slot input based on the selected program */}
              {(bookingDetails.programName === "Nano Sprint" ||
                bookingDetails.programName === "") && (
                <div className="flex flex-row justify-between items-center space-x-4">
                  <Label className="font-subTitle1-bold text-subTitle1 font-extrabold text-text-primary leading-[170%]">
                    Slot
                  </Label>
                  <Input
                    value={bookingDetails.slot}
                    onChange={(e) => handleInputChange("slot", e.target.value)}
                    className="w-80 rounded-[100px] border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-left text-lg text-text-primary font-webtypestyles-body1"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pass programName to Footer */}
      <Footer programName={bookingDetails.programName} bookingId={""} />
    </>
  );
};

export default SprintDetailsComponent;