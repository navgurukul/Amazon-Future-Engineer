"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "kn">("en");

  const handleLanguageToggle = () => {
    setCurrentLang(currentLang === "en" ? "kn" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff] shadow-md">
      <div className="flex justify-between items-center px-12 py-8 w-full text-center text-sm font-webtypestyles-buttonlarge">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <div className="hidden md:flex">
            <Image
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src="/login/afe_subbrand_logo_horizontal_blue.svg"
              width={254}
              height={40}
            />
          </div>
          <div className="md:hidden">
            <Image
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src="/login/Group(11).svg"
              width={100}
              height={30}
            />
          </div>
        </div>
        {/* Language Toggle and Avatar */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <div className="flex gap-1 bg-incandescent-light p-2 rounded-[100px]">
            <Button
              variant={currentLang === "en" ? "proceed" : "proceedWhite"}
              className={`h-8 ${
                currentLang !== "en" ? "text-black bg-transparent" : ""
              }`}
              onClick={handleLanguageToggle}
            >
              Eng
            </Button>
            <Button
              variant={currentLang !== "en" ? "proceed" : "proceedWhite"}
              className={`h-8 ${
                currentLang === "en" ? "text-black bg-transparent" : ""
              }`}
              onClick={handleLanguageToggle}
            >
              ಅಇಈ
            </Button>
          </div>
          <Image
            className="object-cover rounded-full cursor-pointer"
            alt="User Avatar"
            src="/login/avatarIcon.svg"
            width={48}
            height={48}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
