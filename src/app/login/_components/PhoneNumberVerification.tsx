import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, ChangeEvent } from "react";
import VerifyOTP from "./VerifyOTP";

const PhoneNumberVerification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showOTPVerification, setShowOTPVerification] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    setErrorMessage(""); 
  };

  const handleProceed = async () => {
    const phonePattern = /^[6-9]\d{9}$/; 

    if (!phoneNumber) {
      setErrorMessage("Please enter a phone number to proceed");
      return;
    }

    if (phoneNumber.length !== 10) {
      setErrorMessage("Please enter a 10 digit phone number");
      return;
    }

    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage("Please enter a phone number starting with 6 or above");
      return;
    }

    try {
      await fetch("http://13.127.216.196/api/v1/auth/send-otp", {
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
    <div className="w-full p-6 md:p-20 flex flex-col text-left text-midnight-blue-main">
      {showOTPVerification ? (
        <VerifyOTP phoneNumber={phoneNumber} setShowOTPVerification={setShowOTPVerification} />
      ) : (
        <div className="w-full max-w-md grid gap-4 items-center justify-center md:justify-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              className="w-16 h-16"
              alt="Logo"
              src="/login/reshot-icon-molecules-YBNSD562JC 1.svg"
            />
          </div>

          {/* Title */}
          <div className="relative text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-midnight-blue-main text-left">Login to AFE Makerspace Lab</div>

          {/* Phone Number Input */}
          <div className="grid gap-2 w-full">
            <label
              htmlFor="phone"
              className={`relative text-sm leading-[170%] font-medium font-['Amazon Ember'] ${errorMessage ? "text-error-main" : "text-text-primary"}`}
            >
              Phone Number
            </label>
            <div className="flex flex-col gap-4">
              <Input
                id="phone"
                type="tel"
                placeholder={errorMessage ? "" : "723120985"}
                className={`w-[120%] md:w-[115%] rounded-full border h-14 px-4 text-lg text-darkslategray ${errorMessage ? "border-error-main" : "border-web-light-text-primary"}`}
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
              {errorMessage && (
                <span className="text-error-main text-sm">{errorMessage}</span>
              )}
              {/* Proceed Button */}
              <Button
                onClick={handleProceed}
                className="w-[120%] md:w-[115%] h-14 rounded-full bg-incandescent-main text-web-light-background-default font-medium text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;







