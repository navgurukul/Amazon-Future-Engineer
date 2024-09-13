import VerifyOTP from "./VerifyOTP";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent } from "react";

const PhoneNumberVerification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showOTPVerification, setShowOTPVerification] = useState<boolean>(false);

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleProceed = async () => {
    try {
      // phone validations
      const regex = /[^0-9]/g;
      if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
        alert("Invalid Phone Number");
        return;
      }

      setPhoneNumber("");
      setShowOTPVerification(true);
      await fetch("http://localhost:5000/sendOTP", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });
      setShowOTPVerification(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 w-full">
      {showOTPVerification ? (
        <VerifyOTP setShowOTPVerification={setShowOTPVerification} />
      ) : (
        <div className="w-full max-w-md flex flex-col items-center md:items-start justify-center md:justify-start gap-8 text-midnight-blue-main">
          <div className="w-full flex flex-col items-center md:items-start justify-start gap-8">
            {/* Logo centered on small screens */}
            <img
              className="w-16 h-16"
              alt="Logo"
              src="/images /reshot-icon-molecules-YBNSD562JC 1.svg"
            />
            <div className="flex flex-col gap-6 w-full">
              <div className="text-3xl font-extrabold text-[#29458c] text-center md:text-left">
                Login to Innovation Hub
              </div>
              <div className="flex flex-col gap-2 text-lg w-full">
                <label htmlFor="phone" className="font-medium text-lg">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="723120985"
                  className="w-full rounded-full border-[1px] h-14 px-4"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                />
              </div>
              <div
                className="rounded-full bg-incandescent-main flex items-center justify-center cursor-pointer w-full h-14"
                onClick={handleProceed}
              >
                <Button variant="proceed" className="w-full h-full">
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;

