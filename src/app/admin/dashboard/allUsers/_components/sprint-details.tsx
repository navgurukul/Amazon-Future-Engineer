import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import React from "react";

// Initial static booking details
const initialBookingDetails = {
  name: "Rahul Prakash",
  email: "",
  phoneNumber: "+917685745746",
  dateofRequest: "12 Oct 2024",
  programName: "",
  schoolName: "",
  udiseCode: "",
  city: "Bengaluru",
  pincode: "",
  grade: "",
  numberOfStudents: "",
  slot: "",
};

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
  slot: "Slot",
};

export default function SprintDetailsComponent() {
  const [bookingDetails, setBookingDetails] = useState(initialBookingDetails); // Use state for booking details

  // Handle input changes
  const handleInputChange = (key, value) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  return (
    // <>
    //   <div className="text-bodyM2 md:text-subTitle1 leading-[170%] cursor-pointer ml-4 md:ml-48 mb-12 mt-16">
    //     <span className="font-extrabold text-[#29458c]">All Users</span>
    //     <span className="font-medium text-[#3a3a3a]">/ Rahul Prakash - Nano Sprint</span>
    //   </div>
    //   <div className="w-full md:max-w-3xl mx-auto px-8 md:px-16 mb-32 md:mb-52">
    //     <div className="space-y-8">
    //       <h1 className="text-heading6 md:text-heading5 font-extrabold text-midnight-blue-main">
    //         Booking Details
    //       </h1>
    //       <Card className="shadow-none border-none">
    //         <CardContent className="pt-6 space-y-6 p-0">
    //           {Object.entries(bookingDetails).map(([key, value]) => (
    //             <div key={key} className="flex justify-between items-center">
    //               <Label className="text-bodyM2 md:text-subTitle1 leading-[170%] text-darkslategray">
    //                 {labelMapping[key as keyof typeof labelMapping]}
    //               </Label>
    //               {key === "programName" || key === "grade" ? (
    //                 <div className="relative w-80">
    //                   <select
    //                     className="w-full rounded-81xl bg-white border border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 px-4 py-2 h-14"
    //                     value={value}
    //                     onChange={(e) => handleInputChange(key, e.target.value)}
    //                   >
    //                     <option value="" disabled>Select {labelMapping[key]}</option>
    //                     {key === "programName" && <option value="Nano Sprint">Nano Sprint</option>}
    //                     {key === "grade" && (
    //                       <>
    //                         <option value="Class 4th">Class 4th</option>
    //                         <option value="Class 5th">Class 5th</option>
    //                         <option value="Class 6th">Class 6th</option>
    //                       </>
    //                     )}
    //                   </select>
    //                 </div>
    //               ) : (
    //                 <Input
    //                   value={value}
    //                   onChange={(e) => handleInputChange(key, e.target.value)}
    //                   readOnly={key === "phoneNumber" || key === "dateofRequest"}
    //                   className={`w-80 rounded-81xl border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 ${
    //                     key === "phoneNumber" || key === "dateofRequest" || key === "city" 
    //                       ? "bg-grey-300" 
    //                       : "bg-white"
    //                   } px-4 py-2`}
    //                   style={{ backgroundColor: key === "name" ? "white" : "" }}
    //                 />
    //               )}
    //             </div>
    //           ))}
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </>
    <>
  <div className="text-bodyM2 md:text-subTitle1 leading-[170%] cursor-pointer ml-4 md:ml-48 mb-12 mt-16">
    <span className="font-extrabold text-[#29458c]">All Users</span>
    <span className="font-medium text-[#3a3a3a]">/ Rahul Prakash - Nano Sprint</span>
  </div>
  
  <div className="w-full md:max-w-3xl mx-auto pl-8 md:px-16 mb-32 md:mb-52">
    <div className="space-y-8">
      <h1 className="text-heading6 md:text-heading5 font-extrabold text-midnight-blue-main">
        Booking Details
      </h1>
      
      <Card className="shadow-none border-none">
        <CardContent className="pt-6 space-y-6 p-0">
          {Object.entries(bookingDetails).map(([key, value]) => (
            // <div key={key} className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
            <div key={key} className="flex flex-row justify-between items-center space-x-4">
              <Label className="text-bodyM2 md:text-subTitle1 leading-[170%] text-darkslategray">
                {labelMapping[key as keyof typeof labelMapping]}
              </Label>
              
              {key === "programName" || key === "grade" ? (
                <div className="relative w-full md:w-80">
                  <select
                    className="w-full rounded-81xl bg-white border border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 px-4 py-2 h-14"
                    value={value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  >
                    <option value="" disabled>Select {labelMapping[key]}</option>
                    {key === "programName" && <option value="Nano Sprint">Nano Sprint</option>}
                    {key === "grade" && (
                      <>
                        <option value="Class 4th">Class 4th</option>
                        <option value="Class 5th">Class 5th</option>
                        <option value="Class 6th">Class 6th</option>
                      </>
                    )}
                  </select>
                </div>
              ) : (
                <Input
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  readOnly={key === "phoneNumber" || key === "dateofRequest"}
                  className={`w-full md:w-80 rounded-81xl border-text-primary text-darkslategray leading-[170%] text-bodyM md:text-body1 ${
                    key === "phoneNumber" || key === "dateofRequest" || key === "city"
                      ? "bg-grey-300"
                      : "bg-white"
                  } px-4 py-2`}
                  style={{ backgroundColor: key === "name" ? "white" : "" }}
                />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
</>

  );
}