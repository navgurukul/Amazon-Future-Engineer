"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useState, useEffect, useCallback } from "react";

interface HeaderProps {
  bgColor: string;
  handleOfflineBooking: () => void;
  offlinePopup: boolean;
  openSecondPopup: boolean;
  bookingPopup: boolean;
  handleBookSessionClick: () => void;
}

const Header: NextPage<HeaderProps> = ({
  handleOfflineBooking,
  offlinePopup,
  openSecondPopup,
  bgColor,
  bookingPopup,
  handleBookSessionClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [headerBgColor, setHeaderBgColor] = useState<string>("transparent");
  const [currentLang, setCurrentLang] = useState<"en" | "kn">("en");
  const [showCallUs, setShowCallUs] = useState<boolean>(false);

  const isLandingPage = pathname === "/";

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const open = localStorage.getItem("loginData");
    const parsedOpen = open ? JSON.parse(open) : null;
    if (open) {
      setProfileOpen(parsedOpen.status);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }

    if (isLandingPage) {
      if (scrollPosition > windowHeight) {
        setHeaderBgColor("bg-white");
        setShowCallUs(true);
      } else {
        setHeaderBgColor("transparent");
        setShowCallUs(false);
      }
    } else {
      setHeaderBgColor("bg-white");
    }
  }, [isLandingPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const onReshotIconClick = () => {
    router.push("/");
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

  const whatsappLink = `https://wa.me/${9329796819}`;

  return (
    <>
      <div
        className={`fixed w-full h-[104px] ${headerBgColor} text-center text-[14px] text-white transition-shadow duration-300 ${
          hasShadow
            ? "shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_1px_rgba(0,0,0,0.04),0_1px_5px_rgba(0,0,0,0.08)]"
            : ""
        } z-${
          offlinePopup || openSecondPopup || bookingPopup ? 0 : 50
        } px-4 sm:px-8 md:px-12 py-6`}
      >
        <div className="mx-auto flex justify-between items-center h-full">
          {/* Reshot Icon */}
          <div className="hidden md:flex items-center gap-[5px]">
            <Image
              className="object-contain cursor-pointer mt-2"
              alt="Reshot Icon"
              src={`/login/Group (${
                headerBgColor === "transparent" && bgColor === "home"
                  ? "8"
                  : "2"
              }).svg`}
              onClick={onReshotIconClick}
              width={64}
              height={64}
            />
            <Image
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src={`/login/Group (${
                headerBgColor === "transparent" && bgColor === "home"
                  ? "9"
                  : "3"
              }).svg`}
              onClick={onReshotIconClick}
              width={150}
              height={70}
            />
          </div>
          <div className="md:hidden">
            <Image
              className="object-contain cursor-pointer"
              alt="Reshot Icon"
              src={`/login/Group(${
                headerBgColor === "transparent" && bgColor === "home"
                  ? "11"
                  : "12"
              }).svg`}
              onClick={onReshotIconClick}
              width={120}
              height={40}
            />
          </div>
          {/* Right side buttons */}
          <div className="flex items-center gap-4 sm:gap-8">
            {isMobile ? (
              <>
                {/* Language Selector for mobile */}
                <div className="flex items-center h-10 rounded-full p-1 gap-1 bg-[#FFF]">
                  <div
                    className={`flex items-center justify-center rounded-full h-8 px-3 py-2 ${
                      currentLang === "en"
                        ? "bg-[#F55C38] text-white"
                        : "text-[#F55C38]"
                    }`}
                    onClick={handleLanguageToggle}
                  >
                    <div className="text-sm font-medium cursor-pointer">
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
                    <div className="text-sm font-medium cursor-pointer">
                      ಅಇಈ
                    </div>
                  </div>
                </div>

                {/* Hamburger icon */}
                <div
                  className="h-[32px] flex flex-col items-end justify-center p-2 px-1 gap-[6px] cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div
                    className={`w-[24px] h-[2px] relative rounded-full ${
                      headerBgColor === "transparent" ? "bg-white" : "bg-black"
                    }`}
                  />
                  <div
                    className={`w-[16px] h-[2px] relative rounded-full ${
                      headerBgColor === "transparent" ? "bg-white" : "bg-black"
                    }`}
                  />
                  <div
                    className={`w-[8px] h-[2px] relative rounded-full ${
                      headerBgColor === "transparent" ? "bg-white" : "bg-black"
                    }`}
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4">
                    {profileOpen ? (
                      <Image
                        className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-full mt-4"
                        alt="User Avatar"
                        src="/nanopage/Ellipse 1.svg"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <nav
                        className="flex items-center justify-center md:h-12 bg-[#F0F0F0] rounded-full p-2 px-4 sm:px-8 gap-2 sm:gap-3 text-base sm:text-lg text-[#F55C38] cursor-pointer mt-2"
                        onClick={handleBookSessionClick}
                      >
                        <span className="relative font-medium leading-[170%]">
                          Login
                        </span>
                      </nav>
                    )}
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Language Selector for desktop */}
                <div className="flex items-center h-10 sm:h-12 rounded-full p-1 sm:p-2 gap-1 sm:gap-2 bg-[#FFF]">
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

                {/* Helpdesk Section */}
                {(headerBgColor === "bg-white" || bgColor !== "home") && (
                  <div
                    className="hidden sm:flex flex-row items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#FFF] text-[#F55C38] border-2 border-[#F55C38] cursor-pointer"
                    onClick={handleOfflineBooking}
                  >
                    <Image
                      className="w-8 h-8 object-cover"
                      alt="Helpdesk Icon"
                      src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
                      width={32}
                      height={32}
                    />
                    <div className="font-medium leading-[170%]">Call Us</div>
                  </div>
                )}

                {profileOpen ? (
                  <Image
                    className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-full"
                    alt="User Avatar"
                    src="/nanopage/Ellipse 1.svg"
                    width={56}
                    height={56}
                  />
                ) : (
                  <nav
                    className="flex items-center justify-center h-12 bg-[#FFF] rounded-full p-2 px-4 sm:px-8 gap-2 sm:gap-3 text-base sm:text-lg text-[#F55C38] cursor-pointer"
                    onClick={handleBookSessionClick}
                  >
                    <span className="relative font-medium leading-[170%]">
                      Login
                    </span>
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button for small screens */}
      {isMobile ? (
        <div className="fixed w-full top-[104px] z-40">
          <div
            className={`flex ${
              showCallUs ? "justify-between" : "justify-center"
            } p-4`}
          >

          {showCallUs || bgColor!=="home" && (
            <div
              className="flex items-center justify-center h-12 rounded-full p-2 px-4 gap-2 bg-white text-[#F55C38] border-2 border-[#F55C38] cursor-pointer ml-4 shadow-md"
              onClick={handleOfflineBooking}
            >
              <Image
                className="w-6 h-6 overflow-hidden"
                alt="Helpdesk Icon"
                src="/nanopage/reshot-icon-friendly-customer-service-C63QKLHVB9.svg"
                width={24}
                height={24}
              />
              <div className="font-medium leading-[170%]">Call Us</div>
            </div>
          )}
            <a
              href={whatsappLink}
              className="flex-1 rounded-full bg-white h-12 flex flex-row items-center justify-center py-2 px-4 box-border gap-3 no-underline text-inherit shadow-md"
            >
              <Image
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/login/reshot-icon-whatsapp-UANBKF398R 1.svg"
                height={24}
                width={24}
              />
              <div className="relative leading-[170%] font-medium">
                Chat with Us
              </div>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
