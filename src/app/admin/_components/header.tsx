"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "kn">("en");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = useRouter()

  const handleLanguageToggle = () => {
    setCurrentLang(currentLang === "en" ? "kn" : "en");
  };

  const handleAvatarClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('adminData');
    Cookies.remove('adminData');
    router.push("/admin")

  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileDropdownOpen && !(event.target as Element).closest('.profile-dropdown')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

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
          <div className="relative profile-dropdown">
            <Image
              className="object-cover rounded-full cursor-pointer"
              alt="User Avatar"
              src="/login/avatarIcon.svg"
              width={48}
              height={48}
              onClick={handleAvatarClick}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <div className="py-2">
                  <button
                    onClick={handleLogoutClick}
                    className="block w-full text-center px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-incandescent-main text-center">
                      Logout
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
