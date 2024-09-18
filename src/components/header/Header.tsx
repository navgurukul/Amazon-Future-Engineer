import { useState, useCallback } from "react";
import Image from "next/image";
import type { NextPage } from "next";

const Header: NextPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");

  const toggleLanguage = useCallback(() => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === "Eng" ? "Kannada" : "Eng"
    );
  }, []);

  return (
    <div className="w-full relative bg-bg-surface-default h-[120px] text-center text-sm text-bg-surface-default font-webtypestyles-buttonsmall">
      <div className="flex flex-row justify-between items-center h-full px-4">
        {/* Left Section - Logo */}
        <div className="relative w-[72px] h-[72px] cursor-pointer">
          <Image
            alt="Logo"
            src="/nanopage/reshot-icon-molecules-YBNSD562JC 1.svg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Section - Language Switcher and Avatar */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center bg-whitesmoke-200 rounded-full p-2 gap-2 cursor-pointer" onClick={toggleLanguage}>
            {/* Language Button */}
            <div
              className={`flex items-center justify-center rounded-full h-8 px-4 py-2 font-medium ${
                selectedLanguage === "Eng"
                  ? "bg-incandescent-main text-white"
                  : "bg-whitesmoke-100 text-text-primary"
              }`}
            >
              Eng
            </div>

            {/* Language Button */}
            <div
              className={`flex items-center justify-center rounded-full h-8 px-4 py-2 font-medium ${
                selectedLanguage === "Kannada"
                  ? "bg-incandescent-main text-white"
                  : "bg-whitesmoke-100 text-text-primary"
              }`}
            >
              ಅಇಈ
            </div>
          </div>

          {/* Profile Avatar */}
          <div className="relative w-14 h-14 rounded-full">
            <Image
              alt="User Avatar"
              src="/nanopage/Ellipse 1.svg"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

