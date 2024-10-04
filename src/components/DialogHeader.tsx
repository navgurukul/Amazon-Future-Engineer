import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const DialogHeader: React.FC = () => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<"en" | "kn">("en");

  const handleBackClick = () => {
      router.back();
  };
  const googleTranslateBaseURL = "https://translate.google.com/translate";

  const redirectToGoogleTranslator = (targetLang: string) => {
    const currentUrl = window.location.href;
    const translatedUrl = `${googleTranslateBaseURL}?_x_tr_sl=auto&_x_tr_tl=${targetLang}&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_hist=true&u=${encodeURIComponent(
      currentUrl
    )}`;
    window.location.href = translatedUrl;
  };

  const handleLanguageToggle = () => {
    if (currentLang === "en") {
      setCurrentLang("kn");
      redirectToGoogleTranslator("kn");
    } else {
      setCurrentLang("en");
      redirectToGoogleTranslator("en");
    }
  };
  return (
    <div className="w-full h-[80px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center fixed top-0 z-50">
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
    
    <div className="flex items-center h-10 sm:h-12 rounded-full p-1 sm:p-2 gap-1 sm:gap-2 bg-incandescent-light">
    <div
      className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${
        currentLang === "en"
          ? "bg-[#F55C38] text-white"
          : "text-[#F55C38]"
      }`}
      onClick={handleLanguageToggle}
    >
      <div className="text-sm sm:text-base font-medium cursor-pointer">
        Eng
      </div>
    </div>
    <div
      className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${
        currentLang === "kn"
          ? "bg-[#F55C38] text-white"
          : "text-[#F55C38]"
      }`}
      onClick={handleLanguageToggle}
    >
      <div className="text-sm sm:text-base font-medium cursor-pointer">
        ಅಇಈ
      </div>
    </div>
  </div>
    </div>
  );
};

export default DialogHeader;

