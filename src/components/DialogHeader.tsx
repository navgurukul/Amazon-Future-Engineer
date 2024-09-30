import React from 'react';
import { useRouter } from 'next/navigation';

const DialogHeader: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="w-full h-[80px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center fixed top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackClick}>
        <div className="w-6 h-6 relative">
          <img
            src="/userDashboard/chevron_left.svg"
            alt="Back Icon"
            className="w-full h-full"
          />
        </div>
        <div className="text-lg text-[#3a3a3a] font-medium">Back</div>
      </div>

      {/* Language Selection (Fixed as "Eng" selected) */}
      <div className="flex items-center h-8 w-32 bg-incandescent-light rounded-full p-1">
        {/* Eng Option (Selected by Default) */}
        <div className="w-1/2 flex items-center justify-center text-sm sm:text-base font-medium bg-incandescent-main text-[#fff] rounded-full h-full">
          Eng
        </div>

        {/* Kannada Option (Unselected) */}
        <div className="w-1/2 flex items-center justify-center text-sm sm:text-base font-medium text-primary">
          ಅಇಈ
        </div>
      </div>
    </div>
  );
};

export default DialogHeader;

