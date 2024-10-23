import DialogHeader from "@/components/DialogHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {useState } from "react";


interface BookingPopupProps {
  isOpen: boolean;
  bookingData: {
    name: string;
    date: string;
    time: string;
    students: number;
  };
}

const BookingPopup: React.FC<BookingPopupProps> = ({ isOpen, bookingData }) => {
  const router = useRouter();

  const whatsappLink = `https://wa.me/${6366969292}`;

  if (!isOpen) return null;

  const handleGoToDashboard = () => {
    router.push("/userdashboard");
  };

  const [copied, setCopied] = useState(false);

  const phoneNumber = " +91 63669-69292";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopied(true); 

        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full min-h-screen bg-bg-surface-default flex flex-col items-center pb-[64px] md:px-8 px-[16px]">
      <DialogHeader />

      <div className="w-full max-w-[592px] h-[75px] md:mt-[120px] mt-[100px] flex items-stretch justify-between px-4 relative md:text-center">
        <img src="/symbols/Frame 31751.svg" alt="coding symbols" />
      </div>

      <div className="w-full max-w-[592px] md:mt-[60px] mt-[24px] p-4 md:p-8 flex flex-col items-start justify-start gap-6 text-left text-base md:text-lg text-text-primary font-mobiletypestyles-body1 md:font-webtypestyles-body1 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_2px_1px_rgba(0,_0,_0,_0.04),_0px_1px_5px_rgba(0,_0,_0,_0.08)] rounded-lg px-[16px]">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
          <div className="w-full flex md:justify-center">
            <h2 className="text-xl md:text-5xl leading-[150%] font-['Amazon Ember Display']  md:text-heading6 text-left md:text-center text-subHeading1">Nano Sprint</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-8 w-full">
            {[
              { icon: "/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg", text: bookingData?.date },
              { icon: "/userDashboard/reshot-icon-time-SRKEMN64PU.svg", text: bookingData?.time },
              { icon: "/userDashboard/reshot-icon-student-DRC3YF56MU.svg", text: `${bookingData?.students} Students` },
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center justify-start gap-3">
                <Image src={item.icon} alt="" width={32} height={32} className="w-8 h-8" />
                <div className="relative whitespace-nowrap text-bodyM md:text-body1 font-['Amazon Ember'] leading-normal">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="self-stretch relative leading-[170%] font-['Amazon Ember'] text-bodyM md:text-body1  md:text-center">
          Thank you for your interest in booking a Nano Sprint at the AFE Makerspace, {bookingData?.name}! We will send you a confirmation email and SMS once your request has been approved by AFE Makerspace team.
        </p>

        <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:text-center">
          <span>{`Have questions? Call Us or Whatsapp on `}</span>
          {/* <a href={whatsappLink} target="_blank" className="text-tomato font-['Amazon Ember'] text-bodyM2 md:text-subTitle1">+9163669-69292</a> */}
          <strong className="inline-flex items-center">
            <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
              +91 63669-69292
            </a>
            <button
              className="hidden md:inline-flex px-3 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] gap-2 w-[89px] h-[40x]"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <img
                    src="/userDashboard/checkmark_icon.png"
                    alt="Check Icon"
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <img
                    src="/userDashboard/content_copy.svg"
                    alt="Copy Icon"
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copy
                  </span>
                </>
              )}
            </button>
          </strong>
        </p>
      </div>

      <button
        onClick={handleGoToDashboard}
        className="mt-8 md:w-auto relative rounded-[100px] border-incandescent-main border-[1px] border-solid box-border h-14 flex flex-row items-center justify-center py-2 px-4 md:px-8 text-center text-lg text-incandescent-main font-webtypestyles-buttonlarge w-full"
      >
        <div className="relative leading-[170%] font-medium md:text-body1 text-bodyM">Return to Dashboard</div>
      </button>
    </div>
  );
};

export default BookingPopup;