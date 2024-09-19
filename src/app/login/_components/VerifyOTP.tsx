import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";

interface VerifyOTPProps {
  length?: number;
  setShowOTPVerification: (value: boolean) => void;
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
      const response = await axios.post(
        "http://13.127.216.196/api/v1/auth/verify-otp",
        {
          phone: phoneNumber,
          otp: otpString,
        }
      );

      localStorage.setItem("userData", JSON.stringify(response.data));
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      setMessage(response.data.message);
      router.push("/sprintPages/nanopage");
    } catch (err: any) {
      setMessage("");
      setError("Please enter a valid OTP");
    }
  };

  const handleResendOTP = async () => {
    try {
      await axios.post("http://13.127.216.196/api/v1/auth/send-otp", {
        phone: phoneNumber, // Use phoneNumber prop for resending OTP
      });
      setSeconds(119); // Reset to 1:59
      setIsResendAllowed(false);
    } catch (err: any) {
      setError("Please enter a valid OTP");
    }
  };

  const handlePreviousScreen = () => {
    setShowOTPVerification(false);
  };

  return (
    <div className="w-[90%] md:w-[70%] flex flex-col items-start justify-start gap-4">
      <img
        src="/login/arrow_back.svg"
        alt="back"
        onClick={handlePreviousScreen}
      />
      <p className="relative text-5xl mt-2 leading-[150%] font-extrabold font-['Amazon Ember Display'] text-midnight-blue-main text-left whitespace-nowrap">
        Please enter the OTP sent to your mobile
      </p>
      <div>
        {/* OTP Input Fields */}
        <div className="grid grid-cols-6 gap-2 mb-2">
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
              className={`w-[50px] h-[60px] p-2 border rounded-lg text-center text-darkslategray text-lg
                ${error ? "border-error-main" : "border-gray-300"}`}
              maxLength={1}
            />
          ))}
        </div>
        {/* Error Message */}
        {error && <span className="text-error-main text-sm mt-1">{error}</span>}
      </div>

      {/* Verify Button */}
      <Button
        variant="proceed"
        onClick={handleVerifyOTP}
        className="w-full h-14 rounded-full bg-incandescent-main text-web-light-background-default font-medium text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default"
      >
        Verify OTP
      </Button>

      {/* Resend Timer */}
      <div className="relative text-lg leading-[170%] font-medium font-['Amazon Ember'] text-left text-darkslategray mt-4">
        {isResendAllowed ? (
          <button
            onClick={handleResendOTP}
            className="font-['Amazon Ember Display'] text-midnight-blue-main text-left underline"
          >
            Resend OTP
          </button>
        ) : (
          <span>
            Taking too long? <span className="text-red-600">Resend code</span> in{" "}
            {`${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60} s`}
          </span>
        )}
      </div>
    </div>
  );
};

export default VerifyOTP;



