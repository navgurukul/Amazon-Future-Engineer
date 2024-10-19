import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    name: string;
    date: string;
    time: string;
    students: number;
  };
}

const BookingPopup: React.FC<BookingPopupProps> = ({ isOpen, onClose, bookingData }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleGoToDashboard = () => {
    window.location.reload();
    onClose();
  };

  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric' 
    });
  };

  return (
    <div className="w-full min-h-screen bg-bg-surface-default flex flex-col items-center px-8 sm:px-[16px]">
      <div className="w-full max-w-[592px] h-[75px] flex items-stretch justify-between px-4 relative md:text-center">
        <Image src="/symbols/Vector (8).svg" alt="Image 1" width={30} height={30} className="rounded-full self-start mt-8" />
        <div className="flex items-center self-center">
          <Image src="/symbols/Vector (7).svg" alt="Arrow Left" width={20} height={20} className="mt-8" />
          <Image src="/symbols/Vector (4).svg" alt="Arrow Right" width={20} height={20} className="ml-1 mt-14" />
        </div>
       {/* <Image src="symbols/colon (1).svg" alt="Colon" width={32} height={32} className="self-end mb-10" /> */}
        <Image src="/symbols/Vector (2).svg" alt="Image 2" width={32} height={32} className="self-end mt-2 md:hidden" />
        <Image src="/symbols/Vector (5).svg" alt="Image 3" width={30} height={30} className="self-center" />
        <div className="items-center self-start mt-2 hidden md:flex">
          <Image src="/symbols/Vector (9).svg" alt="Arrow Left" width={16} height={16} className="mt-4" />
          <Image src="/symbols/Vector (6).svg" alt="Arrow Right" width={16} height={16} className="ml-1 mt-8" />
        </div>
      </div>

      <div className="w-full max-w-[592px] mt-[60px] p-6 md:p-8 flex flex-col items-start justify-start gap-6 text-left text-base md:text-lg text-text-primary font-mobiletypestyles-body1 md:font-webtypestyles-body1 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_2px_1px_rgba(0,_0,_0,_0.04),_0px_1px_5px_rgba(0,_0,_0,_0.08)] rounded-lg sm:px-[16px]">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
        <div className="text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-text-primary w-full text-center">Nano Sprint</div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-8 w-full">
            {[
              { icon: "/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg", text: formatDate(bookingData.date) },
              { icon: "/userDashboard/reshot-icon-time-SRKEMN64PU.svg", text: bookingData.time },
              { icon: "/userDashboard/reshot-icon-student-DRC3YF56MU.svg", text: `${bookingData.students} Students` },
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center justify-start gap-3">
                <Image src={item.icon} alt="" width={32} height={32} className="w-8 h-8" />
                <div className="relative leading-[170%] font-medium">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="self-stretch relative leading-[170%] font-medium md:text-center">
          The sprint has been successfully submitted!
        </p>
      </div>

      <button
        onClick={handleGoToDashboard}
        className="mt-8 md:w-auto relative rounded-[100px] border-incandescent-main border-[1px] border-solid box-border h-14 flex flex-row items-center justify-center py-2 px-4 text-center text-lg text-incandescent-main font-webtypestyles-buttonlarge w-full"
      >
        <div className="relative leading-[170%] font-medium">Go to Dashboard</div>
      </button>
    </div>
  );
};

export default BookingPopup;
