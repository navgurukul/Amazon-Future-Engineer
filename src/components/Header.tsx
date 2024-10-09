
"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import Cookies from 'js-cookie';

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
  const [showBothButtons, setShowBothButtons] = useState<boolean>(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<boolean>(false);

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
        setShowBothButtons(true);
      } else {
        setHeaderBgColor("transparent");
        setShowBothButtons(false);
      }
    } else {
      setHeaderBgColor("bg-white");
      setShowBothButtons(true);
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

  // const googleTranslateBaseURL = "https://translate.google.com/translate?hl=";
  // const redirectToGoogleTranslator = (targetLang: string) => {
  //   const currentUrl = window.location.href;
  //   const translatedUrl = `${googleTranslateBaseURL}${targetLang}&sl=auto&tl=${targetLang}&u=${encodeURIComponent(
  //     currentUrl
  //   )}`;
  //   window.location.href = translatedUrl;
  // };

  const handleLanguageToggle = () => {
    if (currentLang === "en") {
      setCurrentLang("kn");
      // redirectToGoogleTranslator("kn");
    } else {
      setCurrentLang("en");
      // redirectToGoogleTranslator("en");
    }
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleDashboardClick = () => {
    router.push('/userdashboard');
    setIsProfileDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    Cookies.remove('loginData')
    localStorage.removeItem('loginData');
    setProfileOpen(null);
    setIsProfileDropdownOpen(false);
    router.push('/');
  };

  const whatsappLink = `https://wa.me/${6366969292}`;

  return (
    <>
      <div
        className={`fixed w-full ${
          isDropdownOpen || bgColor !== "home" ? "bg-white" : headerBgColor
        } text-center text-[14px] text-white transition-shadow duration-300 ${
          hasShadow && !isDropdownOpen
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
                headerBgColor === "transparent" &&
                bgColor === "home" &&
                !isDropdownOpen
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
                headerBgColor === "transparent" &&
                bgColor === "home" &&
                !isDropdownOpen
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
                headerBgColor === "transparent" &&
                bgColor === "home" &&
                !isDropdownOpen
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
                {/* Hamburger icon */}
                <div
                  className="h-[32px] flex flex-col items-end justify-center p-2 px-1 gap-[6px] cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {isDropdownOpen ? (
                    <Image
                      src="/login/close.svg"
                      alt="Close"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <>
                      <div
                        className={`w-[24px] h-[2px] relative rounded-full ${
                          headerBgColor === "transparent" && !isDropdownOpen
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />
                      <div
                        className={`w-[16px] h-[2px] relative rounded-full ${
                          headerBgColor === "transparent" && !isDropdownOpen
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />
                      <div
                        className={`w-[8px] h-[2px] relative rounded-full ${
                          headerBgColor === "transparent" && !isDropdownOpen
                            ? "bg-white"
                            : "bg-black"
                        }`}
                      />
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Language Selector for desktop */}
                <div
                  className={`flex items-center h-10 sm:h-12 rounded-full p-1 sm:p-2 gap-1 sm:gap-2 bg-${
                    headerBgColor !== "transparent" || bgColor != "home"
                      ? "incandescent-light"
                      : "white"
                  }`}
                >
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
                  <div className="relative">
                    <Image
                      className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-full cursor-pointer"
                      alt="User Avatar"
                      src="/login/avatarIcon.svg"
                      width={56}
                      height={56}
                      onClick={handleProfileClick}
                    />
                    {isProfileDropdownOpen && (
                      <div className={`absolute right-0 mt-2 ${isMobile ? 'w-screen' : 'w-48'} bg-white rounded-md shadow-lg z-50`}>
                        <div className="py-2">
                          <button
                            onClick={handleDashboardClick}
                            className="block w-full text-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                          >
                          <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-text-primary text-center">Dashboard</div>
                          </button>
                          <button
                            onClick={handleLogoutClick}
                            className="block w-full text-center px-4 py-3 text-sm text-red-600 hover:bg-gray-100 transition duration-150 ease-in-out"
                          >
                          <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-incandescent-main text-center">Logout</div>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
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
          {isMobile && isDropdownOpen && (
            <div className="fixed w-full top-[104px] bg-[#FFF] left-0 shadow-lg z-40 rounded-b-2xl">
              <div className="p-4 flex flex-col items-center gap-4">
                {profileOpen ? (
                  <Image
                    className="w-10 h-10 object-cover rounded-full"
                    alt="User Avatar"
                    src="/login/avatarIcon.svg"
                    width={40}
                    height={40}
                  />
                ) : (
                  <button
                    className="w-full h-12 bg-[#F55C38] rounded-full text-white font-medium"
                    onClick={handleBookSessionClick}
                  >
                    Login
                  </button>
                )}
                <div className="w-auto mx-auto flex items-center h-10 rounded-full p-1 gap-1 bg-incandescent-light">
                  <div
                    className={`flex-1 flex items-center justify-center rounded-full h-8 px-3 ${
                      currentLang === "en"
                        ? "bg-[#F55C38] text-white"
                        : "text-[#F55C38]"
                    }`}
                    onClick={handleLanguageToggle}
                  >
                    <div className="text-sm font-medium cursor-pointer">Eng</div>
                  </div>
                  <div
                    className={`flex-1 flex items-center justify-center rounded-full h-8 px-3 ${
                      currentLang === "kn"
                        ? "bg-[#F55C38] text-white"
                        : "text-[#F55C38]"
                    }`}
                    onClick={handleLanguageToggle}
                  >
                    <div className="text-sm font-medium cursor-pointer">ಅಇಈ</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* chat with us and call us button for small screens*/}
        {isMobile && !isDropdownOpen && (
          <div className={`fixed w-full left-0 right-0 ${headerBgColor} ${hasShadow ? "shadow-md" : ""}`} style={{top: "104px"}}>
            <div className="flex justify-between px-4 space-x-2 py-2">
              {(headerBgColor === "bg-white" || bgColor !== "home") && (
                <button
                  className="flex-1 flex items-center justify-center h-12 rounded-full p-2 px-4 gap-2 bg-white text-[#F55C38] border-2 border-[#F55C38] shadow-md"
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
                </button>
              )}
              <a
                href={whatsappLink}
                className="flex-1 relative rounded-[100px] border-text-primary border-[1px] border-solid box-border w-full h-12 flex flex-row items-center justify-center py-2 px-4 gap-3 text-center text-base text-text-primary font-mobiletypestyles-buttonlarge bg-white"
              >
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/login/reshot-icon-whatsapp-UANBKF398R 1.svg"
                  height={24}
                  width={24}
                />
                <div className="relative text-base leading-[170%] font-medium font-mobiletypestyles-buttonlarge text-text-primary text-center">
                  Chat with Us
                </div>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Added conditional rendering for spacing */}
      {isMobile && bgColor !== "home" && <div className="h-[64px]"></div>}
    </>
  );
};

export default Header;
