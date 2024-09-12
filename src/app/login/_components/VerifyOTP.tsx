import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios"; 
import { useRouter } from "next/navigation";

const VerifyOTP = ({ length = 6 ,setShowOTPVerification}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(120);
  const [isResendAllowed, setIsResendAllowed] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Timer effect for OTP resend
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendAllowed(true);
    }
  }, [seconds]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Prevent non-numeric inputs

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to the next input automatically
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // OTP submission handler
  const handleVerifyOTP = async () => {
    try {
      const otpString = otp.join("");
      const response = await axios.post("http://localhost:5000/verifyOTP", {
        otp: otpString,
      });

      localStorage.setItem("userData", JSON.stringify(response.data));
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      setMessage(response.data.message);
      router.push("/profile");
      setError("");
    } catch (err) {
      setMessage("");
      setError(err.response?.data?.message || "Error verifying OTP");
    }
  };

  // OTP resend handler
  const handleResendOTP = async () => {
    try {
      await axios.post("http://localhost:5000/resendOTP", {
        email: localStorage.getItem("userEmail"),
      });
      setSeconds(120); // Reset the timer
      setIsResendAllowed(false);
    } catch (err) {
      setError(err.response?.data?.message || "Error resending OTP");
    }
  };

  const handlePriviousScreen = ()=>{
    setShowOTPVerification(false);
  }

  return (
    <div className="w-[90%] md:w-[70%] flex flex-col items-start justify-start gap-8 text-midnight-blue-main">
      <img src="/images /arrow_back.svg" alt="back" onClick={handlePriviousScreen}/>
      <p className="elative text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-midnight-blue-main text-left">Please enter the OTP sent to your mobile</p>
      <div className="grid grid-cols-6 gap-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-full p-2 border rounded text-center"
            maxLength={1}
          />
        ))}
      </div>
      <div className="mb-4 text-sm">
        {isResendAllowed ? (
          <button onClick={handleResendOTP} className="text-blue-600 underline">
            Resend code
          </button>
        ) : (
          `Taking too long? Resend code in ${Math.floor(seconds / 60)}:${
            seconds % 60
          }`
        )}
      </div>
      <Button variant="proceed" onClick={handleVerifyOTP}>
        Verify OTP
      </Button>
      {message && <div className="mt-4 text-green-600">{message}</div>}
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
  );
};

export default VerifyOTP;

