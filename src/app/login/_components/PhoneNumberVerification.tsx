import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent } from "react";
import VerifyOTP from "./VerifyOTP";

const PhoneNumberVerification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showOTPVerification, setShowOTPVerification] = useState<boolean>(false);

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleProceed = async () => {
    try {
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
    <div className="w-full p-6 md:p-14 flex flex-col items-center justify-center text-left text-midnight-blue-main">
      {showOTPVerification ? (
        <VerifyOTP setShowOTPVerification={setShowOTPVerification} />
      ) : (
        <div className="w-full max-w-md grid gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              className="w-16 h-16"
              alt="Logo"
              src="/login/reshot-icon-molecules-YBNSD562JC 1.svg"
            />
          </div>

          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold  font-['Amazon Ember Display'] leading-[150%]">
              Login to Innovation Hub
            </h1>
          </div>

          {/* Phone Number Input */}
          <div className="grid gap-2">
            <label htmlFor="phone" className="relative text-sm leading-[170%] font-medium font-['Amazon Ember'] text-text-primary text-left">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="723120985"
              className="w-full rounded-full border border-web-light-text-primary h-14 px-4 text-lg"
              value={phoneNumber}
              onChange={handlePhoneNumber}
            />
          </div>

          {/* Proceed Button */}
          <div className="w-full">
            <Button
              onClick={handleProceed}
              className="w-full h-14 rounded-full bg-incandescent-main text-web-light-background-default font-medium text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default"
            >
              Proceed
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;


