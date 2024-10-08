import { Button } from "@/components/ui/button";
import { verifyOtp, resendOtp } from "@/utils/api";
import { getProgramData } from "@/utils/api";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";

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

  const fetchProgramData = async () => {
    const programId: number = 2;
    const programData = await getProgramData(programId);
    console.log(programData);
    localStorage.setItem("programData", JSON.stringify(programData));
  };

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
      fetchProgramData()
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
        <div className="flex gap-2">
          <Image
            src="/login/chevron_left.svg"
            alt="back"
            onClick={handlePreviousScreen}
            className="cursor-pointer overflow-hidden"
            width={24}
            height={24}
          />
          <div className="leading-[170%] font-extrabold">Back</div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-midnight-blue-main text-left">
            Please enter the OTP
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
                    className={`sm:max-w-full w-full rounded-lg border-grey-400 border-[1px] border-solid box-border h-14 py-0 px-3 text-center text-lg text-text-primary font-webtypestyles-body1
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
            <div className="text-lg leading-[170%] font-medium font-['Amazon Ember'] text-left text-darkslategray">
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
            <div className="w-full fixed bottom-0 mb-4 px-4 md:mb-0 md:px-0 left-0 md:static">
            <Button
              variant="proceed"
              onClick={handleVerifyOTP}
              className="flex w-full sm:w-full md:w-[23rem] h-14 py-2 px-8 justify-center items-center gap-2 rounded-[6.25rem] font-medium "
            >
              Verify OTP
            </Button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
