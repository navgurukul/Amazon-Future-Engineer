import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import { verifyOtp, resendOtp } from "@/utils/api"; 
import Cookies from "js-cookie"; 
import Image from "next/image";

interface VerifyOTPProps {
  length?: number;
  setShowOTPVerification: (show: boolean) => void;
  phoneNumber: string;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({
  length = 6,
  setShowOTPVerification,
  phoneNumber,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(119);
  const [isResendAllowed, setIsResendAllowed] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendAllowed(true);
    }
  }, [seconds]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpString = otp.join("");

    if (otp.some((digit) => digit === "")) {
      setError("Please enter an OTP to proceed");
      return;
    }

    if (otpString.length !== length) {
      setError("Please enter a valid OTP");
      return;
    }

    setError("");

    try {
      const response = await verifyOtp(phoneNumber, otpString); 
      localStorage.setItem("loginData", JSON.stringify(response));
      Cookies.set("loginData", JSON.stringify(response), { expires: 7 }); 
      const userId = JSON.stringify(response.userId);
      localStorage.setItem("LoginId", userId);
      setMessage(response.message);
      router.push("/sprintPages/nanopage");
    } catch (err: any) {
      setMessage("");
      setError("Please enter a valid OTP");
    }
  };

  const handleResendOTP = async () => {
    try {
      await resendOtp(phoneNumber); 
      setSeconds(119);
      setIsResendAllowed(false);
    } catch (err: any) {
      setError("Please enter a valid OTP");
    }
  };

  const handlePreviousScreen = () => {
    setShowOTPVerification(false);
  };


  return (
    <div className="px-4 sm:px-4 mx-auto mt-12 md:mx-0 md:mt-0">
      <div className="flex flex-col items-start gap-8 self-stretch md:self-auto">
        <div>
          <Image
            src="/login/arrow_back.svg"
            alt="back"
            onClick={handlePreviousScreen}
            className="cursor-pointer"
            width={24} 
            height={24}
          />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="relative text-5xl leading-[150%] text-heading5 font-heading5-bold text-midnight-blue-main text-left">
            Please enter the OTP sent to your mobile
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div>
              <div className="flex items-start gap-4 w-full">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    ref={(input) => {
                      inputRefs.current[index] = input;
                    }}
                    value={digit}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`flex h-14 w-full max-w-[3rem] sm:max-w-full px-3 justify-center items-center border rounded-lg text-center text-darkslategray text-lg
                      ${error ? "border-error-main" : "border-gray-300"} 
                      md:max-w-[3rem]`}
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="mt-2">
                {error && (
                  <span className="text-[#F44336] font-body2-regular text-body2 leading-[1.4875rem]">
                    {error}
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="proceed"
              onClick={handleVerifyOTP}
              className="flex w-full sm:w-full md:w-[23rem] h-14 py-2 px-8 justify-center items-center gap-2 rounded-[6.25rem]"
            >
              Verify OTP
            </Button>
            <div className="relative text-lg leading-[170%] font-medium font-['Amazon Ember'] text-left text-darkslategray">
              {isResendAllowed ? (
                <button
                  onClick={handleResendOTP}
                  className="font-['Amazon Ember Display'] text-midnight-blue-main text-left underline"
                >
                  Resend OTP
                </button>
              ) : (
                <span>
                  Taking too long?{" "}
                  <span className="text-incandescent-main">Resend code</span> in{" "}
                  {`${Math.floor(seconds / 60)}:${
                    seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
                  } s`}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
