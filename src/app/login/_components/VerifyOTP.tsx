import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";

interface VerifyOTPProps {
  length?: number;
  setShowOTPVerification: (value: boolean) => void;
  phoneNumber: string;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({ length = 6, setShowOTPVerification, phoneNumber }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(120);
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
    try {
      console.log("phoneNumber",phoneNumber)
      const otpString = otp.join("");
      const response = await axios.post("http://13.127.216.196/api/v1/auth/verify-otp", {
        phone: phoneNumber, // Use phoneNumber prop here
        otp: otpString,
      });

      localStorage.setItem("userData", JSON.stringify(response.data));
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      setMessage(response.data.message);
      router.push("/sprintPages/nanopage");
      setError("");
    } catch (err: any) {
      setMessage("");
      setError(err.response?.data?.message || "Error verifying OTP");
    }
  };

  const handleResendOTP = async () => {
    try {
      await axios.post("http://13.127.216.196/api/v1/auth/send-otp", {
        phone: phoneNumber, // Use phoneNumber prop for resending OTP
      });
      setSeconds(120); 
      setIsResendAllowed(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error resending OTP");
    }
  };

  const handlePreviousScreen = () => {
    setShowOTPVerification(false);
  };

  return (
    <div className="w-[90%] md:w-[70%] flex flex-col items-start justify-start gap-8">
      <img
        src="/login/arrow_back.svg"
        alt="back"
        onClick={handlePreviousScreen}
      />
      <p className="relative text-5xl leading-[150%] font-extrabold font-['Amazon Ember Display'] text-midnight-blue-main text-left">
        Please enter the OTP sent to your mobile
      </p>
      <div className="grid grid-cols-6 gap-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            // ref={(input) => (inputRefs.current[index] = input)}
            // ref={(input: HTMLInputElement | null) => (inputRefs.current[index] = input)}
            // ref={(input) => (inputRefs.current[index] = input as HTMLInputElement | null)}
            ref={(input) => {
              inputRefs.current[index] = input;
            }}            
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-full p-2 border rounded text-center text-darkslategray"
            maxLength={1}
          />
        ))}
      </div>
      <div className="relative text-lg leading-[170%] font-medium font-['Amazon Ember'] text-left text-darkslategray">
      {isResendAllowed ? (
        <button onClick={handleResendOTP} className="font-['Amazon Ember Display'] text-midnight-blue-main text-left underline">
          Resend code
        </button>
      ) : (
        <span>
          Taking too long?{" "}
          <span className="text-red-600">Resend code</span>{" "}in{" "}
          {`${Math.floor(seconds / 60)}:${seconds % 60} s`}
        </span>
      )}
    </div>
    
      <div className="relative text-lg leading-[170%] font-medium font-webtypestyles-buttonlarge text-left text-darkslategray">
        {isResendAllowed ? (
          <button onClick={handleResendOTP} className="font-webtypestyles-h6 text-midnight-blue-main text-left underline">
            Resend code
          </button>
        ) : (
          <span>
            Taking too long?{" "}
            <span className="text-red-600">Resend code</span> in{" "}
            {`${Math.floor(seconds / 60)}:${seconds % 60} s`}
          </span>
        )}
      </div>

      <Button variant="proceed" onClick={handleVerifyOTP} className="relative leading-[170%] font-medium">
        Verify OTP
      </Button>
      {message && <div className="pt-2 text-green-600">{message}</div>}
      {error && <div className="pt-2 text-red-600">{error}</div>}
    </div>
  );
};

export default VerifyOTP;
