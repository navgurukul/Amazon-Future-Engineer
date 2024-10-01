import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const DialogHeader: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  // fixed top-0 z-5

  return (
    <div className="w-full h-[80px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center">
    <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackClick}>
      <div className="w-6 h-6 relative">
        <Image
          src="/userDashboard/chevron_left.svg"
          alt="Back Icon"
          width={7.41}
          height={12}
          className="w-full h-full"
        />
      </div>
      <div className="text-lg text-[#3a3a3a] font-medium">Back</div>
    </div>
    
    <div className="h-12 p-2 bg-[#fdded7] rounded-[100px] flex justify-center items-center gap-1">
      <div className="h-8 px-3 py-2 bg-[#f55c38] rounded-full justify-center items-center gap-2 flex">
        <div className="text-center text-white text-sm font-medium font-['Amazon Ember'] leading-normal">
          Eng
        </div>
      </div>
      <div className="h-8 px-3 py-2 rounded-full justify-center items-center gap-2 flex">
        <div className="text-center text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">
          ಅಇಈ
        </div>
      </div>
    </div>
    </div>
  );
};

export default DialogHeader;

